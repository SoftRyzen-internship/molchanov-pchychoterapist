import { AwardsList } from '@/components/common/awards-list/awards-list';
import aboutData from '@/data/about.json';

export const About = () => {
  return (
    <section>
      <div className="container">
        <h2 className="h2">{aboutData.title}</h2>
        {aboutData.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <AwardsList />
      </div>
    </section>
  );
};
