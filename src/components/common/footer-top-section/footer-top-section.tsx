import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Socials } from '@/components/ui/socials/socials';

export const FooterTopSection: React.FC = () => {
  return (
    <div className="container flex flex-col gap-5 py-5 md:items-center md:gap-8 md:py-8">
      <Logo />
      <NavMenu section="footer" />
      <Socials section="footer" />
    </div>
  );
};
