'use client';

import footer from '@/data/footer.json';
import Link from 'next/link';
import GoItSvg from '@/../../public/assets/images/icons/go-it.svg';
import SoftRyzenSvg from '@/../../public/assets/images/icons/softryzen.svg';
import { useIsHomePage } from '@/hooks/use-is-home-page';

const {
  supportTitle,
  privacyPolicyTitle,
  copyrightTitle,
  toHomePage,
  pathToGoIt,
  pathToSoftRyzen,
  ariaLabels,
} = footer;

export const FooterBottomSection = () => {
  const isHomePage = useIsHomePage();

  return (
    <div className="container flex flex-col smOnly:gap-4 py-5 text-[14px] md:items-center mdOnly:gap-[26px] md:py-8 xl:flex-row xl:justify-between">
      <div className="flex flex-col smOnly:gap-4 md:items-center mdOnly:gap-[26px] xl:flex-row xl:gap-[32px]">
        <p>{supportTitle}</p>
        <div className="flex items-center gap-4 stroke-white fill-white text-white">
          <Link
            href={pathToGoIt}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabels.goIt}
            className="group"
          >
            <GoItSvg
              width={64}
              height={19}
              className="group-hover:fill-pinkLight group-hover:stroke-pinkLight group-focus:fill-pinkLight group-focus:stroke-pinkLight transition-colors duration-300"
            />
          </Link>
          <Link
            href={pathToSoftRyzen}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabels.softRyzen}
            className="group focus-within:text-pinkLight focus-within:stroke-pinkLight"
          >
            <SoftRyzenSvg
              width={131}
              height={19}
              className="group-hover:text-pinkLight group-hover:stroke-pinkLight group-focus:fill-pinkLight group-focus:stroke-pinkLight transition-colors duration-300"
            />
          </Link>
        </div>
      </div>

      {isHomePage ? (
        <Link
          href="/policy"
          className="link-underline-animation smOnly:w-[201px]"
          aria-label={ariaLabels.privacyPolicy}
        >
          {privacyPolicyTitle}
        </Link>
      ) : (
        <Link
          href="/"
          className="link-underline-animation smOnly:w-[60px]"
          aria-label={ariaLabels.homePage}
        >
          {toHomePage}
        </Link>
      )}

      <p>{copyrightTitle}</p>
    </div>
  );
};
