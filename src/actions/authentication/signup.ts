"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { db } from "@/db";
import { getUserByEmail } from "@/db/queries/user";
import { SignUpFormSchema } from "@/schemas";

export const signUpAction = async (
  values: z.infer<typeof SignUpFormSchema>,
) => {
  const validatedFields = SignUpFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, password, first_name, last_name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const createdUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name: `${first_name} ${last_name}`,
      },
    });

    if (createdUser) {
      const { email, id, image, name, username } = createdUser;
      const createdProfile = await db.profile.create({
        data: {
          userId: id,
          name,
          username,
          email,
          lowResImage: image,
        },
      });

      if (!createdProfile) {
        await db.user.delete({
          where: {
            id: createdUser.id,
          },
        });

        return {
          error: "Failed to create user",
        };
      }
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    } else {
      return {
        error: "Failed to create user",
      };
    }
  }

  return {
    success: "User is successfully registered.",
  };
};
