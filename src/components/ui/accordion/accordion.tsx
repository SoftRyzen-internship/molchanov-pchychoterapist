import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import Arrow from '@/../public/assets/images/icons/down-arrow.svg';
import { useState } from 'react';
import faqs from '@/data/FAQ/FAQ.json';
import clsx from 'clsx';

export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  console.log(openIndex);
  return (
    <ul className="min-w-[320px]">
      {faqs.accordion.map((faq, index) => (
        <Disclosure
          key={faq.id}
          as="li"
          className={clsx('border-b border-greenDarkText', {
            'py-4': openIndex !== index,
            'pt-4': openIndex === index,
            'md:border-b-0': index === faqs.accordion.length - 1,
          })}
          defaultOpen={openIndex === index}
        >
          {({ open }) => (
            <>
              <DisclosureButton
                className="flex justify-between gap-8 w-full  "
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <p className="text-left ">{faq.question}</p>
                <Arrow
                  className={clsx(
                    'min-w-4 min-h-4 transform transition-transform duration-300',
                    {
                      'rotate-180': openIndex === index,
                      'w-4 h-4 ': true,
                      'md:min-w-8 md:min-h-8': true,
                    }
                  )}
                />
              </DisclosureButton>
              {openIndex === index  && (
                <DisclosurePanel className="text-[14px] font-light my-3 md:text-[16px] md:font-medium">
                  {faq.answers}
                </DisclosurePanel>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </ul>
  );
};
