import { OrderItemIncludingProductType } from "@/types";
import Image from "next/image";

interface SingleOrderItemShowcaseCompProps {
  orderItem: OrderItemIncludingProductType;
}

const SingleOrderItemShowcaseComp: React.FC<
  SingleOrderItemShowcaseCompProps
> = ({ orderItem }) => {
  const { price, quantity, product, status } = orderItem;
  const { brand, category, description, images, name } = product;

  return (
    <div className="p-4 pl-8">
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
          <span>{quantity}</span>
          <span>{status}</span>
        </div>
        <div className="col-span-1">{price}</div>
      </div>
    </div>
  );
};

export default SingleOrderItemShowcaseComp;
