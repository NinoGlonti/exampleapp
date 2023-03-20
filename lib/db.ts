import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI as string;

export async function connectToDatabase() {
  const client = await MongoClient.connect(MONGODB_URI);
  return client;
}
