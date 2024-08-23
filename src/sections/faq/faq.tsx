import React from 'react';
import faq from '@/data/faq.json';
import { Accordion } from '@/components/common/accordion/accordion';
import { getFaq } from '../../../sanity/api';
import { FaqItem } from './types';

export const FAQ: React.FC = async () => {
  try {
    const faqs: FaqItem[] = await getFaq();

    if (!faqs || faqs.length === 0) {
      return (
        <section className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] ">
          <div className="container xl:w-[858px]">
            <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
            <p className="text-center">{faq.noQuestionsTitle}</p>
          </div>
        </section>
      );
    }

    return (
      <section className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] ">
        <div className="container xl:w-[858px]">
          <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
          <Accordion faqs={faqs} />
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className="bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] ">
        <div className="container xl:w-[858px]">
          <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
          <p className="text-center text-red-500">{faq.errorTitle}</p>
        </div>
      </section>
    );
  }
// export const FAQ = () => {
//   return (
//     <section
//       id="faq"
//       className="  bg-pinkSupperLight py-10 md:py-[60px] xl:py-[70px] "
//     >
//       <div className="container xl:w-[858px]">
//         <h2 className="mb-6 md:mb-11 xl:text-center">{faq.title}</h2>
//         <Accordion />
//       </div>
//     </section>
//   );
};
