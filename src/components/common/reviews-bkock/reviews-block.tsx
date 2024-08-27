import { FC } from 'react';
import { Slider } from '@/components/ui/slider/slider';
import reviews from '@/data/reviews.json';
import { ReviewCard } from '@/components/common/review-card/review-card';
import QuotesSvg from '@/../public/assets/images/icons/quotes-left.svg';

export const ReviewsBlock: FC = () => {
  return (
    <div className="xl:w-[467px]">
      <QuotesSvg
        width={70}
        height={67}
        className="mb-5 w-8 h-[30px] md:w-[70px] md:h-[67px] md:mb-8 xl:mb-[57px]"
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
