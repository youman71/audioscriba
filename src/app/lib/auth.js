import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]";

export const getSession = async () => {
  return await getServerSession(authOptions);
};
