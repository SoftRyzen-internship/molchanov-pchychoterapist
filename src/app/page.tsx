import NavMenu from '@/components/common/navMenu/navMenu';
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

        <NavMenu
        ulClassName="flex space-x-[30px]"
        linkClassName="text-[16px] text-greenDarkText"
      />
      <div className="bg-blue ">
        <NavMenu
          ulClassName="flex space-x-[30px]"
          linkClassName="text-[14px] text-white"
        />
      </div>
      </div>
    </main>
  );
};

export default Home;
