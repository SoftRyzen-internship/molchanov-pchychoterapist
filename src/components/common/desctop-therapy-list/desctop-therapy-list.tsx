import React from 'react';
import { TherapyItem } from '@/components/common/therapy-item/therapy-item';
import therapyData from '@/data/therapy.json';

export const DesktopTherapyList = () => {
  return (
    <div className="xl:flex xl:flex-row justify-between">
      {therapyData.therapySteps.map((item) => (
        <TherapyItem key={item.id} item={item} />
      ))}
    </div>
  );
};
