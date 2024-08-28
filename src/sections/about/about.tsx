import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-[45px] md:py-[50px] xl:py-[105px]">
      <div className="container xl:relative">
        <h2 className="h2 mb-10 md:w-[607px] md:mb-[60px] xl:mb-5">{aboutData.title}</h2>

        <div className="relative smOnly:mb-[120px] mdOnly:mb-[130px] xl:absolute xl:top-0.5 xl:left-[754px]">
          <div className="relative w-full md:w-[575px] xl:w-[505px] h-[411px] md:h-[667px] xl:h-[586px] rounded-lg overflow-hidden">
            <Image
              src={aboutData.images.mainImage.src}
              alt={aboutData.images.mainImage.alt}
              fill
              sizes="(max-width: 360px) 320px, (max-width: 767px) 440px, (max-width: 1279px) 575px, 505px"
              className="h-full w-full object-cover object-left"
            />
          </div>

          <div className="absolute -bottom-20 left-0 w-full smOnly:max-w-[440px] pl-[72px] pr-[21px] md:pr-0 md:pl-[367px] xl:w-[505px] xl:pl-[196px] xl:pr-[14px] xl:bottom-[-156px]">
            <div className="relative w-full md:w-[339px] xl:w-[295px] h-[152px] md:h-[252px] xl:h-[209px] rounded-lg overflow-hidden">
              <Image
                src={aboutData.images.secondaryImage.src}
                alt={aboutData.images.secondaryImage.alt}
                fill
                sizes="(max-width: 360px) 227px, (max-width: 767px) 347px, (max-width: 1279px) 339px, 295px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-[520px] mb-10 md:mb-8 xl:gap-5 xl:w-[470px] xl:mb-11">
          {aboutData.text.map((text, index) => (
            <p key={index} className="md:font-medium md:text-[16px]">
              {text}
            </p>
          ))}
        </div>

        <AwardsList />
      </div>
    </section>
  );
};
