import { useState } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

import BurgerButton from '@/../public/assets/images/icons/burger-menu.svg';
import CloseIcon from '@/../public/assets/images/icons/icon-close.svg';
import { Logo } from '../logo/logo';
import { Socials } from '../socials/socials';
import { NavMenu } from '../nav-menu/nav-menu';

import data from '@/data/common.json';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={data.burger.ariaLabel}
      >
        <BurgerButton width={32} height={32} />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
        <div className="fixed inset-0 flex w-screen items-stretch justify-center md:justify-end">
          <DialogPanel className="flex flex-col w-screen bg-white px-5 md:w-96">
            <div className="flex justify-between items-center py-6 mb-6">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="focus:outline-blue focus:text-blue transition-all duration-300"
                aria-label="button close modal"
              >
                <CloseIcon
                  width={24}
                  height={24}
                  className="text-greenDarkText hover:text-blue transition-colors duration-300"
                />
              </button>
            </div>
            <NavMenu section="burger" toggleModal={() => setIsOpen(false)} />
            <div className="mx-auto mt-auto mb-24 md:mb-12">
              <Socials section="menu" gap="gap-[30px]" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};
