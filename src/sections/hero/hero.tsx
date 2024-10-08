import Image from 'next/image';
import React from 'react';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import content from '@/data/hero.json';

export const Hero = () => {
  return (
    <section className="pt-11 pb-[45px] md:pb-[50px] md:pt-[90px] xl:pt-[109px] xl:pb-[70px]">
      <div className="container  flex flex-col md:gap-20 xl:gap-[37px]">
        <div className="smOnly:-mx-5 md:order-2 ">
          <Image
            src={content.image.src}
            width={939}
            height={450}
            priority
            alt={content.image.alt}
            sizes="(max-width: 360px) 360px, (max-width: 767px) 480px, (max-width: 1279px) 704px, 939px"
            className="md:left-0 md:right-0 md:h-[362px]  xl:h-[450px] xl:w-[939px] xl:mx-auto"
          />
        </div>

        <div className="smOnly:mt-12  text-center md:px-[43px]  md:order-1  xl:px-[311px]">
          <h1 className="mb-6 text-greenDarkText text-4xl font-semibold leading-[0.9] font-geologica md:text-[70px] md:mb-4">
            {content.title}
          </h1>
          <p className="mb-10 md:mb-12 md:px-6">{content.text}</p>
          <ScrollButton section="hero" id={content.href}>
            {content.button}
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};
