"use client";

import {
  createProductInCart,
  fetchCartByProfileId,
  fetchSingleProductById,
} from "@/db/queries";
import { useAppStore } from "@/store";
import { handleAPIResponse, handleShowError, handleShowSuccess } from "@/utils";
import { Cart, Product } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

interface SingleProductShowcasePageControllerProps {
  productId: string;
}

const useSingleProductShowcasePageController = ({
  productId,
}: SingleProductShowcasePageControllerProps) => {
  const [product, setProduct] = useState<Product>();
  const [isGetProductLoading, setIsGetProductLoading] = useState(true);
  const [productModifications, setProductModifications] = useState<{
    quantity: number;
  }>({
    quantity: 1,
  });

  const { profile } = useAppStore();

  const handleGetProduct = useCallback(async () => {
    try {
      setIsGetProductLoading(true);
      const { errors, response } = await fetchSingleProductById(productId);
      const result = handleAPIResponse(errors, response);
      if (result) {
        setProduct(result);
      }
    } finally {
      setIsGetProductLoading(false);
    }
  }, [productId]);

  const handleProductQuantityChange = (quantity: number) => {
    setProductModifications((prev) => ({ ...prev, quantity }));
  };

  const handleAddToCartButtonClick = async () => {
    try {
      if (!profile) {
        handleShowError(3);
        window.location.reload();
        return;
      }

      const { id } = profile;

      const { errors, response } = await fetchCartByProfileId({
        profileId: id,
      });

      const cartResult = handleAPIResponse(errors, response);

      if (cartResult) {
        const { id: cartId } = cartResult as Cart;
        const { quantity } = productModifications;

        const { errors, response } = await createProductInCart({
          cartId,
          productId,
          quantity,
        });

        const result = handleAPIResponse(errors, response);

        if (result) {
          handleShowSuccess("Product successfully added in cart.");
        }
      }
    } finally {
    }
  };

  const handleBuyNowButtonClick = () => {
    return;
  };

  useEffect(() => {
    handleGetProduct();
  }, [handleGetProduct]);

  return {
    product,
    isGetProductLoading,
    handleProductQuantityChange,
    handleAddToCartButtonClick,
    handleBuyNowButtonClick,
    productModifications,
  };
};

export default useSingleProductShowcasePageController;
