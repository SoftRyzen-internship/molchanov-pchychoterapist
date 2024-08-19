import React from 'react';

import clsx from 'clsx';
import { socials } from '@/data/common.json';
import { SocialsProps } from './types';
import { SocialItem } from '../social-item/social-item';

export const Socials = ({ section, gap = 'gap-8' }: SocialsProps) => {
  const iconsColors =
    section === 'footer'
      ? 'text-white hover:text-pinkLight'
      : 'text-greenDarkText hover:text-blue';
  return (
    <ul className={clsx('flex', gap)}>
      {socials.map((social) => (
        <SocialItem key={social.id} item={social} iconsColors={iconsColors} />
      ))}
    </ul>
  );
};
