'use client';

import { FooterTopSection } from '@/components/common/footer-top-section/footer-top-section';
import { FooterBottomSection } from '@/components/common/footer-bottom-section/footer-bottom-section';

export const Footer = () => {
  return (
    <footer className="bg-blue text-white"> 
      <FooterTopSection />
      <div className="w-full h-[1px] bg-white "></div>
      <FooterBottomSection />
    </footer>
  );
};