'use client';

import { Link as ScrollLink } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { BurgerMenu } from '@/components/ui/burger-menu';
import { useDeviceType } from '@/hooks/use-device-type';
import content from '@/data/header.json';

export const Header = () => {
  const { isDesktop } = useDeviceType();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
    }
  }, []);

  return (
    <header className="py-7 md:py-6 xl:py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        {!isDesktop ? (
          <BurgerMenu />
        ) : (
          <>
            <NavMenu section="header" />
            {isHomePage && (
              <ScrollLink
                className="custom-button custom-button-border "
                to={content.href}
                duration={500}
                smooth={true}
                offset={0}
              >
                {content.button}
              </ScrollLink>
            )}
          </>
        )}
      </div>
    </header>
  );
};
