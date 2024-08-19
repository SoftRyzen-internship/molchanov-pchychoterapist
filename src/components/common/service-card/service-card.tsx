import React from 'react';

import { ServiceCardProps } from './types';

import ServiceIcon from '@/../public/assets/images/icons/verified-check.svg';
import ServiceIconMob from '@/../public/assets/images/icons/verified-check-mobile.svg';

export const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <li className="bg-white md:w-[281px] xl:w-[295px] flex flex-col gap-4 pr-11 md:pr-0">
      <ServiceIconMob className="w-9 h-9 md:hidden" width={32} height={32} />
      <ServiceIcon
        className="hidden md:block md:w-16 md:h-16"
        width={64}
        height={64}
      />
      <p className="text-base font-semibold font-montserrat leading-snug md:text-xl md:leading-7">
        {title}
      </p>
    </li>
  );
};
