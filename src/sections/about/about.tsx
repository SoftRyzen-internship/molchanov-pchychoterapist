import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="py-[45px] md:py-[50px] xl:py-[105px]">
      <div className="container xl:relative">
        <h2 className="h2 mb-10 md:mb-[60px] xl:mb-5">{aboutData.title}</h2>

        <div className="relative smOnly:mb-[120px] mdOnly:mb-[130px] xl:absolute xl:top-0.5 xl:left-[754px]">
          <div className="relative w-full md:w-[575px] xl:w-[505px] h-[411px] md:h-[667px] xl:h-[586px] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/webp/about/my-photo.webp"
              alt="Сергій Молчанов"
              fill
              style={{ objectFit: 'cover', objectPosition: 'left' }}
              className="h-full w-full"
            />
          </div>

          <div className="absolute -bottom-20 left-0 w-full xl:w-[505px] smOnly:max-w-[440px] pl-[72px] md:pl-[367px] xl:pl-[196px] pr-[21px] md:pr-0 xl:pr-[14px]">
            <div className="relative w-full md:w-[339px] xl:w-[295px] h-[152px] md:h-[252px] xl:h-[209px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/webp/about/therapy-meeting.webp"
                alt="Сеанс терапії Сергія Молчанова з групою клієнтів"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:gap-5 md:w-[520px] xl:w-[470px] mb-10 md:mb-9 xl:mb-11">
          {aboutData.text.map((text, index) => (
            <p key={index} className="md:font-medium md:text-base">
              {text}
            </p>
          ))}
        </div>

        <AwardsList />
      </div>
    </section>
  );
};
