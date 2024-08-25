import React from 'react';
import Link from 'next/link';
import content from '@/data/policy.json';
import { PolicyProps } from './types';

export const Policy = ({ politics }: PolicyProps) => {
  return (
    <section className="pt-5 md:pt-[60px] xl:pt-24">
      <div className="px-8 xl:px-[136px] sm:w-[480px] md:w-[768px] xl:w-[1280px] mx-auto">
        <h1 className="text-blue mb-10 md:mb-16 md:text-center font-montserrat font-semibold text-base leading-[1.4] md:font-geologica md:text-[40px] md:leading-none md:font-medium">
          {content.title}
        </h1>
        <ul className="flex flex-col policy">
          {politics.map((block) => {
            const Tag =
              block.style === 'normal'
                ? 'div'
                : (block.style as keyof JSX.IntrinsicElements);

            return (
              <li key={block._key}>
                <Tag key={block._key}>
                  {block.children.map((child) => {
                    const sentences = child.text.split(
                      /(?<=[:;.!?])\s(?![\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,})/g
                    );

                    return (
                      <React.Fragment key={child._key}>
                        {sentences.map((sentence, index) => {
                          const emailMatch = sentence.match(
                            /[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/
                          );

                          const isDashed = sentence.trim().startsWith('-');
                          const spanClassName = isDashed ? 'dashed' : '';
                          return (
                            <span
                              key={`${child._key}-${index}`}
                              className={spanClassName}
                            >
                              {emailMatch ? (
                                <>
                                  {sentence.split(emailMatch[0])[0]}
                                  <Link
                                    href={`mailto:${emailMatch[0]}`}
                                    className="text-blue cursor-pointer  inline-block transition-all duration-300 hover:underline focus:underline"
                                  >
                                    {emailMatch[0]}
                                  </Link>
                                  {sentence.split(emailMatch[0])[1]}
                                </>
                              ) : (
                                sentence.trim()
                              )}
                            </span>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
