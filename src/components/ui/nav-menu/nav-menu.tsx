'use client';

import nav from '@/data/common.json';
import React from 'react';
import { Link } from 'react-scroll';
import clsx from 'clsx';
import { NavItem, NavMenuProps } from './types';
// import { useRouter } from 'next/router';
// const {navList} = nav;

export const NavMenu: React.FC<NavMenuProps> = ({ section, toggleModal }) => {
  // const router = useRouter();
  // const isHomePage = router.pathname === '/';

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
      {nav.navList.map((i: NavItem) => (
        <li key={i.id}>
          <Link
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
          </Link>
        </li>
      ))}
    </ul>
  );
};
