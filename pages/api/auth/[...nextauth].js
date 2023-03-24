import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  // Enable JSON Web Tokens since we will not store sessions in our DB
  session: {
    strategy: "jwt"
  },
  // Here we add our login providers - this is where you could add Google or Github SSO as well

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        const {username, password } = credentials;
        const user = await usersCollection.findOne({
          username: credentials.username,
        });

        if (!user) {
          client.close();
          throw new Error("User was not found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();

          throw new Error("Not a valid password");
        }

        client.close();

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
});
