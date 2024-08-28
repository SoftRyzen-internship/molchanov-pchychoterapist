import React from 'react';
import { ServiceCardProps } from './types';
import ServiceIcon from '@/../public/assets/images/icons/verified-check.svg';
import serviceData from '@/data/services.json';

export const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <li className="bg-white md:w-[281px] xl:w-[295px] flex flex-col gap-4 pr-11 md:pr-0">
      <ServiceIcon
        className="w-8 h-8 md:block md:w-16 md:h-16"
        width={64}
        height={64}
        aria-label={serviceData.icon.ariaLabel}
      />
      <p className="text-base font-semibold font-montserrat leading-snug md:text-xl md:leading-7">
        {title}
      </p>
    </li>
  );
};
