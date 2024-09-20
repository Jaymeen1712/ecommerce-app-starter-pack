"use client";

import { Input } from "../ui/input";
import useHeaderWithSearchSuggestionBoxController from "./comp-controller";
import SearchSuggestionBox from "./suggestion-box/comp";

const HeaderSearchWithSuggestionBox = () => {
  const {
    searchQuery,
    searchInputRef,
    isSearchSuggestionBoxVisible,
    setIsSearchSuggestionBoxVisible,
    products,
    isGetProductsLoading,
    handleSearchInputChange,
  } = useHeaderWithSearchSuggestionBoxController();

  return (
    <>
      <div className="relative">
        <Input
          placeholder="Search"
          className="w-60"
          value={searchQuery}
          ref={searchInputRef}
          onFocus={() => setIsSearchSuggestionBoxVisible(true)}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="fixed z-10">
        <SearchSuggestionBox
          searchInputRef={searchInputRef}
          isSearchSuggestionBoxVisible={isSearchSuggestionBoxVisible}
          setIsSearchSuggestionBoxVisible={setIsSearchSuggestionBoxVisible}
          products={products}
          isGetProductsLoading={isGetProductsLoading}
        />
      </div>
    </>
  );
};

export default HeaderSearchWithSuggestionBox;
