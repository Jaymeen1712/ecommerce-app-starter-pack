import Spinner from "@/components/spinner";
import { Product } from "@prisma/client";
import React from "react";
import useSearchSuggestionBoxController from "./comp-controller";
import SingleProductComp from "./single-product-showcase/comp";

interface SearchSuggestionBoxProps {
  searchInputRef: React.RefObject<HTMLInputElement>;
  isSearchSuggestionBoxVisible: boolean;
  setIsSearchSuggestionBoxVisible: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  products: Product[];
  isGetProductsLoading: boolean;
}

const SearchSuggestionBox: React.FC<SearchSuggestionBoxProps> = ({
  searchInputRef,
  isSearchSuggestionBoxVisible,
  setIsSearchSuggestionBoxVisible,
  isGetProductsLoading,
  products,
}) => {
  const { searchContainerRef } = useSearchSuggestionBoxController({
    searchInputRef,
    setIsSearchSuggestionBoxVisible,
  });

  return (
    <>
      {isSearchSuggestionBoxVisible && (
        <div
          className="mt-2 border bg-white px-8 py-4"
          ref={searchContainerRef}
        >
          {isGetProductsLoading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col gap-4">
              {products.map((product) => (
                <SingleProductComp key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchSuggestionBox;
