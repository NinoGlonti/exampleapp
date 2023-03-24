import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/db";
import { validation } from "../../Middlewares/validationMiddleware";
import { candidateValidation } from "../../schemas/candidate-validation";
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
   // const form = new IncomingForm()
    
//    const contents = await fs.readFile(data?.files?.myFile.filepath)
   // const FILE = {
   //     "fileName": data?.files?.cv.originalFilename,
   //     "content": contents
 //   }
    const {
      first_name,
      last_name,
      email,
      phone,
      candidate_location,
      position,
      min_salary,
      max_salary,
      skills,
      linkedin,
      github,
      cv,
      status,
      experience,
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
      min_salary: min_salary,
      max_salary: max_salary,
      skills: skills,
      linkedin: linkedin,
      github: github,
      cv: cv,
      status:status,
      experience: experience,
    });

    res.status(201).json({ message: "New Candidate was added", ...req.body });
  } else {
    const client = await connectToDatabase();
    const db = client.db();
    const data = req.body;

    const documents = await db
      .collection("candidates")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ documents });
  }
}

export default validation(candidateValidation, handler);
