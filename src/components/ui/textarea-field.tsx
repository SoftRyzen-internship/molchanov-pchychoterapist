import { IFormFieldProps } from '@/types/form-field';

const TextareaField = ({
  id,
  label,
  name,
  register,
  placeholder,
  errors,
}: IFormFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <textarea
        id={id}
        {...register(name)}
        placeholder={placeholder}
        className="input resize-none h-[74px] md:h-[52px]"
      />
      <p>{errors[name]?.message}</p>
    </div>
  );
};

export default TextareaField;
