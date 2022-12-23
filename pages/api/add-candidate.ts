import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    const {
      first_name,
      last_name,
      email,
      phone,
      candidate_location,
      position,
      salary,
      skills,
      socials,
      cv,
      experience,
      source,
    } = data;

    const client = await connectToDatabase();
    const db = client.db();

    const result = await db.collection("candidates").insertOne({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      candidate_location: candidate_location,
      position: position,
      salary: salary,
      skills: skills,
      socials: socials,
      cv: cv,
      experience: experience,
      source: source,
    });

    res.status(200).json({ message: "New Candidate was added", ...req.body });
  }
}

export default handler;
