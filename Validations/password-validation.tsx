import * as yup from "yup";

const [validationNumber, upperAndLowerCase, passwordLength] = [
  "At least 1 number",
  "Upper and lower case letters",
  "8 or more characters",
];

export const validationSchema = yup.object({
  password: yup
    .string()
    .required()
    .min(8)
    .matches(/[0-9]/, validationNumber)
    .matches(new RegExp(/[A-Z]/), upperAndLowerCase)

    .matches(new RegExp(/[a-z]/), upperAndLowerCase),
});
