import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (credentials.username === "umann" && credentials.password === "1971") {
          return { id: 1, name: "Admin User" }; // ✅ Authentication successful
        }
        return null; // ❌ Authentication failed
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: "supersecretkey", // Use env variable in production
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
