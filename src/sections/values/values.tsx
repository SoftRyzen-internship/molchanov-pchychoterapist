import React from 'react';
import values from '@/data/values.json';
import cardsValuesData from '@/data/values.json';
import { ValuesCard } from '@/components/common/values-card/values-card';

export const Values = () => {
  return (
    <section className="py-[45px] md:py-[50px] xl:pt-[70px] xl:pb-[105px]">
      <div className="container">
        <h2 className="mb-10 md:mb-[60px] xl:text-center">{values.title}</h2>

        <ul className=" flex flex-col gap-3 md:gap-5 xl:flex-row ">
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
      </div>
    </section>
  );
};
