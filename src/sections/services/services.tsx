import { ServicesList } from '@/components/common/services-list/services-list';
import servicesData from '@/data/services.json';

export const Services = () => {
  return (
    <section className="services py-[45px] md:py-[50px] xl:py-[75px]">
      <div className="container">
        <h2 className="h2 mb-8 md:mb-[60px]">{servicesData.title}</h2>

        <ServicesList />
      </div>
    </section>
  );
};
