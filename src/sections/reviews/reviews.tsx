import Image from 'next/image';
import { ReviewsBlock } from '@/components/common/reviews-bkock/reviews-block';
import reviews from '@/data/reviews.json';

export const Reviews = () => {
  return (
    <section className="pt-[45px] md:pt-[50px] xl:pt-[70px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <ReviewsBlock />

          <div className="smOnly:px-[33px] smOnly:mt-4 w-full mdOnly:mt-[60px]">
            <Image
              src={reviews.image.path}
              width={770}
              height={594}
              alt={reviews.image.alt}
              className="object-cover w-fill h-auto
                md:w-[633px] md:h-[488px] mdOnly:mx-auto 
                xl:ml-auto xl:w-[607px] xl:h-[574px] xl:object-[left]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
