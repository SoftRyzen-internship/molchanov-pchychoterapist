'use client';

import UtilityCard from '@/components/common/utility-card/utility-card';
import cardData from '@/data/target-audience/target-audience.json';
import Logo from '@/components/ui/logo/logo';
import Socials from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import ValuesCard from '@/components/common/values-card/values-card';
import cardsValuesData from '@/data/values/values.json';
const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
    }

    fetchData();
  }, []);

  console.log(services);

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
            name={cardsValuesData.cards[2].name}
            title={cardsValuesData.cards[2].title}
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
        <div className="py-4">
          <Socials section="menu" />
        </div>

        <div className="bg-blue py-4">
          <Socials section="footer" />
        </div>
        <div className="bg-blue py-4">
          <Socials section="footer" />
        </div>
      </div>
    </main>
  );
};

export default Home;
