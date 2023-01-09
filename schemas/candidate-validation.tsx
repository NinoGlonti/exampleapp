import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const [phoneNumber] = ["Phone number is not valid"];

export const candidateValidation = yup.object({
  first_name: yup.string().required().max(8),
  last_name: yup.string().required().max(8),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, phoneNumber).required(),
  candidate_location: yup.string().required(),
  position: yup.string().required(),
  salary: yup.array().required(),
  skills: yup.array().required(),
  socials: yup.array().required(),
  experience: yup.number().required(),
  source: yup.string(),
});
