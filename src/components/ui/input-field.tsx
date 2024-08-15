import { IFormFieldProps } from '@/types/form-field';
import InputMask from 'react-input-mask-next';

const InputField = ({
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
    <div className="flex flex-col">
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
          className="input"
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="input"
        />
      )}

      <p>{errors[name]?.message}</p>
    </div>
  );
};

export default InputField;
