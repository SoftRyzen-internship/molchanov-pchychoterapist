import { Services } from '@/sections/services/services';

import { Hero } from '@/sections/hero/hero';

import { TargetAudience } from '@/sections/target-audience/target-audience';
import { Therapy } from '@/sections/therapy/therapy';
import { About } from '@/sections/about/about';
import { Values } from '@/sections/values/values';
import { FAQ } from '@/sections/faq/faq';
import { Contact } from '@/sections/contact/contact';
import { getFaq, getServices } from '../../../sanity/api';
import { Reviews } from '@/sections/reviews/reviews';
import { ServiceData } from '@/sections/services/types';
import { Footer } from '@/layout/Footer/footer';
import { FaqItem } from '@/components/common/accordion/types';

const Home = async () => {
  let services: ServiceData[] | null = null;
  let faqs: FaqItem[] | null = null;
  try {
    services = await getServices();
    faqs = await getFaq();
  } catch (err) {}

  return (
    <>
      <main>
        <Hero />
        {services && <Services services={services} />}
        <TargetAudience />
        <Therapy />
        <About />
        <Values />
        <Reviews />
        {faqs && <FAQ faqs={faqs} />}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
