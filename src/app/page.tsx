'use client';

import Logo from '@/components/ui/logo';
import Socials from '@/components/ui/socials';
import { useEffect, useState } from 'react';
import getServices from '../../sanity/api/services';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getServices();
      setServices(data);
    }

    fetchData();
  }, []);

  console.log(services);

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
    </main>
  );
};

export default Home;
