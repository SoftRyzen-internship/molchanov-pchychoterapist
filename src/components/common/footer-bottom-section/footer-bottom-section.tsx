'use client';

import Link from 'next/link';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import footer from '@/data/footer.json';
import { FooterLinks } from '../footer-links/footer-links';

const {
  supportTitle,
  privacyPolicyTitle,
  copyrightTitle,
  toHomePage,
  ariaLabels,
} = footer;

export const FooterBottomSection = () => {
  const isHomePage = useIsHomePage();

  return (
    <div className="container flex flex-col smOnly:gap-4 py-5 text-[14px] md:items-center mdOnly:gap-[26px] md:py-8 xl:flex-row xl:justify-between">
      <div className="flex flex-col smOnly:gap-4 md:items-center mdOnly:gap-[26px] xl:flex-row xl:gap-[32px]">
        <p>{supportTitle}</p>
        <FooterLinks />
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
