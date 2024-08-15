import React from 'react';

import clsx from 'clsx';
import socials from '@/data/ui/socials.json';
import SocialsProps from './types';
import SocialItem from '../social-item/social-item';

const Socials = ({ section, gap = 'gap-8' }: SocialsProps) => {
  const iconsColors =
    section === 'footer'
      ? 'text-white hover:text-pinkLight'
      : 'text-greenDarkText hover:text-blue';
  return (
    <ul className={clsx('flex', gap)}>
      {socials.map((social) => (
        <SocialItem
          key={social.name}
          name={social.name}
          link={social.link}
          areaLabel={social.areaLabel}
          iconsColors={iconsColors}
        />
      ))}
    </ul>
  );
};

export default Socials;
