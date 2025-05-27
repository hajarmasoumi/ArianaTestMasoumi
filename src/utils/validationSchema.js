import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'username must be at least 1 characters')
    .max(150, 'username must be at least 150 characters'),
  password: yup
    .string()
    .min(1, 'password must be at least 1 characters')
    .required('Password is required'),
});

export const registerSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('first_name  is required')
    .min(1, 'first_name must be at least 1 characters')
    .max(150, 'first_name must be at least 150 characters'),
  last_name: yup
    .string()
    .required('last_name   is required')
    .min(1, 'last_name  must be at least 1 characters')
    .max(150, 'last_name  must be at least 150 characters'),
  username: yup
    .string()
    .required('username is required')
    .min(1, 'username must be at least 1 characters')
    .max(150, 'username must be at least 150 characters'),
  password: yup
    .string()
    .required('password is required')
    .min(1, 'password must be at least 1 characters'),
  confirm_password: yup
    .string()
    .required('confirm_password  is required')
    .min(1, 'confirm_password  must be at least 1 characters')

});