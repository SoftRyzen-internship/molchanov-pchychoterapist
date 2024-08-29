'use client';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ScrollButtonProps } from './types';

export const ScrollButton = ({ children, section, id }: ScrollButtonProps) => {
  let styles = '';
  switch (section) {
    case 'hero':
      styles = 'custom-button custom-button-no-border smOnly:w-full';
      break;
    case 'header':
      styles = 'custom-button custom-button-border';
      break;
    default:
      styles = 'custom-button';
      break;
  }
  return (
    <ScrollLink
      to={id}
      href=""
      smooth={true}
      offset={0}
      duration={500}
      className={styles}
    >
      {children}
    </ScrollLink>
  );
};
