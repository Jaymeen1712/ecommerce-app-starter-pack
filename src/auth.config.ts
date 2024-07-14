import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default {
  providers: [
    CredentialsProvider({
      // async authorize(credentials) {
      // },
    }),
  ],
} satisfies NextAuthConfig;
