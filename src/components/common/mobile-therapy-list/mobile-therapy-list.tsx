import React from 'react';
import { Slider } from '@/components/ui/slider/slider';
import { TherapyItem } from '@/components/common/therapy-item/therapy-item';
import therapyData from '@/data/therapy.json';

export const MobileTherapyList = () => {
  return (
    <Slider>
      {therapyData.therapySteps.map((item) => (
        <TherapyItem key={item.id} item={item} />
      ))}
    </Slider>
  );
};
