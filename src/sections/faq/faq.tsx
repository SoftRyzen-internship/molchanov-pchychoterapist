import React from 'react';
import { Accordion } from '@/components/common/accordion/accordion';
import { AccordionProps } from '@/components/common/accordion/types';
import faq from '@/data/faq.json';

export const FAQ = ({ faqs }: AccordionProps) => {
  return (
    <section
      id="faq"
      className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] "
    >
      <div className="container xl:w-[858px]">
        <h2 className="mb-6 md:mb-11 text-center">{faq.title}</h2>
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
};
