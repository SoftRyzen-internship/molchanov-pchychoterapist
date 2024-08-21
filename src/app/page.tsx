'use client';

import { UtilityCard } from '@/components/common/utility-card/utility-card';

import { ValuesCard } from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values.json';

import cardData from '@/data/target-audience.json';
import { Logo } from '@/components/ui/logo/logo';

import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import { ServiceCard } from '@/components/common/service-card/service-card';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { AwardItem } from '@/components/common/award-item/award-item';
import aboutData from '@/data/about.json';

import reviews from '@/data/reviews.json';
import { ReviewCard } from '@/components/common/review-card/review-card';

import therapyData from '@/data/therapy.json';
import { TherapyItem } from '@/components/common/therapy-item/therapy-item';
import { Modal } from '@/components/ui/modal';
import FormFeedbackMessage from '@/components/common/form-feedback-message/form-feedback-message';

import { ContactForm } from '@/components/common/contact-form';

type Service = {
  _key: string;
  title: string;
};

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'success' | 'failed'>('success');

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
        <ul>
          {reviews.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              text={review.text}
            />
          ))}
        </ul>

        <ContactForm />

        <div>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <p>MainText</p>
        </div>

        <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-x-0 md:gap-y-7 xl:gap-y-8 xl:w-[610px]">
          {aboutData.awards.map((award) => (
            <AwardItem key={award.id} item={award} />
          ))}
        </ul>

        <ul className="pr-[25px] md:pr-0 xl:flex xl:flex-row justify-between">
          {therapyData.therapySteps.map((item) => (
            <TherapyItem key={item.id} item={item} />
          ))}
        </ul>

        <div className="py-10">
          <h2 className="h2 mb-10">Оберіть, як відправилась форма</h2>

          <div className="mb-10">
            <label className="mr-2">
              <input
                type="radio"
                name="status"
                value="success"
                checked={status === 'success'}
                onChange={() => setStatus('success')}
                className="mr-1"
              />
              Success
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="failed"
                checked={status === 'failed'}
                onChange={() => setStatus('failed')}
                className="mr-1"
              />
              Failed
            </label>
          </div>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="custom-button custom-button-no-border"
            >
              Показати повідомлення
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <FormFeedbackMessage status={status} />
            </Modal>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
