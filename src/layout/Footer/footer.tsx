import { Logo } from '@/components/ui/logo/logo';
import { NavMenu } from '@/components/ui/nav-menu/nav-menu';
import { Socials } from '@/components/ui/socials/socials';
import footer from '@/data/footer.json';
import Link from 'next/link';
import Image from 'next/image';

const {
  supportTitle,
  privacyPolicyTitle,
  copyrightTitle,
  imqGoIt,
  imgSoftRyzen,
} = footer;
export const Footer = () => {
  return (
    <footer className="bg-blue text-white py-5">
      <div className="container ">
        <div className=" flex flex-col gap-5 ">
          <Logo />
          <NavMenu section="footer" />
          <Socials section="footer" />
        </div>

        <div className=" flex flex-col gap-4 pt-5">
          <p>{supportTitle}</p>

          <div className="flex items-center gap-4 stroke-white fill-white text-white">
            <Link
              href="https://goit.global/ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={imqGoIt.path}
                alt={imqGoIt.alt}
                width={100}
                height={50}
                className="flex items-center gap-4 stroke-white fill-white text-white color-white "
                style={{ color: 'white' }}
              />
            </Link>
            <Link
              href="https://www.softryzen.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={imgSoftRyzen.path}
                alt={imgSoftRyzen.alt}
                width={100}
                height={50}
              />
            </Link>
          </div>

          <Link href="/privacy-policy">{privacyPolicyTitle}</Link>
          <p>{copyrightTitle}</p>
        </div>
      </div>
    </footer>
  );
};
