"use client";
import { OrderIncludingOrderItemsIncludingProductType } from "@/types";
import SingleOrderItemShowcaseComp from "./_single-order-item-showcase";
import useSingleOrderShowcaseCompController from "./comp-controller";

interface SingleOrderShowcaseCompProps {
  order: OrderIncludingOrderItemsIncludingProductType;
}

const SingleOrderShowcaseComp: React.FC<SingleOrderShowcaseCompProps> = ({
  order,
}) => {
  useSingleOrderShowcaseCompController();

  const { amount, id, orderItems, paymentStatus } = order;

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-col">
        <span>OrderId: {id}</span>
        <span>SubTotal: {amount}</span>
        <span>Payment status: {paymentStatus}</span>
      </div>

      {orderItems.map((orderItem) => (
        <SingleOrderItemShowcaseComp key={orderItem.id} orderItem={orderItem} />
      ))}
    </div>
  );
};

export default SingleOrderShowcaseComp;
