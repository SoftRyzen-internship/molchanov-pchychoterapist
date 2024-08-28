import { ServicesList } from '@/components/common/services-list/services-list';
import { ServicesProps } from './types';
import servicesData from '@/data/services.json';

export const Services = ({ services }: ServicesProps) => {
  return (
    <section
      id="services"
      className="py-[45px] md:py-[50px] xl:pt-[70px] xl:pb-[75px]"
    >
      <div className="container">
        <h2 className="h2 mb-8 md:mb-[60px]">{servicesData.title}</h2>

        <ServicesList services={services} />
      </div>
    </section>
  );
};
