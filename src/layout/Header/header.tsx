'use client';

import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { useIsDesktop } from '@/hooks/use-is-desctop';
import { Link as ScrollLink } from 'react-scroll';

import React from 'react';
import content from '@/data/header.json';

export const Header = () => {
  const isDesktop = useIsDesktop();
  console.log(isDesktop);
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
            <NavMenu />
            <ScrollLink
              className="custom-button custom-button-border "
              to={content.href}
            >
              {content.button}
            </ScrollLink>
          </>
        )}
      </div>
    </header>
  );
};
