'use client';

import { CheckboxField } from '@/components/ui/checkbox-field';
import { InputField } from '@/components/ui/input-field';
import Logo from '@/components/ui/logo';
import Socials from '@/components/ui/socials';
import { TextareaField } from '@/components/ui/textarea-field';
import { schema } from '@/utils';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type FormData = yup.InferType<typeof schema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    setValue('phone', '');
  };

  return (
    <main>
      <Logo />

      <br />

      <button className="custom-button custom-button-no-border">
        Записатися
      </button>

      <button className="custom-button custom-button-border">Записатися</button>

      <div className="py-4">
        <Socials color="text-greenDarkText" hoverColor="hover:text-blue" />
      </div>

      <div className="bg-blue py-4">
        <Socials />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
      >
        <InputField
          label="Ваше iм’я *"
          type="text"
          id="username"
          name="username"
          errors={errors}
          register={register}
          placeholder="Вікторія"
          autoComplete="name"
        />
        <InputField
          label="Номер телефону *"
          type="tel"
          id="phone"
          name="phone"
          errors={errors}
          register={register}
          placeholder="+38 067 158 79 04"
          autoComplete="tel"
        />
        <TextareaField
          label="Коментар"
          type="textarea"
          id="comment"
          name="comment"
          errors={errors}
          placeholder={
            'Поділіться, з якою конкретно проблемою ви зіткнулись?\n(Макс. 300 символів)'
          }
          register={register}
        />
        <CheckboxField
          label="Я даю згоду на обробку моїх персональних даних відповідно до "
          type="checkbox"
          id="checked"
          name="checked"
          errors={errors}
          register={register}
          politics="Політики конфіденційності."
        />
        <button className="custom-button custom-button-no-border">
          Записатися
        </button>
      </form>
    </main>
  );
};

export default Home;
