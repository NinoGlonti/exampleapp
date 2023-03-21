import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const [phoneNumber] = ["Phone number is not valid"];
const urlRegExp = 
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

const [urlError] = ["URL is not valid"]

export const candidateValidation = yup.object({
  first_name: yup.string().required().max(8),
  last_name: yup.string().required().max(8),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneRegExp, phoneNumber).required(),
  candidate_location: yup.string().required(),
  position: yup.string().required(),
  min_salary: yup.number().required(),
  max_salary: yup.number().required(),
  skills: yup.array().required(),
  linkedin: yup.string().matches(urlRegExp, urlError).required(),
  github: yup.string().matches(urlRegExp, urlError).required(),
  experience: yup.number().required(),
});
