import Image from 'next/image';

interface UtilityCardProps {
  url: string;
  text: string;
  alt: string;
}
const UtilityCard = ({ url, text, alt }: UtilityCardProps) => {
  return (
    <div className="bg-pinkSupperLight p-4 overflow-hidden rounded-lg flex gap-2 sm:w-[448px] md:p-0 md:gap-5 items-center h-48 md:h-[330px] md:w-[704px] lg:h-[362px] lg:w-[610px]">
      <Image
        src={url}
        alt={alt}
        width={114}
        height={158}
        className="relative -bottom-4 -left-4 md:bottom-0 md:left-0 w-[114px] h-[158px] md:w-[294px] md:h-[330px]"
      />

      <p className="text-left md:leading-7 md:pr-[140px] font-semibold text-base leading-snug md:text-xl lg:pr-[46px]">
        {text}
      </p>
    </div>
  );
};
export default UtilityCard;
