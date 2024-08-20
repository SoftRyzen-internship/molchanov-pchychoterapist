import React from 'react';
import SuccessImage from '@/../public/assets/images/icons/submit-success.svg';
import ErrorImage from '@/../public/assets/images/icons/submit-failed.svg';
import commonData from '@/data/common.json';
import clsx from 'clsx';

type Status = 'success' | 'failed';

type FormFeedbackMessageProps = {
  status: Status;
};

const { feedbackMessages } = commonData;

const FormFeedbackMessage = ({ status }: FormFeedbackMessageProps) => {
  const { title, message } = feedbackMessages[status];

  const titleColor = status === 'success' ? 'text-blueDark' : 'text-redError';

  return (
    <div className="flex flex-col gap-4 md:gap-6 items-center">
      {status === 'success' ? (
        <SuccessImage
          className="w-[175px] h-[238px] md:w-[208px] md:h-[283px] xl:w-[202px] xl:h-[273px]"
          width={175}
          height={238}
        />
      ) : (
        <ErrorImage
          className="w-[265.2px] h-[195px] md:w-[299.6px] md:h-[220.29px] xl:w-[297.85px] xl:h-[219px]"
          width={265.2}
          height={195}
        />
      )}

      <h2
        className={clsx(
          titleColor,
          'text-[32px] md:text-[40px] font-medium font-geologica text-center'
        )}
      >
        {title}
      </h2>
      <p className="text-center md:font-normal">{message}</p>
    </div>
  );
};

export default FormFeedbackMessage;
