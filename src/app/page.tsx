'use client';

import UtilityCard from '@/components/common/utility-card/utility-card';
import cardData from '@/data/target-audience/utility-card-data.json';
import Logo from '@/components/ui/logo';
import { Socials } from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import { getServices } from '@/../sanity/api';
import { ServiceCard } from '@/components/common/service-card/service-card';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Modal } from '@/components/common/modal';

type Service = {
  _key: string;
  title: string;
};

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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

        <NavMenu section="burger" />
        <NavMenu section="header" />
        <div className="bg-blue ">
          <NavMenu section="footer" />
        </div>

        <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-[94px] md:gap-y-[60px] xl:gap-x-[125px]">
          {services.map((service) => (
            <ServiceCard key={service._key} title={service.title} />
          ))}
        </ul>
        <div>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <p>MainText</p>
        </div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="custom-button custom-button-border"
          >
            Відкрити модальне вікно
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div>Контент модального вікна</div>
          </Modal>
        </div>
      </div>
    </main>
  );
};

export default Home;
