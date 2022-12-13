import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Nitsa:C6FxfeEIFy5TL2O3@cluster0.i1saj.mongodb.net/redberry-candidates?retryWrites=true&w=majority"
  );
  return client;
}
