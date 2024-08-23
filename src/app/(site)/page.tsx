import { Services } from '@/sections/services/services';

import { Hero } from '@/sections/hero/hero';

import { TargetAudience } from '@/sections/target-audience/target-audience';
import { Therapy } from '@/sections/therapy/therapy';
import { About } from '@/sections/about/about';
import { Values } from '@/sections/values/values';
import { FAQ } from '@/sections/faq/faq';
import { Contact } from '@/sections/contact/contact';
import { Reviews } from '@/sections/reviews/reviews';
import { getServices } from '../../../sanity/api';
import { ServiceData } from '@/sections/services/types';

const Home = async () => {
  let services: ServiceData[] | null = null;

  try {
    services = await getServices();
  } catch (err) {}

  return (
    <main>
      <Reviews />
      <Hero />

      <About />
      {services && <Services services={services} />}

      <TargetAudience />
      <Therapy />
      <Values />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
