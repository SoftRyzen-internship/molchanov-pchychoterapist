import React from 'react';
import DocumentIcon from '@/../public/assets/images/icons/document.svg';
import PersonIcon from '@/../public/assets/images/icons/person.svg';
import HourglassIcon from '@/../public/assets/images/icons/hourglass.svg';
import DiplomaIcon from '@/../public/assets/images/icons/diploma.svg';
import { TherapyItemProps } from './types';
import clsx from 'clsx';

export const TherapyItem: React.FC<TherapyItemProps> = ({
  item: { iconName, title, text },
}) => {
  const horizontalLine =
    'xl:block xl:w-[235px] xl:h-[2px] xl:bg-[rgba(41,73,69,0.3)] xl:absolute xl:left-1/2 xl:translate-x-10 xl:top-1/2 xl:translate-y-[-50%]';

  return (
    <li className="flex flex-col gap-5 min-h-[208px] md:min-h-[291px]  md:gap-9 items-center xl:w-[295px] px-[10px] mdOnly:px-[215px] pb-[22px] mdOnly:pb-[63px]">
      <div
        className={`w-12 md:w-20 h-12 md:h-20 rounded-full flex justify-center items-center ${iconName === 'diploma' ? 'bg-greenLight' : 'bg-blueLight'} relative`}
      >
        {iconName === 'document' && (
          <>
            <DocumentIcon
              className="h-6 md:w-10 w-6 md:h-10"
              width={40}
              height={40}
            />
            <div className={clsx(horizontalLine)}></div>
          </>
        )}
        {iconName === 'person' && (
          <>
            <PersonIcon
              className="h-6 md:w-10 w-6 md:h-10"
              width={40}
              height={40}
            />
            <div className={clsx(horizontalLine)}></div>
          </>
        )}
        {iconName === 'hourglass' && (
          <>
            <HourglassIcon
              className="h-6 md:w-10 w-6 md:h-10"
              width={40}
              height={40}
            />
            <div className={clsx(horizontalLine)}></div>
          </>
        )}
        {iconName === 'diploma' && (
          <DiplomaIcon
            className="h-[26px] md:w-11 w-[26px] md:h-11"
            width={44}
            height={44}
          />
        )}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="h3">{title}</h3>
        <p className="text-center notXL:min-h-[68px] md:font-medium text-base">
          {text}
        </p>
      </div>
    </li>
  );
};
