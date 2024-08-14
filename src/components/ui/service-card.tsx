import ServiceCardProps from '@/types/service-card';
import React from 'react';

const ServiceCard = ({ title }: ServiceCardProps) => {
  return <p>{title}</p>;
};

export default ServiceCard;
