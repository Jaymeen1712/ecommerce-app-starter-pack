"use client";

import {
  fetchCartByProfileId,
  fetchCartItemsIncludingProductsByCartId,
} from "@/db/queries";
import { useAppStore } from "@/store";
import { CartItemsIncludingProductType } from "@/types";
import { handleAPIResponse } from "@/utils";
import { Cart } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

const useCartPageController = () => {
  const [cartItems, setCartItems] = useState<CartItemsIncludingProductType[]>(
    [],
  );
  const [isCartItemsLoading, setIsCartItemsLoading] = useState(true);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const { profile } = useAppStore();

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

  return { cartItems, isCartItemsLoading, cartSubTotal, handleGetCartItems };
};

export default useCartPageController;
