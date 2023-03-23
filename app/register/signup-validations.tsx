import * as Yup from "yup";
export const [validationNumber, upperAndLowerCase, passwordLength, passwordMatch] = [
  "At least 1 number",
  "Upper and lower case letters",
  "8 or more characters",
  "Password confirmation should match",
];

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .email("Invalid email")
  .required("Email is a required field"),
  username: Yup.string()
  .required("Username is a required field"),
  password: Yup
    .string()
    .required()
    .min(8, passwordLength)
    .matches(new RegExp(/[0-9]/), validationNumber)
    .matches(new RegExp(/[A-Z]/), upperAndLowerCase)
    .matches(new RegExp(/[a-z]/), upperAndLowerCase), 
})