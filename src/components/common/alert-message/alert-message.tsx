import React from 'react';
import ErrorImage from '@/../public/assets/images/icons/submit-failed.svg';
import content from '@/data/common.json';

export const AlertMessage = () => {
  return (
    <div className="px-8 min-h-[calc(100vh-394px)] py-20 xl:px-[136px] sm:w-[480px] md:w-[768px] xl:w-[1280px] mx-auto flex flex-col gap-8  justify-center text-center ">
      <ErrorImage
        className="w-[265.2px] h-[195px] md:w-[299.6px] md:h-[220.29px] xl:w-[297.85px] xl:h-[219px] mx-auto"
        width={265.2}
        height={195}
        aria-label={content.feedbackMessages.failed.ariaLabel}
      />
      <h2 className="text-[32px] md:text-[40px] font-medium font-geologica ">
        {content.feedbackMessages.failed.title}
      </h2>
      <p className="text-sm md:text-base">{content.policy.text}</p>
    </div>
  );
};
