import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { OptionalObjectSchema, ObjectShape } from "yup/lib/object";
import { validationSchema } from "../Validations/password-validation";

//export default validation;
export function validation(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (["POST", "PUT"].includes(req.method)) {
      try {
        await schema.validate(req.body);
      } catch (error) {
        console.log("I'm error");
        return res.status(400).json(error);
      }
    }
    await handler(req, res);
  };
}
