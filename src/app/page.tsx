'use client';

import Logo from '@/components/ui/logo';
import ServiceCard from '@/components/ui/service-card';
import Socials from '@/components/ui/socials/socials';
import { useEffect, useState } from 'react';
import getServices from '../../sanity/api/services';
import services from '@/data/services/services.json';

const Home = () => {
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const data = await getServices();
  //       setServices(data);
  //     }

  //     fetchData();
  //   }, []);

  //   console.log('services:', services);
  // const servicesObject = services[0];
  // const servicesList = servicesObject.servicesList;

  return (
    <main>
      <div className="container">
        <Logo />

        <br />

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
            <ServiceCard key={service.id} title={service.title} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
