import Link from 'next/link';
import GoItSvg from '@/../../public/assets/images/icons/go-it.svg';
import SoftRyzenSvg from '@/../../public/assets/images/icons/softryzen.svg';
import footer from '@/data/footer.json';
import { LinkKey } from './types';

const iconComponents = {
  goIt: GoItSvg,
  softRyzen: SoftRyzenSvg,
};

const links = footer.links.map((link) => ({
  ...link,
  component: iconComponents[link.key as LinkKey],
}));

export const FooterLinks = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      {links.map(
        ({ key, href, ariaLabel, component: IconComponent, width, height }) => (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabel}
            className="group"
          >
            <IconComponent
              width={width}
              height={height}
              className="group-hover:text-pinkLight group-focus:text-pinkLight transition-colors duration-300"
            />
          </Link>
        )
      )}
    </div>
  );
};
