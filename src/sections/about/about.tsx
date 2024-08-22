import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section>
      <div className="container">
        <h2 className="h2">{aboutData.title}</h2>

        <div className="relative mb-[120px]">
          <div className="relative w-full h-[411px] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/webp/about/my-photo.webp"
              alt="Сергій Молчанов"
              fill
              style={{ objectFit: 'cover', objectPosition: 'left' }}
              className="h-full w-full"
            />
          </div>

          <div className="absolute -bottom-20 left-0 w-full max-w-[440px] pl-[72px] pr-[21px]">
            <div className="relative w-full  h-[152px] rounded-lg overflow-hidden">
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
