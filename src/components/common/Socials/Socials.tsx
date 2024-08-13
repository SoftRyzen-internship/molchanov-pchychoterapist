import React from 'react';
import TelegramIcon from '@/assets/images/icons/telegram.svg';
import InstagramIcon from '@/assets/images/icons/instagram.svg';
import FacebookIcon from '@/assets/images/icons/facebook.svg';
import clsx from 'clsx';
import SocialsProps from '@/types/socials';

const Socials = ({
  color = 'text-white',
  hoverColor = 'hover:text-pinkLight',
  gap = 'gap-8',
}: SocialsProps) => {
  return (
    <div className={clsx('flex', gap)}>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon
          className={clsx(color, hoverColor, 'fill-current')}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </a>

      <a
        href="https://www.telegram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon
          className={clsx(color, hoverColor, 'fill-current')}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon
          className={clsx(color, hoverColor, 'stroke-current')}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </a>
    </div>
  );
};

export default Socials;
