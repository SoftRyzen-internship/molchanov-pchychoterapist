import { Services } from '@/sections/services/services';
import { TargetAudience } from '@/sections/target-audience/target-audience';
import { Therapy } from '@/sections/therapy/therapy';
import { About } from '@/sections/about/about';
import { Values } from '@/sections/values/values';
import { FAQ } from '@/sections/faq/faq';
import { Contact } from '@/sections/contact/contact';
import { BurgerMenu } from '@/components/ui/burger-menu';
import { getServices } from '../../../sanity/api';
import { ServiceData } from '@/sections/services/types';

const Home = async () => {
  let services: ServiceData[] | null = null;

  try {
    services = await getServices();
  } catch (err) {}

  return (
    <main>
      <BurgerMenu />
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
