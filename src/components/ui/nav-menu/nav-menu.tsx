'use client';

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import { NavItem, NavMenuProps } from './types';
import nav from '@/data/common.json';

const { navList } = nav;

export const NavMenu: React.FC<NavMenuProps> = ({ section, toggleModal }) => {
  const isHomePage = useIsHomePage();

  let ulClassName = '';
  let linkClassName = '';
  let liClassName = '';
  switch (section) {
    case 'footer':
      ulClassName =
        'flex flex-col smOnly:gap-y-4 md:flex-row md:flex md:items-center md:gap-x-[30px]';
      linkClassName = 'text-[14px] text-white';
      break;
    case 'burger':
      ulClassName = 'flex flex-col gap-y-8 xl:hidden';
      linkClassName = 'text-[16px] ';
      liClassName = 'leading-[1.1]';
      break;
    case 'header':
      ulClassName = 'hidden xl:flex xl:gap-x-[30px]';
      linkClassName = 'text-[16px] text-greenDarkText';
      liClassName = 'flex items-center';
      break;
    default:
      ulClassName = 'flex flex-col gap-y-8 xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
  }

  return (
    <ul className={ulClassName}>
      {navList.map((i: NavItem) => (
        <li key={i.id} className={liClassName}>
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
