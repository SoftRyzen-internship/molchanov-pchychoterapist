import ServiceCardProps from '@/types/service-card';
import React from 'react';

import ServiceIcon from '@/assets/images/icons/verified-check.svg';

const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <li className="bg-white md:w-[281px] xl:w-[295px] flex flex-col gap-4 pr-11 md:pr-0">
      <ServiceIcon className="w-9 md:w-16 h-9 md:h-16" width={64} height={64} />
      <p className="text-base font-semibold font-montserrat leading-snug md:text-xl md:leading-7">
        {title}
      </p>
    </li>
  );
};

export default ServiceCard;
