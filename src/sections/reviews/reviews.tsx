import { ReviewCard } from "@/components/common/review-card/review-card";
import { Slider } from "@/components/ui/slider/slider";
import reviews from '@/data/reviews.json';
import Image from 'next/image';

export const Reviews = () => {
  return (
    <section className="pt-[45px] md:pt-[50px] xl:pt-[70px]">
      <div className="container">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div  className="xl:w-1/2">
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
        <div className="xl:w-1/2">
        <Image
          src={reviews.image.path}
          width={254}
          height={237}
          alt={reviews.image.alt}
          className="mx-auto mt-4 md:w-[633px] md:mt-[60px] xl:w-[561px]"
        />
</div>
</div>
      </div>
    </section>
  );
};
