"use client";
import { CustomButton, Spinner } from "@/components";
import CartShowcaseSingleProductComp from "./_single-product";
import useCartPageController from "./page-controller";

const CartPage = () => {
  const {
    cartItems,
    isCartItemsLoading,
    cartSubTotal,
    handleGetCartItems,
    handleBuyButtonClick,
    isBuyButtonLoading,
  } = useCartPageController();

  return (
    <div className="container grid grid-cols-4">
      <div className="col-span-3">
        <h3>Shopping cart</h3>

        {isCartItemsLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 border-b p-4">
              {cartItems.map((cartItem) => (
                <CartShowcaseSingleProductComp
                  cartItem={cartItem}
                  key={cartItem.id}
                  handleGetCartItems={handleGetCartItems}
                />
              ))}
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-3" />

              <div className="col-span-1">
                <span>Subtotal: {cartSubTotal}</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="col-span-1 flex items-center bg-gray-100">
        <CustomButton
          className="w-full"
          onClick={handleBuyButtonClick}
          loading={isBuyButtonLoading}
        >
          Buy
        </CustomButton>
      </div>
    </div>
  );
};

export default CartPage;
