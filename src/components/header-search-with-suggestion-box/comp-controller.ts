"use client";

import { fetchProductsBySearchQuery } from "@/db/queries";
import { useDebounce } from "@/hooks";
import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { InputProps } from "../ui/input";

const useHeaderWithSearchSuggestionBoxController = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchSuggestionBoxVisible, setIsSearchSuggestionBoxVisible] =
    useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isGetProductsLoading, setIsGetProductsLoading] = useState(true);

  const debouncedValue = useDebounce(searchQuery, 500);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchParams = useSearchParams();

  const handleGetSearchQueryProducts = useCallback(async () => {
    try {
      const query = debouncedValue || undefined;
      setIsGetProductsLoading(true);
      const { response } = await fetchProductsBySearchQuery(query, 5);

      if (response) {
        setProducts(response);
      }
    } finally {
      setIsGetProductsLoading(false);
    }
  }, [debouncedValue]);

  const handleSearchInputChange: InputProps["onChange"] = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    handleGetSearchQueryProducts();
  }, [handleGetSearchQueryProducts]);

  useEffect(() => {
    const query = searchParams.get("query");
    query && setSearchQuery(query);
  }, [searchParams]);

  return {
    searchQuery,
    searchInputRef,
    isSearchSuggestionBoxVisible,
    setIsSearchSuggestionBoxVisible,
    products,
    isGetProductsLoading,
    handleSearchInputChange,
  };
};

export default useHeaderWithSearchSuggestionBoxController;
