'use client';

import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Socials } from '@/components/ui/socials/socials';
import footer from '@/data/footer.json';
import Link from 'next/link';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import GoItSvg from '@/../../public/assets/images/icons/go-it.svg';
import SoftRyzenSvg from '@/../../public/assets/images/icons/softryzen.svg';

const {
  supportTitle,
  privacyPolicyTitle,
  copyrightTitle,
  toHomePage
} = footer;

export const Footer = () => {
  const isHomePage = useIsHomePage();

  return (
    <footer className="bg-blue text-white">
      <div className="container flex flex-col gap-5 py-5 md:items-center md:gap-8 md:py-8">
        <Logo />
        <NavMenu section="footer" />
        <Socials section="footer" />
      </div>

      <div className="w-full h-[1px] bg-white "></div>

      <div className="container flex flex-col smOnly:gap-4 py-5 text-[14px] md:items-center mdOnly:gap-[26px] md:py-8 xl:flex-row  xl:justify-between">
        <div className=' flex flex-col smOnly:gap-4  md:items-center mdOnly:gap-[26px] xl:flex-row xl:gap-[32px]'>
          <p>{supportTitle}</p>
          <div className="flex items-center gap-4 stroke-white fill-white text-white">
            <Link
              href="https://goit.global/ua/"
              target="_blank"
               rel="noopener noreferrer nofollow"
              className="group "
            >
              <GoItSvg
                width={64}
                height={19}
                className="group-hover:fill-pinkLight group-hover:stroke-pinkLight group-focus:fill-pinkLight group-focus:stroke-pinkLight transition-colors duration-300"
              />
            </Link>
            <Link
              href="https://www.softryzen.com/"
              target="_blank"
               rel="noopener noreferrer nofollow"
              className="group  focus-within:text-pinkLight focus-within:stroke-pinkLight "
            >
              <SoftRyzenSvg
                width={131}
                height={19}
                className=" group-hover:text-pinkLight group-hover:stroke-pinkLight group-focus:fill-pinkLight group-focus:stroke-pinkLight transition-colors duration-300 "
              />
            </Link>
          </div>
        </div>
          
          {isHomePage ? (
            <Link href="/privacy-policy" className='link-underline-animation smOnly:w-[201px]'>{privacyPolicyTitle}</Link>
          ) : (
            <Link href="/" className='link-underline-animation  smOnly:w-[60px]' >{toHomePage}</Link>
          )}
          
          <p>{copyrightTitle}</p>        
      </div>
    </footer>
  );
};
