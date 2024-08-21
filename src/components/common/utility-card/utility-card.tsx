import { UtilityCardProps } from './types';
import FirstIcon from '@/../public/assets/images/icons/target-audience/property-1.svg';
import SecondIcon from '@/../public/assets/images/icons/target-audience/property-2.svg';
import ThirdIcon from '@/../public/assets/images/icons/target-audience/property-3.svg';
import FourthIcon from '@/../public/assets/images/icons/target-audience/property-4.svg';

export const UtilityCard = ({ id, name, text, alt }: UtilityCardProps) => {
  const style =
    'w-[114px] h-40 relative -left-4 -bottom-4 md:left-0 md:w-[257.92px] md:h-[362px] left-0  xl:bottom-0 block flex-shrink-0';
  return (
    <li
      key={id}
      className="bg-pinkSupperLight p-4 overflow-hidden rounded-lg flex gap-2  md:p-0 md:gap-14 items-center h-48 md:h-[330px]  xl:h-[362px] xl:w-[610px]"
    >
      {name === 'property-1' && (
        <FirstIcon width={257.92} height={362} className={style} />
      )}
      {name === 'property-2' && (
        <SecondIcon width={257.92} height={362} className={style} />
      )}
      {name === 'property-3' && (
        <ThirdIcon width={257.92} height={362} className={style} />
      )}
      {name === 'property-4' && (
        <FourthIcon width={257.92} height={362} className={style} />
      )}
      <p className="text-left md:leading-7 md:pr-[140px] font-semibold text-base leading-snug md:text-xl xl:pr-[46px]">
        {text}
      </p>
    </li>
  );
};
