"use client";
import { fetchAllProducts } from "@/db/queries";
import { handleAPIResponse } from "@/utils";
import { Product } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

const useDashboardPageController = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetAllProducts = useCallback(async () => {
    const { errors, response } = await fetchAllProducts();

    const result = handleAPIResponse(errors, response);

    if (result) {
      setProducts(result);
    }
  }, []);

  useEffect(() => {
    handleGetAllProducts();
  }, [handleGetAllProducts]);

  return { products };
};

export default useDashboardPageController;
