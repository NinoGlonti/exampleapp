import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";
import { validation } from "../../../Middlewares/validationMiddleware";
import { validationSchema } from "../../../Validations/password-validation";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const { username, password } = data;

    /* if (!username || !password) {
      res.status(422).json({ message: "Password and Username are required" });
      return;
    }*/

    const client = await connectToDatabase();

    const db = client.db();

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      username: username,
      password: hashedPassword,
    });

    res.status(201).json({ ...req.body, method: req.method });
  }
}

export default validation(validationSchema, handler);
