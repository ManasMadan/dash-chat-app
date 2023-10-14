import GoogleProvider from "next-auth/providers/google";
import { PlanetScaleAdapter } from "@/lib/auth/PlanetScaleAdapter";
import { db } from "@/db/db";
import { Adapter } from "next-auth/adapters";
import { NextAuthOptions, getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PlanetScaleAdapter(db) as Adapter,
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
export const getAuthSession = () => getServerSession(authOptions);
