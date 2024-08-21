import React from 'react';
import content from '@/data/target-audience.json';
import { UtilityCardList } from '@/components/common/utility-card-list/utility-card-list';

export const TargetAudience = () => {
  return (
    <section className="p-10 bg-red">
      <div className="container">
        <h2 className="mb-10  text-left xl:text-center">{content.title}</h2>
        <UtilityCardList />
      </div>
    </section>
  );
};
