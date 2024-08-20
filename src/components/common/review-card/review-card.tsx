'use client';
import React, { useState } from 'react';
import { ReviewCardProps } from './types';
import reviews from '@/data/reviews.json';
import clsx from 'clsx';

export const ReviewCard = ({ author, text }: ReviewCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const style = ' text-sm font-medium leading-[1.4] text-blueDark';
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  return (
    <li className=" flex flex-col gap-4">
      <p className={clsx(style, ' ')}>{author}</p>
      <h3 className="">{text}</h3>
      <button
        type="button"
        className={clsx(
          style,
          ' text-left inline-block self-start hover:underline'
        )}
        onClick={handleOpenModal}
      >
        {reviews.button}
      </button>
      {/* {modalIsOpen && <Modal></Modal>} */}
    </li>
  );
};
