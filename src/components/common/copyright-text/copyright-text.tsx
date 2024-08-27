import Link from 'next/link';
import footer from '@/data/footer.json';

const {
  year,
  link,
  text,
} = footer.copyright;

export const CopyrightText = () => {
  return (
    <p>
      {year}{' '}
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline-animation align-middle"
        aria-label={link.ariaLabel}
      >
        {link.text}
      </Link>. {text}
    </p>
  );
};
