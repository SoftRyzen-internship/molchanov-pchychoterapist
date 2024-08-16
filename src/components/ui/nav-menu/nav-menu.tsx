'use client';

import React from 'react';
import { Link } from 'react-scroll';
import { navList } from '../../../data/common.json';
import clsx from 'clsx';
import { NavItem, NavMenuProps } from './types';

export const NavMenu: React.FC<NavMenuProps> = ({ section, toggleModal }) => {
  let ulClassName = '';
  let linkClassName = '';

  switch (section) {
    case 'footer':
      ulClassName = 'flex space-x-[30px]';
      linkClassName = 'text-[14px] text-white';
      break;
    case 'burger':
      ulClassName = 'flex flex-col space-y-[32px] xl:hidden';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    case 'header':
      ulClassName = 'flex space-x-[30px]';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
    default:
      ulClassName = 'flex space-x-[30px]';
      linkClassName = 'text-[16px] text-greenDarkText';
      break;
  }

  return (
    <ul className={ulClassName}>
      {navList.map((i: NavItem) => (
        <li key={i.id}>
          <Link
            className={clsx(
              linkClassName,
              'link-underline-animation',
              'cursor-pointer font-medium leading-[1.4] transition duration-300 '
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
