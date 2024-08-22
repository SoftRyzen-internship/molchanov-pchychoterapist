'use client';

import { Logo } from '@/components/ui/logo/logo';

import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';

import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { AwardItem } from '@/components/common/award-item/award-item';
import aboutData from '@/data/about.json';

import reviews from '@/data/reviews.json';
import { ReviewCard } from '@/components/common/review-card/review-card';

import therapyData from '@/data/therapy.json';
import { TherapyItem } from '@/components/common/therapy-item/therapy-item';

import { Slider } from '@/components/ui/slider/slider';

import { Modal } from '@/components/ui/modal';

import { getPolitics } from '@/../sanity/api';

import { TargetAudience } from '@/sections/target-audience/target-audience';

import { PortableText } from '@portabletext/react';
import { Contact } from '@/sections/contact/contact';

import { FAQ } from '@/sections/faq/faq';
import { Values } from '@/sections/values/values';

import { useIsMobile } from '@/hooks/use-is-mobile';
import { useIsTablet } from '@/hooks/use-is-tablet';

import { Services } from '@/sections/services/services';

import { FormFeedbackMessage } from '@/components/common/form-feedback-message/form-feedback-message';
import { Therapy } from '@/sections/therapy/therapy';
import { BurgerMenu } from '@/components/ui/burger-menu';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'success' | 'failed'>('success');
  const [politics, setPolitics] = useState([]);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  console.log('politics:', politics);

  useEffect(() => {
    async function fetchDataPolitics() {
      const data = await getPolitics();
      setPolitics(data);
    }

    fetchDataPolitics();
  }, []);

  return (
    <main>
      <Services />
      <TargetAudience />
      <Therapy />
      <Values />
      <FAQ />
      <Contact />

      <div className="container">
        <BurgerMenu />

        {isMobile && <p>Вы используете мобильное устройство</p>}
        {isTablet && <p>Вы используете планшет</p>}

        <Logo />

        <br />

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

        <NavMenu section="burger" />
        <NavMenu section="header" />
        <div className="bg-blue ">
          <NavMenu section="footer" />
        </div>

        <ul>
          {reviews.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              text={review.text}
            />
          ))}
        </ul>

        <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-x-0 md:gap-y-7 xl:gap-y-8 xl:w-[610px]">
          {aboutData.awards.map((award) => (
            <AwardItem key={award.id} item={award} />
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

        <ul>
          {politics.map((section, index) => (
            <li key={index}>
              <PortableText value={section} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
