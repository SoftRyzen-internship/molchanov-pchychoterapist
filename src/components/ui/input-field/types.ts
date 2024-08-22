import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IFormFieldProps {
  id: string;
  label: string;
  type?: string;
  name: Name;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  placeholder?: string;
  autoComplete?: string;
  politics?: string;
}

export type Name = 'username' | 'phone' | 'comment' | 'checked';

export type FormData = {
  username: string;
  phone: string;
  comment?: string;
  checked: boolean;
};
