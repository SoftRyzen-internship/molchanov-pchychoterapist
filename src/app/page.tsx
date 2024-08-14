import Socials from '@/components/common/Socials/Socials';
import NavMenu from '@/components/common/navMenu/navMenu';

const Home = () => {
  const handleToggleModal = () => {
    console.log('Modal toggled');
  };
  return (
    <main>
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

      <NavMenu
        ulClassName="flex space-x-[30px]"
        linkClassName="text-[16px] text-greenDarkText"
      />
      <div className="bg-blue py-4">
        <NavMenu
          ulClassName="flex space-x-[30px]"
          linkClassName="text-[14px] text-white"
          // toggleModal={handleToggleModal}
        />
      </div>
    </main>
  );
};

export default Home;
