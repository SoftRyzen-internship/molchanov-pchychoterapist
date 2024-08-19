import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import Arrow from '@/../public/assets/images/icons/down-arrow.svg';
import { useState } from 'react';
import faqs from '@/data/FAQ/FAQ.json';
import clsx from 'clsx';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  console.log(openIndex);
  return (
    <ul className="min-w-[320px]">
      {faqs.accordion.map((faq, index) => (
        <Disclosure
          key={faq.id}
          as="li"
          className={clsx('border-b border-greenDarkText', {
            'py-[16px]': openIndex !== index,
            'pt-[16px]': openIndex === index,
            'md:border-b-0': index === faqs.accordion.length - 1,
          })}
          defaultOpen={openIndex === index}
        >
          {({ open }) => (
            <>
              <DisclosureButton
                className="flex justify-between gap-[32px] w-full  "
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <p className="text-left ">{faq.question}</p>
                <Arrow
                  className={clsx(
                    'min-w-[16px] min-h-[16px]  transform transition-transform duration-300',
                    {
                      'rotate-180': openIndex === index,
                      'w-[16px] h-[16px] ': true,
                      'md:min-w-[32px] md:min-h-[32px]': true,
                    }
                  )}
                />
              </DisclosureButton>
              {openIndex === index && (
                <DisclosurePanel className="text-[14px] font-light my-[12px] md:text-[16px] md:font-medium">
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
