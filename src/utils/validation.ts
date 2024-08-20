import * as yup from 'yup';
import contactData from '../data/contact/contact.json';

const { username, phone, comment, checked } = contactData.validation;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required(username.required.message)
    .min(username.minLength.value, username.minLength.message)
    .max(username.maxLength.value, username.maxLength.message)
    .matches(new RegExp(username.regExp.value), username.regExp.message),
  phone: yup
    .string()
    .required(phone.required.message)
    .matches(new RegExp(phone.regExp.value), phone.regExp.message),
  comment: yup.string().max(comment.maxLength.value, comment.maxLength.message),
  checked: yup.boolean().required().oneOf([checked.value], checked.message),
});
