import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import { IModalProps } from './type';

import CloseIcon from '@/../public/assets/images/icons/icon-close.svg';

export const Modal = ({ children, isOpen, setIsOpen }: IModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div className="fixed inset-0 flex w-screen items-center justify-center px-5">
        <DialogPanel className="w-full max-w-screen-sm max-h-[90vh] overflow-hidden bg-white p-6 rounded-lg md:max-w-none md:w-[704px] xl:w-[1068px]">
          <button
            onClick={() => setIsOpen(false)}
            className="flex ml-auto mb-6 rounded-lg focus:outline-blue focus:text-blue transition-all duration-300"
            aria-label="button close modal"
          >
            <CloseIcon
              width={24}
              height={24}
              className="text-greenDarkText hover:text-blue transition-colors duration-300"
            />
          </button>
          <div className="max-h-[calc(80vh-48px)] overflow-y-auto">
            {children}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
