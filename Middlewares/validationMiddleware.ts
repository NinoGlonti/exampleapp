import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { OptionalObjectSchema, ObjectShape } from "yup/lib/object";
import { validationSchema } from "../schemas/password-validation";
import { handler } from "../pages/api/auth/signup";

export function validation(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (["POST", "PUT"].includes(req.method as string)) {
      try {
        req.body = await schema.validate(req.body);
      } catch (error) {
        return res.status(400).json(error);
      }
    }
    await handler(req, res);
  };
}

export default validation(validationSchema, handler);

//{abortEarly: false;} *gives me all existing errors in array
