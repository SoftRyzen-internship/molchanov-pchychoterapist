import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

import { IModalProps } from './type';

import CloseIcon from '@/../public/assets/images/icons/icon-close.svg';

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  mobileMenu,
}: IModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div
        className={clsx(
          'fixed inset-0 flex w-screen items-center justify-center',
          mobileMenu && 'md:justify-end items-stretch'
        )}
      >
        <DialogPanel
          className={clsx(
            'bg-white p-6 rounded-lg',
            mobileMenu && 'w-screen rounded-none px-8 pb-12 md:w-96'
          )}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="flex ml-auto mb-6 rounded-lg focus:outline-blue focus:text-blue transition-all duration-300"
          >
            <CloseIcon
              width={24}
              height={24}
              className="stroke-current hover:stroke-blue transition-colors duration-300"
            />
          </button>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
