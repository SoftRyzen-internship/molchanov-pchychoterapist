'use client';

import { UtilityCard } from '@/components/common/utility-card/utility-card';

import { ValuesCard } from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values.json';

import cardData from '@/data/target-audience.json';
import { Logo } from '@/components/ui/logo/logo';

import { CheckboxField } from '@/components/ui/checkbox-field';
import { InputField } from '@/components/ui/input-field';

import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import { ServiceCard } from '@/components/common/service-card/service-card';
import { TextareaField } from '@/components/ui/textarea-field';
import { schema } from '@/utils';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import contactData from '@/data/contact/contact.json';
import { Name } from '../components/ui/input-field/type';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Modal } from '@/components/common/modal';

type FormData = yup.InferType<typeof schema>;

type Service = {
  _key: string;
  title: string;
};

const Home = () => {
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

  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
    }

    fetchData();
  }, []);

  console.log('services:', services);

  return (
    <main>
      <div className="container">
        <Logo />

        <br />
        <ul>
          <UtilityCard
            id={cardData.cards[2].id}
            urlMobile={cardData.cards[2].urlMobile}
            urlTablet={cardData.cards[2].urlTablet}
            urlDesktop={cardData.cards[2].urlDesktop}
            text={cardData.cards[2].text}
            alt={cardData.cards[2].alt}
          />
        </ul>

        <button className="custom-button custom-button-no-border">
          Записатися
        </button>

        <button className="custom-button custom-button-border">
          Записатися
        </button>

        <div className="py-4">
          <Socials section="menu" />
        </div>

        <div className="bg-blue py-4">
          <Socials section="footer" />
        </div>
        <ul>
          <ValuesCard
            id={cardsValuesData.cards[0].id}
            name={cardsValuesData.cards[2].name}
            title={cardsValuesData.cards[0].title}
            text={cardsValuesData.cards[0].text}
          />
        </ul>
        <NavMenu section="burger" />
        <NavMenu section="header" />
        <div className="bg-blue ">
          <NavMenu section="footer" />
        </div>

        <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-[94px] md:gap-y-[60px] xl:gap-x-[125px]">
          {services.map((service) => (
            <ServiceCard key={service._key} title={service.title} />
          ))}
        </ul>

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
        <div>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <p>MainText</p>
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="custom-button custom-button-border"
          >
            Відкрити модальне вікно
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>Контент модального вікна</div>
          </Modal>
        </div>
      </div>
    </main>
  );
};

export default Home;
