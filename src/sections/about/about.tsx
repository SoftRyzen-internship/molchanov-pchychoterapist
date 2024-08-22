import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section>
      <div className="container">
        <h2 className="h2">{aboutData.title}</h2>
        <div className="relative w-full h-[411px] md:w-[575px] md:h-[667px] overflow-hidden">
          <Image
            src="/assets/images/webp/about/my-photo.webp"
            alt="Сергій Молчанов"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            className="h-full w-full"
          />
        </div>
        {/* <div>
          <Image
            src="/assets/images/webp/about-me/my-photo.webp"
            alt="Сергій Молчанов"
            width={575}
            height={667}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="/assets/images/webp/about-me/therapy-meeting.webp"
            alt="Сеанс терапії Сергія Молчанова з групою клієнтів"
            width={339}
            height={252}
            layout="responsive"
          />
        </div> */}

        {aboutData.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <AwardsList />
      </div>
    </section>
  );
};
