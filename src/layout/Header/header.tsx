'use client';

import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';

import { Link as ScrollLink } from 'react-scroll';

import React from 'react';
import content from '@/data/header.json';
import { useDeviceType } from '@/hooks/use-device-type';

export const Header = () => {
  const { isDesktop } = useDeviceType();
  console.log(isDesktop);
  return (
    <header className="">
      <div className="container flex justify-between">
        <Logo />
        {!isDesktop ? (
          <button type="button" className="">
            {/* <Burger/> */}
          </button>
        ) : (
          <>
            <NavMenu section="header" />
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
