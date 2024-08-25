import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useIsHomePage = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  return isHomePage;
};
