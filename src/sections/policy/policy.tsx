import React from 'react';

import { PolicyProps } from './types';
import { PortableText } from 'next-sanity';

export const Policy = ({ politics }: PolicyProps) => {
  return (
    <section className="pt-5 md:pt-[60px] md:pb-5 xl:pt-24 xl:pb-10">
      <div className="px-8 xl:px-[136px] sm:w-[480px] md:w-[768px] xl:w-[1280px] mx-auto">
        <h1 className="text-blue uppercase mb-10 md:mb-16 md:text-center font-montserrat font-semibold text-base leading-[1.4] md:font-geologica md:text-[40px] md:leading-none md:font-medium">
          {politics.title}
        </h1>
        <ul className="policy">
          {politics.description.map((section, index) => (
            <li key={index}>
              <PortableText value={section} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
