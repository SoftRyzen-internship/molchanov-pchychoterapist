'use client';
import clsx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { BurgerMenu } from '@/components/common/burger-menu';
import { useDeviceType } from '@/hooks/use-device-type';
import content from '@/data/header.json';
import { useIsHomePage } from '@/hooks/use-is-home-page';

export const Header = () => {
  const { isDesktop } = useDeviceType();
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
