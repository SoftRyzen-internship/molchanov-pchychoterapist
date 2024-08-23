import { ServicesList } from '@/components/common/services-list/services-list';
import servicesData from '@/data/services.json';
import { ServicesProps } from './types';

export const Services = ({ services }: ServicesProps) => {
  return (
    <section className="py-[45px] md:py-[50px] xl:py-[75px]">
      <div className="container">
        <h2 className="h2 mb-8 md:mb-[60px]">{servicesData.title}</h2>

        <ServicesList services={services} />
      </div>
    </section>
  );
};
