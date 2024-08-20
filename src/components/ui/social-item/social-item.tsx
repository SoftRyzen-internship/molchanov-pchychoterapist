import React from 'react';

import TelegramIcon from '@/../public/assets/images/icons/telegram.svg';
import InstagramIcon from '@/../public/assets/images/icons/instagram.svg';
import FacebookIcon from '@/../public/assets/images/icons/facebook.svg';
import { SocialItemProps } from './types';
import clsx from 'clsx';

export const SocialItem = ({
  item: { name, link, ariaLabel },
  iconsColors,
}: SocialItemProps) => {
  return (
    <li key={name}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={ariaLabel}
        className={clsx(iconsColors, 'transition-colors duration-300')}
      >
        {name === 'telegram' && (
          <TelegramIcon className="h-6 w-6" width={24} height={24} />
        )}
        {name === 'instagram' && (
          <InstagramIcon className="h-6 w-6" width={24} height={24} />
        )}
        {name === 'facebook' && (
          <FacebookIcon className="h-6 w-6" width={24} height={24} />
        )}
      </a>
    </li>
  );
};
