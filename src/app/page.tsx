'use client';

import UtilityCard from '@/components/common/utility-card/utility-card';
import cardData from '@/data/target-audience/utility-card-data.json';
import Logo from '@/components/ui/logo/logo';
import Socials from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';

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
            urlMobile={cardData[2].urlMobile}
            urlTablet={cardData[2].urlTablet}
            urlDesktop={cardData[2].urlDesktop}
            text={cardData[1].text}
            alt={cardData[1].alt}
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
