import ServiceCardProps from '@/types/service-card';
import React from 'react';

// import ServiceIcon from '@/assets/images/icons/service.svg';

const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <li>
      {/* <ServiceIcon className="h-6 w-6" width={24} height={24} /> */}
      <p>{title}</p>
    </li>
  );
};

export default ServiceCard;
