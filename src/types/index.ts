import { Prisma } from "@prisma/client";

export * from "./request-obj";

export interface CarouselSingleProductType {
  image: string[];
  name: string;
  desc?: string;
  price: string | number;
  brand?: string;
}

export type CartItemsIncludingProductType = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;
