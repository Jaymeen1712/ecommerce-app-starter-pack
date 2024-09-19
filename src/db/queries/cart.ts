"use server";
import { db } from "@/db";
import {
  CreateCartItemRequestObjType,
  CreateCartRequestObjType,
} from "@/types";

export const createCartByProfileId = async ({
  profileId,
}: CreateCartRequestObjType) => {
  let response;
  let errors;

  try {
    const existingProducts = await db.cart.create({
      data: {
        profileId,
      },
    });

    if (existingProducts) {
      response = existingProducts;
    }
  } catch (error) {
    errors = error;
  }

  return { errors, response };
};

export const createProductInCart = async ({
  cartId,
  productId,
  quantity,
}: CreateCartItemRequestObjType) => {
  let response;
  let errors;

  try {
    const existingProducts = await db.cartItem.create({
      data: {
        cartId,
        productId,
        quantity,
      },
    });

    if (existingProducts) {
      response = existingProducts;
    }
  } catch (error) {
    errors = error;
  }

  return { errors, response };
};

export const fetchCartByProfileId = async ({
  profileId,
}: {
  profileId: string;
}) => {
  let response;
  let errors;

  try {
    const existingCart = await db.cart.findFirst({
      where: {
        profileId,
      },
    });

    if (existingCart) {
      response = existingCart;
    }
  } catch (error) {
    errors = error;
  }

  return { errors, response };
};
