'use client';

import UtilityCard from '@/components/common/utility-card/utility-card';
import cardData from '@/data/target-audience/utility-card-data.json';
import Logo from '@/components/ui/logo';
import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import { ServiceCard } from '@/components/common/service-card/service-card';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';

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

        <UtilityCard
          urlMobile={cardData[2].urlMobile}
          urlTablet={cardData[2].urlTablet}
          urlDesktop={cardData[2].urlDesktop}
          text={cardData[1].text}
          alt={cardData[1].alt}
        />
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

        <NavMenu section="header" />
        <div className="bg-blue ">
          <NavMenu section="footer" />
        </div>
        <NavMenu section="burger" />
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
