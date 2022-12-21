import { MongoClient } from "mongodb";
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function connectToDatabase() {
  const client = await MongoClient.connect(MONGODB_URI);
  return client;
}
