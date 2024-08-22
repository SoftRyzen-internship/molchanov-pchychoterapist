'use client';

import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { useIsDesktop } from '@/hooks/use-is-desctop';
import React from 'react';
import content from '@/data/header.json';

export const Header = () => {
  const isDesktop = useIsDesktop();
  return (
    <header className="">
      <div className="container">
        <Logo />
        {!isDesktop ? (
          <button type="button" className="">
            {/* <Burger/> */}
          </button>
        ) : (
          <>
            <NavMenu /> <button type="button">{content.button}</button>
          </>
        )}
      </div>
    </header>
  );
};
