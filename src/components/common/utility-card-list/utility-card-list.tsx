import React from 'react';
import { UtilityCard } from '@/components/common/utility-card/utility-card';
import content from '@/data/target-audience.json';

export const UtilityCardList = () => {
  return (
    <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-5">
      {content.cards.map((card) => (
        <UtilityCard
          key={card.id}
          urlMobile={card.urlMobile}
          urlTablet={card.urlTablet}
          urlDesktop={card.urlDesktop}
          text={card.text}
          alt={card.alt}
        />
      ))}
    </ul>
  );
};
