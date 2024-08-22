import { getServices } from '@/../sanity/api';
import { ServiceCard } from '../service-card/service-card';
import { ServiceData } from './types';

export const ServicesList = async () => {
  const services = await getServices();

  return (
    <ul className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-x-[94px] md:gap-y-[60px] xl:gap-x-[125px]">
      {services.map((service: ServiceData) => (
        <ServiceCard key={service._key} title={service.title} />
      ))}
    </ul>
  );
};
