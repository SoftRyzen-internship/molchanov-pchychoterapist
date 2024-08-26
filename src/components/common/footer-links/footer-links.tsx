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
    <div className="flex items-center gap-4 stroke-white fill-white text-white">
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
              className="group-hover:fill-pinkLight group-hover:stroke-pinkLight group-focus:fill-pinkLight group-focus:stroke-pinkLight transition-colors duration-300"
            />
          </Link>
        )
      )}
    </div>
  );
};
