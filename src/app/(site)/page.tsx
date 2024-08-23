import { Services } from '@/sections/services/services';
import { TargetAudience } from '@/sections/target-audience/target-audience';
import { Therapy } from '@/sections/therapy/therapy';
import { About } from '@/sections/about/about';
import { Values } from '@/sections/values/values';
import { FAQ } from '@/sections/faq/faq';
import { Contact } from '@/sections/contact/contact';
import { Reviews } from '@/sections/reviews/reviews';
import { BurgerMenu } from '@/components/ui/burger-menu';

const Home = () => {
  return (
    <main>
      <Reviews />
      <BurgerMenu />
      <About />
      <Services />
      <TargetAudience />
      <Therapy />
      <Values />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
