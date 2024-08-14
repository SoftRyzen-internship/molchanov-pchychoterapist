import React from 'react';

import TelegramIcon from '@/assets/images/icons/telegram.svg';
import InstagramIcon from '@/assets/images/icons/instagram.svg';
import FacebookIcon from '@/assets/images/icons/facebook.svg';
import SocialItemProps from './types';
import clsx from 'clsx';

const SocialItem = ({
  name,
  link,
  areaLabel,
  iconsColors,
}: SocialItemProps) => {
  return (
    <li key={name}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={areaLabel}
        className={clsx(iconsColors, 'transition-colors duration-300')}
      >
        {name === 'telegram' && <TelegramIcon className="h-6 w-6" />}
        {name === 'instagram' && <InstagramIcon className="h-6 w-6" />}
        {name === 'facebook' && <FacebookIcon className="h-6 w-6" />}
      </a>
    </li>
  );
};

export default SocialItem;
