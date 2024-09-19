"use client";

import { updateCartItemById } from "@/db/queries";
import { CartItemsIncludingProductType } from "@/types";
import { handleAPIResponse } from "@/utils";
import { useMemo, useState } from "react";

interface CartShowcaseSingleProductCompControllerProps {
  cartItem: CartItemsIncludingProductType;
  handleGetCartItems: () => void;
}

const useCartShowcaseProductCompController = ({
  cartItem,
  handleGetCartItems,
}: CartShowcaseSingleProductCompControllerProps) => {
  const { id } = useMemo(() => cartItem, [cartItem]);
  const [isProdQuantityLoading, setIsProdQuantityLoading] = useState(false);

  const handleProductQuantityChange = async (quantity: number) => {
    try {
      setIsProdQuantityLoading(true);
      const { errors, response } = await updateCartItemById({
        cartItem: { quantity },
        cartItemId: id,
      });

      handleAPIResponse(errors, response);
      handleGetCartItems();
    } finally {
      setIsProdQuantityLoading(false);
    }
  };

  return { handleProductQuantityChange, isProdQuantityLoading };
};

export default useCartShowcaseProductCompController;
