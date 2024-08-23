import React from 'react';
import faq from '@/data/faq.json';
import { Accordion } from '@/components/common/accordion/accordion';

export const FAQ = () => {
  return (
    <section id="faq" className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] ">
      <div className="container xl:w-[858px]">
        <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
        <Accordion />
      </div>
    </section>
  );
};
