import { IFormFieldProps } from '@/types/form-field';
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
          'input resize-none h-[74px] md:h-[52px]',
          errors[name] && 'text-redError'
        )}
      />
      <p className="absolute -bottom-[16%] left-0 text-sm font-medium text-redError">
        {errors[name]?.message}
      </p>
    </div>
  );
};
