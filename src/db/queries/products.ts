"use server";
import { db } from "@/db";

export const fetchAllProducts = async () => {
  let response;
  let errors;

  try {
    const existingProducts = await db.product.findMany();

    if (existingProducts) {
      response = existingProducts;
    }
  } catch (error) {
    errors = error;
  }

  return { errors, response };
};

export const fetchSingleProductById = async (id: string) => {
  let response;
  let errors;

  try {
    const existingProduct = await db.product.findUnique({
      where: {
        id,
      },
    });

    if (existingProduct) {
      response = existingProduct;
    } else {
      errors = ["Product is not available!"];
    }
  } catch (error) {
    errors = error;
  }

  return { errors, response };
};
