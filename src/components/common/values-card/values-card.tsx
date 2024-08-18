import ValuesCardProps from './types';
import HeartIcon from '@/../public/assets/images/icons/heart.svg';
import MedalIcon from '@/../public/assets/images/icons/medal-star.svg';
import CupIcon from '@/../public/assets/images/icons/cup-star.svg';

const ValuesCard = ({ id, name, title, text }: ValuesCardProps) => {
  return (
    <li
      key={id}
      className="bg-pinkLight rounded-lg py-6 px-8 md:py-10 xl:py-16 xl:w-[400px] "
    >
      {name === 'heart' && (
        <HeartIcon
          className="fill-greenDarkText h-7 w-7 md:h-16 md:w-16"
          width={28}
          height={28}
        />
      )}
      {name === 'medal' && (
        <MedalIcon
          className="stroke-greenDarkText h-7 w-7 md:h-16 md:w-16 stroke-[3px] md:stroke-[1.5px]"
          width={28}
          height={28}
        />
      )}
      {name === 'cup' && (
        <CupIcon
          className="stroke-greenDarkText  h-7 w-7 md:h-20 md:w-20 md:p-2  stroke-[3px] md:stroke-[1.5px]"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={28}
          height={28}
        />
      )}
      <h4 className="mt-6 mb-4 xl:mt-9">{title}</h4>
      <p className="">{text}</p>
    </li>
  );
};
export default ValuesCard;
