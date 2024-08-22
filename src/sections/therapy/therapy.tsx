import { TherapyItem } from '@/components/common/therapy-item/therapy-item';
import { Slider } from '@/components/ui/slider/slider';
import therapy from '@/data/therapy.json';
import therapyData from '@/data/therapy.json';
import { useEffect, useState } from 'react';

export const Therapy = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="py-[45px] md:py-[50px] xl:pt-[77px] xl:pb-[106px]">
      <h2 className="mb-10 mdOnly:w-[505px] md:mb-[60px] xl:text-center">
        {therapy.title}
      </h2>

      {!isDesktop && (
        <Slider>
          {therapyData.therapySteps.map((item) => (
            <TherapyItem key={item.id} item={item} />
          ))}
        </Slider>
      )}

      {/* <ul className="xl:hidden">
        <Slider>
          {therapyData.therapySteps.map((item) => (
            <TherapyItem key={item.id} item={item} />
          ))}
        </Slider>
      </ul> */}

      <ul className="hidden xl:flex xl:flex-row justify-between">
        {therapyData.therapySteps.map((item) => (
          <TherapyItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};
