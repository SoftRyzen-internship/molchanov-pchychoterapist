import { ReviewsSlider } from '@/components/common/reviews-slider/reviews-slider';
import reviews from '@/data/reviews.json';
import Image from 'next/image';

export const Reviews = () => {
  return (
    <section className="pt-[45px] md:pt-[50px] xl:pt-[70px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <ReviewsSlider />

          <Image
            src={reviews.image.path}
            width={254}
            height={237}
            alt={reviews.image.alt}
            className="smOnly:mx-auto smOnly:mt-4
             md:w-[633px] mdOnly:mx-auto mdOnly:mt-[60px] 
             xl:w-1/2 xl:ml-auto xl:w-[561px] "
          />
        </div>
      </div>
    </section>
  );
};
