import React from 'react';
import { AwardItem } from '../award-item/award-item';
import aboutData from '@/data/about.json';

export const AwardsList = () => {
  return (
    <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between  md:gap-y-7 xl:gap-x-0 xl:gap-y-8 xl:w-[610px]">
      {aboutData.awards.map((award) => (
        <AwardItem key={award.id} item={award} />
      ))}
    </ul>
  );
};
