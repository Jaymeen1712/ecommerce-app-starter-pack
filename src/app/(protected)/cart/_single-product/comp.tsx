import { QuantitySelector } from "@/components";
import { CartItemsIncludingProductType } from "@/types";
import Image from "next/image";
import useCartShowcaseProductCompController from "./comp-controller";

interface CartShowcaseSingleProductCompProps {
  cartItem: CartItemsIncludingProductType;
  handleGetCartItems: () => void;
}

const CartShowcaseSingleProductComp: React.FC<
  CartShowcaseSingleProductCompProps
> = ({ cartItem, handleGetCartItems }) => {
  const { handleProductQuantityChange, isProdQuantityLoading } =
    useCartShowcaseProductCompController({
      cartItem,
      handleGetCartItems,
    });

  const { product, quantity } = cartItem;
  const { brand, category, description, images, name, price } = product;

  return (
    <>
      <div className="relative col-span-1 h-[140px] w-full rounded-md">
        <Image
          src="/wallhaven-m95x7k.jpg"
          alt="logo-maker"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="col-span-3 grid grid-cols-4">
        <div className="col-span-3 flex flex-col">
          <span>{name}</span>
          <span>{description}</span>
          <span>{brand}</span>
          <span>{category}</span>
          <QuantitySelector
            onQuantityChange={handleProductQuantityChange}
            initialQuantity={quantity}
            isBothButtonDisable={isProdQuantityLoading}
          />
        </div>
        <div className="col-span-1">{price}</div>
      </div>
    </>
  );
};

export default CartShowcaseSingleProductComp;
