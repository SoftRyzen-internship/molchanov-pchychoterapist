import Socials from '@/components/common/Socials/Socials';

const Home = () => {
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
    </main>
  );
};

export default Home;
