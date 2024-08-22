'use client';

import { useEffect, useState } from 'react';

import { getServices } from '@/../sanity/api';
import { ServiceData } from './types';
import { ServiceCard } from '../service-card/service-card';

export const ServicesList = () => {
  const [services, setServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
    }

    fetchData();
  }, []);

  return (
    <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-[94px] md:gap-y-[60px] xl:gap-x-[125px]">
      {services.map((service) => (
        <ServiceCard key={service._key} title={service.title} />
      ))}
    </ul>
  );
};
