import { IFormFieldProps } from '../input-field/types';
import clsx from 'clsx';
import Link from 'next/link';

export const CheckboxField = ({
  id,
  label,
  type,
  name,
  register,
  errors,
  politics,
}: IFormFieldProps) => {
  return (
    <div className="relative">
      <div className="flex relative">
        <input
          type={type}
          id={id}
          {...register(name)}
          className={clsx('checkbox-input', errors[name] && 'error')}
        />
        <span className={clsx('checkmark', errors[name] && 'error')}></span>
      </div>
      <label
        htmlFor={id}
        className="block pl-7 text-sm font-medium leading-[1.4] text-greenBodyText select-none cursor-pointer"
      >
        {label}
        <Link
          href="/policy"
          className="text-blue hover:underline focus:underline focus:outline-none"
        >
          {politics}
        </Link>
      </label>
      {errors[name] && (
        <p className="absolute -bottom-1/3 left-0 text-sm font-medium text-redError">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
