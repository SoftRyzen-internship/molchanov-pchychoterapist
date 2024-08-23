import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Socials } from '@/components/ui/socials/socials';
import footer from '@/data/footer.json';
// import Link from 'next/link';

const { supportTitle, privacyPolicyTitle, copyrightTitle } = footer;
export const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col gap-5 bg-blue text-white py-5">
        <Logo />
        <NavMenu section="footer" />
        <Socials section="footer" />

        <p>{supportTitle}</p>
        {/* <Link href="/privacy-policy"> */}
        <a>{privacyPolicyTitle}</a>
        {/* </Link> */}
        <p>{copyrightTitle}</p>
      </div>
    </footer>
  );
};
