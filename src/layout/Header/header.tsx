'use client';
import clsx from 'clsx';
import React from 'react';
import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { BurgerMenu } from '@/components/ui/burger-menu';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import { useDeviceType } from '@/hooks/use-device-type';
import content from '@/data/header.json';
import { useIsHomePage } from '@/hooks/use-is-home-page';

export const Header = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const isHomePage = useIsHomePage();

  return (
    <header
      className={clsx('py-7 md:py-6 ', {
        'xl:py-6': !isHomePage,
        'xl:py-4': isHomePage,
      })}
    >
      <div
        className={clsx('container', 'flex', 'items-center', {
          'justify-between': isHomePage,
          ' justify-between xl:justify-normal xl:gap-[166px]': !isHomePage,
        })}
      >
        <Logo />
        {isDesktop && (
          <>
            <NavMenu section="header" />
            {isHomePage && (
              <ScrollButton section="header">{content.button}</ScrollButton>
            )}
          </>
        )}
        {(isTablet || isMobile) && <BurgerMenu />}
      </div>
    </header>
  );
};
