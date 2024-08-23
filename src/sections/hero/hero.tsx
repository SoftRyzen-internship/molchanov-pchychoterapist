'use client';
import Image from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '@/data/hero.json';

export const Hero = () => {
  return (
    <section className="pt-11 pb-[45px] md:pb-[72px] md:pt-[90px] xl:pt-[109px] xl:pb-[70px]">
      <div className="container  flex flex-col md:gap-20 xl:gap-[37px]">
        <div className="smOnly:-mx-5 md:order-2 ">
          {' '}
          <Image
            src={content.image.src}
            width={939}
            height={450}
            priority
            alt={content.image.alt}
            className="    md:left-0 md:right-0 md:h-[362px]  xl:h-[450px] xl:w-[939px] xl:mx-auto"
          />
        </div>

        <div className="smOnly:mt-12  text-center md:px-[43px]  md:order-1  xl:px-[311px]">
          <h1 className="mb-6 text-4xl font-semibold leading-[0.9] font-geologica md:text-[70px] md:mb-4">
            {content.title}
          </h1>
          <p className="mb-10 md:mb-12 md:px-6">{content.text}</p>
          <ScrollLink
            to={content.href}
            smooth={true}
            offset={0}
            duration={500}
            className="custom-button custom-button-no-border smOnly:w-full"
          >
            {content.button}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};
