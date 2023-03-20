import * as yup from "yup";

const [validationNumber, upperAndLowerCase, passwordLength] = [
  "Password must contain at least 1 number",
  "Password must contain upper and lower case letters",
  "8 or more characters",
];

export const validationSchema = yup.object({
  email: yup.string().email().required(),
  username: yup.string(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/[0-9]/, validationNumber)
    .matches(new RegExp(/[A-Z]/), upperAndLowerCase)
    .matches(new RegExp(/[a-z]/), upperAndLowerCase),
});
