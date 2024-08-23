
import { ReviewsBlock } from '@/components/common/reviews-bkock/reviews-block';
import reviews from '@/data/reviews.json';
import Image from 'next/image';

export const Reviews = () => {
  return (
    <section className="pt-[45px] md:pt-[50px] xl:pt-[70px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <ReviewsBlock />

          <Image
            src={reviews.image.path}
            width={254}
            height={237}
            alt={reviews.image.alt}
            className="smOnly:mx-auto smOnly:mt-4 w-[254px] h-[237px] object-cover 
             md:w-[633px] md:h-[488px] mdOnly:mx-auto mdOnly:mt-[60px] 
             xl:w-1/2 xl:ml-auto xl:w-[607px] xl:h-[574px] object-[left]"
          />
        </div>
      </div>
    </section>
  );
};

// import { ReviewsBlock } from '@/components/common/reviews-bkock/reviews-block';
// import reviews from '@/data/reviews.json';
// import Image from 'next/image';

// export const Reviews = () => {
//   return (
//     <section className="pt-[45px] md:pt-[50px] xl:pt-[70px]">
//       <div className="container">
//         <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
//           <ReviewsBlock />

//           <div className='relative w-full  md:h-[488px] xl:h-[574px] overflow-hidden max-w-[480px] md:max-w-[633px] xl:max-w-[607px]' 
//           >
//             <Image
//               src={reviews.image.path}
//               alt={reviews.image.alt}
//               layout="fill" 
//               objectFit="cover"
//               objectPosition="center" 
//               className="w-full h-auto  sm:object-center"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };