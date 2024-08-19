import React from 'react';
import AwardIcon from '@/../public/assets/images/icons/medal.svg';

import { AwardItemProps } from './types';

export const AwardItem = ({ item: { title, description } }: AwardItemProps) => {
  return (
    <li className="flex flex-col gap-4 mdOnly:gap-5 pr-[76px] md:pr-[41px] xl:pr-0 md:w-[336px] xl:w-[295px]">
      <div className="w-9 md:w-16 h-9 md:h-16 bg-blueSuperLight rounded-[10px] flex justify-center items-center">
        <AwardIcon
          className="w-[17.44px] h-[22.5px] md:w-[31px] md:h-[40px]"
          width={31}
          height={40}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="h3">{title}</h3>
        <p className="text-[14px] md:font-medium">{description}</p>
      </div>
    </li>
  );
};
