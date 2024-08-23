import Image from 'next/image';

import contactData from '@/data/contact.json';
import { ContactForm } from '@/components/common/contact-form';

export const Contact = () => {
  const { title, image } = contactData;

  return (
    <section id="contacts" className="py-[90px] md:py-[60px] xl:py-[70px]">
      <div className="container flex flex-col items-center gap-10 md:gap-[74px] xl:flex-row xl:gap-[70px]">
        <div className="xl:max-w-[609px]">
          <h2 className="mb-[60px]">{title}</h2>
          <ContactForm />
        </div>
        <Image
          src={image.path}
          width={320}
          height={329}
          alt={image.alt}
          className="md:w-[445px] xl:w-[561px]"
        />
      </div>
    </section>
  );
};
