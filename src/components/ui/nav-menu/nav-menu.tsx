'use client';

import nav from '@/data/common.json';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import clsx from 'clsx';
import { NavItem, NavMenuProps } from './types';
const { navList } = nav;

export const NavMenu: React.FC<NavMenuProps> = ({ section, toggleModal }) => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
    }
  }, []);

  let ulClassName = '';
  let linkClassName = '';

  switch (section) {
    case 'footer':
      ulClassName =
        'flex flex-col smOnly:gap-y-4 md:flex-row md:flex md:items-center md:gap-x-[30px]';
      linkClassName = 'text-[14px] text-white';
      break;
    case 'burger':
      ulClassName = 'flex flex-col gap-y-8 xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    case 'header':
      ulClassName = 'hidden xl:flex xl:gap-x-[30px]';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    default:
      ulClassName = 'flex flex-col gap-y-8 xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
  }

  return (
    <ul className={ulClassName}>
      {navList.map((i: NavItem) => (
        <li key={i.id}>
          {isHomePage ? (
            <ScrollLink
              className={clsx(
                linkClassName,
                'link-underline-animation',
                'cursor-pointer '
              )}
              activeClass="active"
              to={i.href}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={toggleModal}
              tabIndex={0}
            >
              {i.name}
            </ScrollLink>
          ) : (
            <Link
              href={`/#${i.href}`}
              className={clsx(
                linkClassName,
                'link-underline-animation',
                'cursor-pointer '
              )}
              onClick={toggleModal}
              tabIndex={0}
            >
              {i.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
