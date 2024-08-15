import UtilityCard from '@/components/common/utility-card/utility-card';
import Logo from '@/components/ui/logo';
import Socials from '@/components/ui/socials/socials';
import cardData from '@/data/target-audience/utility-card-data.json';

const Home = () => {
  return (
    <main>
      <Logo />

      <br />

      <UtilityCard
        urlMobile={cardData[1].urlMobile}
        urlTablet={cardData[1].urlTablet}
        urlDesktop={cardData[1].urlDesktop}
        text={cardData[1].text}
        alt={cardData[1].alt}
      />
      <button className="custom-button custom-button-no-border">
        Записатися
      </button>

      <button className="custom-button custom-button-border">Записатися</button>

      <div className="py-4">
        <Socials section="menu" />
      </div>

      <div className="bg-blue py-4">
        <Socials section="footer" />
      </div>
    </main>
  );
};

export default Home;
