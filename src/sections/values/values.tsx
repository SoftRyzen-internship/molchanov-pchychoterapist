import React from 'react';
import values from '@/data/values.json';
import { ValuesList } from '@/components/common/values-list/values-list';

export const Values = () => {
  return (
    <section className="py-[45px] md:py-[50px] xl:pt-[105px] xl:pb-[70px]">
      <div className="container">
        <h2 className="mb-10 md:mb-[60px] xl:text-center">{values.title}</h2>

        <ValuesList />
      </div>
    </section>
  );
};
