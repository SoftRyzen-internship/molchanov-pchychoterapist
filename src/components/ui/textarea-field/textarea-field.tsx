import { IFormFieldProps } from '../input-field/types';
import clsx from 'clsx';

export const TextareaField = ({
  id,
  label,
  name,
  register,
  placeholder,
  errors,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <textarea
        id={id}
        {...register(name)}
        placeholder={placeholder}
        className={clsx(
          'input resize-none h-[78px] md:h-[55px]',
          errors[name] && 'text-redError'
        )}
      />
      {errors[name] && (
        <p className="absolute -bottom-[16%] left-0 text-sm font-medium text-redError">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
