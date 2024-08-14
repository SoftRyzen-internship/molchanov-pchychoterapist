'use client';

import React from 'react';
import { Link } from 'react-scroll';
import navList from '../../../data/navList/navList';
import clsx from 'clsx';
import { NavItem, NavMenuProps } from '@/types/navMenu';

const NavMenu: React.FC<NavMenuProps> = ({
  ulClassName,
  linkClassName,
  toggleModal,
}) => {
  return (
    <ul className={ulClassName}>
      {navList.map((i: NavItem) => (
        <li key={i.id}>
          <Link
            className={clsx(
              linkClassName,
              ' cursor-pointer font-medium leading-[1.4] transition duration-300 link-underline-animation'
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

export default NavMenu;
