'use client';

import { ValuesCard } from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values.json';

import { Logo } from '@/components/ui/logo/logo';

import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';

import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Accordion } from '@/components/common/accordion/accordion';
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

import { Values } from '@/sections/values/values';

import { Services } from '@/sections/services/services';
import { FormFeedbackMessage } from '@/components/common/form-feedback-message/form-feedback-message';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'success' | 'failed'>('success');
  const [politics, setPolitics] = useState([]);

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
      <Values />
      <div className="container">
        <ul className=" xl:hidden">
          <Slider>
            {therapyData.therapySteps.map((item) => (
              <TherapyItem key={item.id} item={item} />
            ))}
          </Slider>
        </ul>
        <ul>
          <Slider>
            {reviews.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                author={review.author}
                text={review.text}
              />
            ))}
          </Slider>
        </ul>

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

        <ul>
          {politics.map((section, index) => (
            <li key={index}>
              <PortableText value={section} />
            </li>
          ))}
        </ul>
      </div>

      <Contact />
    </main>
  );
};

export default Home;
