import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputField } from '@/components/ui/input-field';
import { TextareaField } from '@/components/ui/textarea-field';
import { CheckboxField } from '@/components/ui/checkbox-field';

import { Name } from '../input-field/type';
import { FormData } from './type';

import { schema } from '@/utils';
import contactData from '@/data/contact/contact.json';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setValue('phone', '');
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
      >
        <InputField
          label={contactData.inputs[0].label}
          type={contactData.inputs[0].type}
          id={contactData.inputs[0].id}
          name={contactData.inputs[0].name as Name}
          errors={errors}
          register={register}
          placeholder={contactData.inputs[0].placeholder}
          autoComplete={contactData.inputs[0].autoComplete}
        />
        <InputField
          label={contactData.inputs[1].label}
          type={contactData.inputs[1].type}
          id={contactData.inputs[1].id}
          name={contactData.inputs[1].name as Name}
          errors={errors}
          register={register}
          placeholder={contactData.inputs[1].placeholder}
          autoComplete={contactData.inputs[1].autoComplete}
        />
        <TextareaField
          label={contactData.textarea.label}
          type={contactData.textarea.type}
          id={contactData.textarea.id}
          name={contactData.textarea.name as Name}
          errors={errors}
          placeholder={contactData.textarea.placeholder}
          register={register}
        />
        <CheckboxField
          label={contactData.checkbox.label}
          type={contactData.checkbox.type}
          id={contactData.checkbox.id}
          name={contactData.checkbox.name as Name}
          errors={errors}
          register={register}
          politics={contactData.checkbox.politics}
        />
        <button className="custom-button custom-button-no-border md:max-w-[190px]">
          {contactData.button}
        </button>
      </form>
    </div>
  );
};
