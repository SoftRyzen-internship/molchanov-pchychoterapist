import * as yup from 'yup';

const usernameRegexp =
  /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'ʼ`-]{1,29}[a-zA-Zа-яА-ЯґҐєЄіІїЇ'ʼ`-]?$|^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'ʼ`-]{1,30}$/;
const phoneRegexp = /\+38\s\d{3}\s\d{3}\s\d{2}\s\d{2}/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('*Ім’я обовʼязкове поле')
    .min(2, 'Мінімум 2 символи')
    .max(30, 'Максимум 30 символів')
    .matches(usernameRegexp, '*Введіть вірне ім’я'),
  phone: yup
    .string()
    .required('*Номер телефону обовʼязкове поле')
    .matches(phoneRegexp, '*Введіть вірний формат телефону'),
  comment: yup.string().max(300, '*Максимально 300 символів'),
  checked: yup
    .boolean()
    .required()
    .oneOf([true], '*Підтвердіть згоду на обробку даних'),
});
