import Logo from '@/components/ui/logo';
import ServiceCard from '@/components/ui/service-card';
import Socials from '@/components/ui/socials';
import services from '@/data/services/services.json';

const Home = () => {
  return (
    <main>
      <Logo />

      <br />

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

      <div className="bg-blue py-4">
        {services.map((service) => (
          <ServiceCard key={service.id} title={service.title} />
        ))}
      </div>
    </main>
  );
};

export default Home;
