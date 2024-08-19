import { useEffect } from 'react';

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

  const { inputs, textarea, checkbox, button } = contactData;

  watch((data) => {
    localStorage.setItem('contactForm', JSON.stringify(data));
  });

  useEffect(() => {
    const storageData = localStorage.getItem('contactForm');
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue('username', result.username);
      setValue('phone', result.phone);
      setValue('comment', result.message);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    try {
      console.log(data);
      localStorage.removeItem('contactForm');
      reset();
      setValue('phone', '');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-9">
          {inputs.map((input) => (
            <InputField
              key={input.id}
              label={input.label}
              type={input.type}
              id={input.id}
              name={input.name as Name}
              errors={errors}
              register={register}
              placeholder={input.placeholder}
              autoComplete={input.autoComplete}
            />
          ))}
        </div>
        <TextareaField
          label={textarea.label}
          type={textarea.type}
          id={textarea.id}
          name={textarea.name as Name}
          errors={errors}
          placeholder={textarea.placeholder}
          register={register}
        />
        <CheckboxField
          label={checkbox.label}
          type={checkbox.type}
          id={checkbox.id}
          name={checkbox.name as Name}
          errors={errors}
          register={register}
          politics={checkbox.politics}
        />
        <button className="custom-button custom-button-no-border md:max-w-[190px]">
          {button}
        </button>
      </form>
    </>
  );
};
