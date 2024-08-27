import footer from '@/data/footer.json';
import { FooterLinks } from '../footer-links/footer-links';
import { CopyrightText } from '../copyright-text/copyright-text';
import { PolicyOrHomeLink } from '../policy-or-home-link/policy-or-home-link';

const { supportTitle } = footer;

export const FooterBottomSection = () => {
  return (
    <div className="container flex flex-col smOnly:gap-4 py-5 text-[14px] md:items-center mdOnly:gap-[26px] md:py-8 xl:flex-row xl:justify-between">
      <div className="flex flex-col smOnly:gap-4 md:items-center mdOnly:gap-[26px] xl:flex-row xl:gap-[32px]">
        <p>{supportTitle}</p>
        <FooterLinks />
      </div>
      <PolicyOrHomeLink />
      <CopyrightText />
    </div>
  );
};
