import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { InputField } from '@/components/ui/input-field';
import { TextareaField } from '@/components/ui/textarea-field';
import { CheckboxField } from '@/components/ui/checkbox-field';

import { Name } from '../../ui/input-field/types';
import { FormData, Status } from './types';

import { schema } from '@/utils';

import contactData from '@/data/contact.json';
import { Modal } from '../../ui/modal';
import { FormFeedbackMessage } from '@/components/common/form-feedback-message/form-feedback-message';

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>('success');
  const [isOpen, setIsOpen] = useState(false);
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

  useFormPersist('contactForm', {
    watch,
    setValue,
    exclude: ['checked'],
  });

  const onSubmit = (data: FormData) => {
    try {
      console.log(data);
      setStatus('success');
      setIsOpen(true);
      reset();
    } catch (error) {
      setStatus('failed');
      setIsOpen(true);
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="flex flex-col gap-10 xl:max-w-[609px]"
      >
        <div className="flex flex-col gap-9 md:gap-8 md:flex-row xl:gap-5 xl:mb-5">
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
        <button
          type="submit"
          className="custom-button custom-button-no-border mt-5 md:max-w-[190px]"
        >
          {button}
        </button>
      </form>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormFeedbackMessage status={status} />
      </Modal>
    </>
  );
};
