import React from 'react';
import faq from '@/data/faq.json';
import { Accordion } from '@/components/common/accordion/accordion';
import { getFaq } from '../../../sanity/api';
import { FaqItem } from './types';

export const FAQ = async () => {
  const faqs: FaqItem[] = await getFaq();
  return (
    <section className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] ">
      <div className="container xl:w-[858px]">
        <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
};
