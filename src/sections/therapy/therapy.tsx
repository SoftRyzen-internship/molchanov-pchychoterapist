'use client';

import { DesktopTherapyList } from '@/components/common/desctop-therapy-list/desctop-therapy-list';
import { MobileTherapyList } from '@/components/common/mobile-therapy-list/mobile-therapy-list';
import { useDeviceType } from '@/hooks/use-device-type';
import therapy from '@/data/therapy.json';

export const Therapy = () => {
  const { isDesktop } = useDeviceType();
  return (
    <section
      id="process"
      className="py-[45px] md:py-[50px] xl:pt-[77px] xl:pb-[106px]"
    >
      <div className="container">
        <h2 className="mb-10 mdOnly:w-[505px] md:mb-[60px] xl:text-center">
          {therapy.title}
        </h2>

        {!isDesktop ? <MobileTherapyList /> : <DesktopTherapyList />}
      </div>
    </section>
  );
};
