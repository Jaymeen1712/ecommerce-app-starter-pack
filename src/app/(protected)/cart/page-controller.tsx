"use client";

import {
  createOrderByProfileId,
  createOrderItemsByOrderId,
  deleteAllCartItemsCartId,
  fetchCartByProfileId,
  fetchCartItemsIncludingProductsByCartId,
} from "@/db/queries";
import { useAppStore } from "@/store";
import { CartItemsIncludingProductType } from "@/types";
import { handleAPIResponse, handleShowError } from "@/utils";
import { Cart, Order } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useCartPageController = () => {
  const [cartItems, setCartItems] = useState<CartItemsIncludingProductType[]>(
    [],
  );
  const [isCartItemsLoading, setIsCartItemsLoading] = useState(true);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [isBuyButtonLoading, setIsBuyButtonLoading] = useState(false);

  const { profile } = useAppStore();

  const router = useRouter();

  const handleGetCartItems = useCallback(async () => {
    try {
      setIsCartItemsLoading(true);
      if (!profile) {
        return;
      }

      const { id: profileId } = profile;
      const { errors, response } = await fetchCartByProfileId({ profileId });

      const result = handleAPIResponse(errors, response);

      if (result) {
        const { id: cartId } = result as Cart;
        const { errors, response } =
          await fetchCartItemsIncludingProductsByCartId({ cartId });

        const cartItemsResult = handleAPIResponse(errors, response);

        if (cartItemsResult) {
          setCartItems(cartItemsResult);
        }
      }
    } finally {
      setIsCartItemsLoading(false);
    }
  }, [profile]);

  const handleBuyButtonClick = async () => {
    try {
      setIsBuyButtonLoading(true);
      if (!profile) {
        handleShowError(3);
        return;
      }

      const { id: profileId } = profile;

      const { errors, response } = await createOrderByProfileId({
        profileId,
        amount: cartSubTotal,
      });

      const result = handleAPIResponse(errors, response);

      if (result) {
        const { id: orderId } = result as Order;

        const cartItemPromises = cartItems.map(async (cartItem) => {
          const { quantity, product } = cartItem;
          const { price, id: productId } = product;

          return createOrderItemsByOrderId({
            orderId,
            price,
            productId,
            quantity,
          });
        });

        await Promise.all(cartItemPromises);

        // Pending handle if one of the order item or all order items are not added in order
        // results.forEach(({ errors, response }, index) => {
        //   const result = handleAPIResponse(errors, response)
        // });

        // if success
        const cartId = cartItems[0].cartId;
        await deleteAllCartItemsCartId({ cartId });
        router.push(`/payment/${orderId}`);
      }
    } finally {
      setIsBuyButtonLoading(false);
    }
  };

  useEffect(() => {
    handleGetCartItems();
  }, [handleGetCartItems]);

  useEffect(() => {
    const cartSubTotal = cartItems.reduce(
      (acc, cur) => acc + cur.product.price * cur.quantity,
      0,
    );

    setCartSubTotal(parseFloat(cartSubTotal.toFixed(2)));
  }, [cartItems]);

  return {
    cartItems,
    isCartItemsLoading,
    cartSubTotal,
    handleGetCartItems,
    handleBuyButtonClick,
    isBuyButtonLoading,
  };
};

export default useCartPageController;
