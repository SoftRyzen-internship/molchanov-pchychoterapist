import Link from 'next/link';
import LogoSvg from '@/../public/assets/images/icons/logo.svg';
import content from '@/data/common.json';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className="group cursor-pointer  inline-flex gap-[5.57px]  md:gap-2 items-center  transition-all ease duration-300"
    >
      <LogoSvg
        width={40}
        height={40}
        className="h-7 w-7 md:w-10 md:h-10 fill-pinkLight"
      />
      <span className="text-[11.14px]  font-bold  md:text-base md:leading-snug  link-underline-animation ">
        {content.logo.name}
      </span>
    </Link>
  );
};
