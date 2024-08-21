import { TherapyItem } from '@/components/common/therapy-item/therapy-item';
import therapy from '@/data/therapy.json';
import therapyData from '@/data/therapy.json';

export const Therapy = () => {
  return (
    <section className="py-[45px] md:py-[50px] xl:pt-[77px] xl:pb-[106px]">
      <h2 className="mb-10 mdOnly:w-[505px] md:mb-[60px] xl:text-center">
        {therapy.title}
      </h2>

      <ul className="hidden xl:flex xl:flex-row justify-between">
        {therapyData.therapySteps.map((item) => (
          <TherapyItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};
