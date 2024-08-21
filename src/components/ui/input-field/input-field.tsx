import { IFormFieldProps } from './type';
import clsx from 'clsx';
import InputMask from 'react-input-mask-next';

export const InputField = ({
  id,
  label,
  type,
  name,
  register,
  errors,
  placeholder,
  autoComplete,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col relative flex-1">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {type === 'tel' ? (
        <InputMask
          mask={'+38 999 999 99 99'}
          alwaysShowMask={false}
          type={type}
          id={name}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx('input', errors[name] && 'text-redError')}
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx('input', errors[name] && 'text-redError')}
        />
      )}
      {errors[name] && (
        <p className="absolute top-full left-0 text-sm font-medium text-redError">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
