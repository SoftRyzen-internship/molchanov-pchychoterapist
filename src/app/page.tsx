import Logo from '@/components/ui/logo';
import Socials from '@/components/ui/socials/socials';

const Home = () => {
  return (
    <main>
      <div className="container">
        <Logo />

        <br />

        <button className="custom-button custom-button-no-border">
          Записатися
        </button>

        <button className="custom-button custom-button-border">
          Записатися
        </button>

        <div className="py-4">
          <Socials section="menu" />
        </div>

        <div className="bg-blue py-4">
          <Socials section="footer" />
        </div>
      </div>
    </main>
  );
};

export default Home;
