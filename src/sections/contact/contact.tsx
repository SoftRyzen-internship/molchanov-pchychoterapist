import Image from 'next/image';

import contactData from '@/data/contact/contact.json';

export const Contact = () => {
  const { title, image } = contactData;

  return (
    <section className="py-[90px]">
      <div className="container">
        <h2>{title}</h2>
        <div>
          <Image src={image.path} width={320} height={329} alt={image.alt} />
        </div>
      </div>
    </section>
  );
};
