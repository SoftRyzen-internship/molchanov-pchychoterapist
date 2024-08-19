'use client';

import navList from '@/data/common.json';
import React from 'react';
import { Link } from 'react-scroll';
import clsx from 'clsx';
import { NavItem, NavMenuProps } from './types';

export const NavMenu: React.FC<NavMenuProps> = ({ section, toggleModal }) => {
  let ulClassName = '';
  let linkClassName = '';

  switch (section) {
    case 'footer':
      ulClassName =
        'flex flex-col gap-y-[16px] md:flex-row md:gap-y-[0px] md:flex md:items-center  md:gap-x-[30px]';
      linkClassName = 'text-[14px] text-white';
      break;
    case 'burger':
      ulClassName = 'flex  flex-col gap-y-[32px] xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    case 'header':
      ulClassName = 'hidden xl:flex xl:gap-x-[30px]';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    default:
      ulClassName = 'flex flex-col gap-y-[32px] xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
  }

  return (
    <ul className={ulClassName}>
      {navList.navList.map((i: NavItem) => (
        <li key={i.id}>
          <Link
            className={clsx(
              linkClassName,
              'link-underline-animation',
              'cursor-pointer font-medium leading-[1.4] '
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
          </Link>
        </li>
      ))}
    </ul>
  );
};
