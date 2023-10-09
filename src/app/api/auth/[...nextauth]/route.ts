import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PlanetScaleAdapter } from "@/lib/auth/PlanetScaleAdapter";
import { db } from "@/db/db";
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PlanetScaleAdapter(db) as Adapter,
});

export { handler as GET, handler as POST };
