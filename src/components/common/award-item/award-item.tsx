import React from 'react';
import AwardIcon from '@/../public/assets/images/icons/medal.svg';

import { AwardItemProps } from './types';

export const AwardItem = ({ item: { title, description } }: AwardItemProps) => {
  return (
    <li className="award-item">
      <div className="w-9 h-9 bg-blueSuperLight rounded-[10px] flex justify-center items-center">
        <AwardIcon
          className="w-[17.44px] h-[22.5px] md:w-[31px] md:h-[40px]"
          width={31}
          height={40}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
