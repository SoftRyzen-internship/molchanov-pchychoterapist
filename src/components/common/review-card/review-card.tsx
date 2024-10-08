'use client';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import reviews from '@/data/reviews.json';
import { Modal } from '../../ui/modal';
import { ReviewCardProps } from './types';

export const ReviewCard = ({ author, text }: ReviewCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const style = ' text-sm font-medium leading-[1.4] text-blueDark md:text-base';

  const checkTruncation = () => {
    const element = textRef.current;
    if (element) {
      const { scrollHeight, clientHeight } = element;
      setIsTruncated(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => {
      window.removeEventListener('resize', checkTruncation);
    };
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  return (
    <div className="min-h-[191px] md:min-h-[224px] xl:min-h-[290px] flex flex-col gap-4 md:gap-5 xl:gap-0 xl:w-[467px]">
      <p className={clsx(style, 'xl:mb-[37px] xl:text-xl xl:font-semibold')}>
        {author}
      </p>
      <p
        ref={textRef}
        className=" text-base font-semibold  overflow-hidden text-ellipsis line-clamp-4 leading-[1.4] md:text-xl md:line-clamp-3 xl:mb-4 xl:line-clamp-4"
      >
        {text}
      </p>
      {isTruncated && (
        <button
          type="button"
          className={clsx(
            style,
            ' text-left inline-block cursor-pointer self-start  transition-all ease duration-300 hover:underline focus:underline'
          )}
          onClick={handleOpenModal}
        >
          {reviews.button}
        </button>
      )}
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <div className="flex flex-col gap-8 md:gap-[60px] mb-5 md:mb-8 xl:w-[941px] xl:mx-auto">
          <p className="text-base font-semibold md:text-xl xl:w-[836px]">
            {text}
          </p>
          <p className="text-blueDark md:text-base">{author}</p>
        </div>
      </Modal>
    </div>
  );
};
