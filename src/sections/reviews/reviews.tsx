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
            className="smOnly:mx-auto smOnly:mt-4 w-[254px] h-[237px] object-cover 
             md:w-[633px] md:h-[488px] mdOnly:mx-auto mdOnly:mt-[60px] 
             xl:w-1/2 xl:ml-auto xl:w-[607px] xl:h-[594px] object-[left]"
          />
        </div>
      </div>
    </section>
  );
};
