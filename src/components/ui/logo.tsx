import Link from 'next/link';
import LogoSvg from '@/assets/images/icons/logo.svg';
import content from '@/data/ui/logo.json';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="group inline-block cursor-pointer  transform transition-transform duration-300 hover:underline focus:underline"
    >
      <div className="inline-flex gap-[5.57px]  md:gap-2 items-center">
        <LogoSvg className="w-[28px] h-[28px] md:w-10 md:h-10 fill-pinkLight" />
        <span className="text-[11.14px] leading-none font-bold md:text-base md:leading-snug group-hover:underline">
          {content.name}
        </span>
      </div>
    </Link>
  );
};
export default Logo;
