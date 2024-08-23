import { useEffect, useState } from 'react';

export const useIsHomePage = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
    }
  }, []);

  return isHomePage;
};
