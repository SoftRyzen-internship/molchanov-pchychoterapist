import { FC } from 'react';
import { Slider } from '@/components/ui/slider/slider';
import reviews from '@/data/reviews.json';
import { ReviewCard } from '@/components/common/review-card/review-card';
import Image from 'next/image';

export const ReviewsSlider: FC = () => {
  return (
    <div className="xl:w-1/2">
      <Image
        src={reviews.quotes.path}
        width={32}
        height={30}
        alt={reviews.quotes.alt}
        className="mb-5 md:w-[70px] md:mb-8 xl:mb-[57px]"
      />
      <Slider>
        {reviews.reviews.map((review) => (
          <ReviewCard
            key={review.id}
            author={review.author}
            text={review.text}
          />
        ))}
      </Slider>
    </div>
  );
};
