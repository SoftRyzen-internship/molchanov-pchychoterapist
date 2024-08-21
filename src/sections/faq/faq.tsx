import React from 'react';
import faq from '@/data/faq.json';
import { Accordion } from '@/components/common/accordion/accordion';

export const FAQ = () => {
  return (
    <section className="bg-pinkSupperLight py-[40px] md:py-[60px] xl:py-[70px] ">
      <div className="container">
        <h2 className="mb-10 md:mb-[60px] xl:text-center">
          {faq.title}
        </h2>
        <Accordion />
      </div>
    </section>
  );
};
