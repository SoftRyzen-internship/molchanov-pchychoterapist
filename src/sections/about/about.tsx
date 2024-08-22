import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section>
      <div className="container">
        <h2 className="h2">{aboutData.title}</h2>

        <div className="relative mb-[120px] md:mb-[130px]">
          <div className="relative w-full md:w-[575px] xl:w-[505px] h-[411px] md:h-[667px] xl:h-[586px] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/webp/about/my-photo.webp"
              alt="Сергій Молчанов"
              fill
              style={{ objectFit: 'cover', objectPosition: 'left' }}
              className="h-full w-full"
            />
          </div>

          <div className="absolute -bottom-20 left-0 w-full smOnly:max-w-[440px] pl-[72px] md:pl-[367px] pr-[21px] md:pr-0">
            <div className="relative w-full md:w-[339px] md:h-[252px] h-[152px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/webp/about/therapy-meeting.webp"
                alt="Сеанс терапії Сергія Молчанова з групою клієнтів"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>

        {aboutData.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <AwardsList />
      </div>
    </section>
  );
};
