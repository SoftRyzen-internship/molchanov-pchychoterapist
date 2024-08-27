import React from 'react';
import { UtilityCardList } from '@/components/common/utility-card-list/utility-card-list';
import content from '@/data/target-audience.json';

export const TargetAudience = () => {
  return (
    <section className="py-[45px] md:py-[50px] xl:pt-[75px] xl:pb-[77px]">
      <div className="container">
        <h2 className="mb-10 md:mb-[60px] text-left xl:text-center">
          {content.title}
        </h2>
        <UtilityCardList />
      </div>
    </section>
  );
};
