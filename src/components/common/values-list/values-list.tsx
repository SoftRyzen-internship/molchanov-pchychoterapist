import React from 'react';
import { ValuesCard } from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values.json';

export const ValuesList = () => {
  return (
    <ul className="flex flex-col gap-3 md:gap-5 xl:flex-row">
      {cardsValuesData.cards.map((card) => (
        <ValuesCard
          key={card.id}
          id={card.id}
          name={card.name}
          title={card.title}
          text={card.text}
        />
      ))}
    </ul>
  );
};
