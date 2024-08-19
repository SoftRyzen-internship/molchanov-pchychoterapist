'use client';

import { UtilityCard } from '@/components/common/utility-card/utility-card';

import { ValuesCard } from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values/values.json';

import cardData from '@/data/target-audience/target-audience.json';
import { Logo } from '@/components/ui/logo/logo';
import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import { ServiceCard } from '@/components/common/service-card/service-card';

type Service = {
  _key: string;
  title: string;
};

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
    }

    fetchData();
  }, []);

  console.log('services:', services);

  return (
    <main>
      <div className="container">
        <Logo />

        <br />
        <ul>
          <UtilityCard
            id={cardData.cards[2].id}
            urlMobile={cardData.cards[2].urlMobile}
            urlTablet={cardData.cards[2].urlTablet}
            urlDesktop={cardData.cards[2].urlDesktop}
            text={cardData.cards[2].text}
            alt={cardData.cards[2].alt}
          />
        </ul>
        <ul>
          <ValuesCard
            id={cardsValuesData.cards[0].id}
            name={cardsValuesData.cards[0].name}
            title={cardsValuesData.cards[0].title}
            text={cardsValuesData.cards[0].text}
          />
        </ul>
        <button className="custom-button custom-button-no-border">
          Записатися
        </button>

        <button className="custom-button custom-button-border">
          Записатися
        </button>

        <div className="py-4">
          <Socials section="menu" />
        </div>

        <div className="bg-blue py-4">
          <Socials section="footer" />
        </div>

        <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-[94px] md:gap-y-[60px] xl:gap-x-[125px]">
          {services.map((service) => (
            <ServiceCard key={service._key} title={service.title} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
