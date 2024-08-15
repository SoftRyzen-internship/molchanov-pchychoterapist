import { IFormFieldProps } from '@/types/form-field';
import Link from 'next/link';

const CheckboxField = ({
  id,
  label,
  type,
  name,
  register,
  errors,
  politics,
}: IFormFieldProps) => {
  return (
    <div className="checkbox-container">
      <input type={type} id={id} {...register(name)} />
      <span className="checkmark"></span>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-[1.4] text-greenBodyText "
      >
        {label}{' '}
        <Link
          href="/politics"
          className="text-blue hover:underline focus:underline focus:outline-none"
        >
          {politics}
        </Link>
      </label>
      <p>{errors[name]?.message}</p>
    </div>
  );
};

export default CheckboxField;
