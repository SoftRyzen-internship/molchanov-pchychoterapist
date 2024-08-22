'use client';

import { FC, useState, useEffect, useRef, Children } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination } from 'swiper/modules';
import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const slides = Children.toArray(children);

  return (
    <Swiper
      modules={[EffectFade, Pagination]}
      slidesPerView={1}
      grabCursor={true}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      initialSlide={activeIndex}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
