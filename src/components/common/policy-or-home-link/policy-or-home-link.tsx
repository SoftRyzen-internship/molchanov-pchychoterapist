'use client';

import Link from 'next/link';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import footer from '@/data/footer.json';

const { privacyPolicyTitle, toHomePage, ariaLabels } = footer;

export const PolicyOrHomeLink = () => {
  const isHomePage = useIsHomePage();

  return isHomePage ? (
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
  );
};
