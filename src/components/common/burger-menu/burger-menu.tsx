'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import BurgerButton from '@/../public/assets/images/icons/burger-menu.svg';
import CloseIcon from '@/../public/assets/images/icons/icon-close.svg';
import { Logo } from '../../ui/logo/logo';
import { Socials } from '../../ui/socials/socials';
import { NavMenu } from '../../ui/nav-menu/nav-menu';
import data from '@/data/common.json';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={data.burger.btnBurgerAriaLabel}
      >
        <BurgerButton
          width={32}
          height={32}
          aria-label={data.burger.btnBurgerIconAriaLabel}
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-md" />
        <div className="fixed inset-0 flex w-screen items-stretch justify-center md:justify-end">
          <DialogPanel className="w-screen bg-white md:w-96">
            <div className="max-w-screen-sm h-full flex flex-col px-5 md:px-8 mx-auto font-medium">
              <div className="flex justify-between items-center py-[30px]  md:py-6 mb-6 md:mb-[36px]">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  className="focus:outline-blue focus:text-blue transition-all duration-300"
                  aria-label={data.burger.btnCloseMobMenuAriaLabel}
                >
                  <CloseIcon
                    width={24}
                    height={24}
                    className="text-greenDarkText hover:text-blue transition-colors duration-300 md:w-8 md:h-8"
                    aria-label={data.burger.btnCloseIconAriaLabel}
                  />
                </button>
              </div>
              <NavMenu section="burger" toggleModal={() => setIsOpen(false)} />
              <div className="mx-auto mt-auto mb-24 md:mb-12">
                <Socials section="menu" gap="gap-[30px]" />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
