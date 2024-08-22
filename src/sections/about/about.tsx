import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section>
      <div className="container">
        <h2 className="h2">{aboutData.title}</h2>
        <Image
          src="/path/to/your/image.jpg" // Шлях до зображення
          alt="Опис зображення для скрін рідерів" // Опис зображення
          width={500} // Ширина зображення
          height={300}
        />
        {aboutData.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <AwardsList />
      </div>
    </section>
  );
};
