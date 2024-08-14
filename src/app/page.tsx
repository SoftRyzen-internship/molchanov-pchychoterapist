import UtilityCard from '@/components/common/utility-card';
import Logo from '@/components/ui/logo';
import Socials from '@/components/ui/socials';
import cardData from '@/data/target-audience/utility-card-data.json';

const Home = () => {
  return (
    <main>
      <Logo />

      <br />

      <UtilityCard url={cardData[0].url} text={cardData[0].text} alt={cardData[0].alt} />
      <button className="custom-button custom-button-no-border">
        Записатися
      </button>

      <button className="custom-button custom-button-border">Записатися</button>

      <div className="py-4">
        <Socials color="text-greenDarkText" hoverColor="hover:text-blue" />
      </div>

      <div className="bg-blue py-4">
        <Socials />
      </div>
    </main>
  );
};

export default Home;
