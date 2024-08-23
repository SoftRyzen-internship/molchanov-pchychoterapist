'use client';

import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';

import { Link as ScrollLink } from 'react-scroll';

import React, { useEffect, useState } from 'react';
import content from '@/data/header.json';
import { useDeviceType } from '@/hooks/use-device-type';

export const Header = () => {
  const { isDesktop } = useDeviceType();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
    }
  }, []);
  console.log(isHomePage);
  return (
    <header className="py-[30px] md:py-6 xl:py-4">
      <div className="container flex justify-between items-center">
        <Logo />
        {!isDesktop ? (
          <button type="button" className="w-6 h-6 bg-slate-600">
            {/* <Burger/> */}
          </button>
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
