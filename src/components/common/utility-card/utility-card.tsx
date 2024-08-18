import Image from 'next/image';
import UtilityCardProps from './types';

const UtilityCard = ({
  id,
  urlMobile,
  urlTablet,
  urlDesktop,
  text,
  alt,
}: UtilityCardProps) => {
  return (
    <li
      key={id}
      className="bg-pinkSupperLight p-4 overflow-hidden rounded-lg flex gap-2  md:p-0 md:gap-5 items-center h-48 md:h-[330px]  xl:h-[362px] xl:w-[610px]"
    >
      <Image
        src={urlMobile}
        alt={alt}
        width={114}
        height={160}
        className="relative -bottom-4 -left-4 md:hidden "
      />
      <Image
        src={urlTablet}
        alt={alt}
        width={294}
        height={362}
        className=" hidden md:block  xl:hidden "
      />
      <Image
        src={urlDesktop}
        alt={alt}
        width={294}
        height={362}
        className="hidden xl:block relative xl:-bottom-[1px]  "
      />
      <p className="text-left md:leading-7 md:pr-[140px] font-semibold text-base leading-snug md:text-xl xl:pr-[46px]">
        {text}
      </p>
    </li>
  );
};
export default UtilityCard;
