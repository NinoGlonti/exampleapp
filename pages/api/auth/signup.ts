import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";
import { Request, Response, NextFunction } from "express";

async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    const data = req.body;
    const { username, password } = data;

    if (!username || !password) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      username: username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User Created!" });
  }
}

export default handler;
