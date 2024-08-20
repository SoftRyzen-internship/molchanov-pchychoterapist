import { FC, useState, useEffect, useRef, ReactNode } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination } from 'swiper/modules';
import React from 'react';

interface SliderProps {
  children: ReactNode | ReactNode[];
  initialSlide?: number;
  effect?: 'fade' | 'slide';
}

export const Slider: FC<SliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const slides = React.Children.toArray(children);

  return (
    <Swiper
      modules={[EffectFade, Pagination]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      grabCursor={true}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      initialSlide={activeIndex}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="h-auto bg-cover bg-center bg-no-repeat"
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
