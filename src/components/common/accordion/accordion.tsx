import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import Arrow from '@/../public/assets/images/icons/down-arrow.svg';
import { useState } from 'react';
import faqs from '@/data/faq.json';
import clsx from 'clsx';

export const Accordion: React.FC = () => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<{
    key: number;
    open: boolean;
    close?: () => void;
  } | null>(null);
  function togglePanels(newPanel: { key: number; open: boolean }) {
    if (activeDisclosurePanel && activeDisclosurePanel.close) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }
    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  }
  return (
    <ul>
      {faqs.accordion.map((faq, index) => (
        <Disclosure
          key={faq.id}
          as="li"
          className={clsx('border-b border-greenDarkText ', {
            'py-4':
              !activeDisclosurePanel?.open ||
              activeDisclosurePanel.key !== index,
            'pt-4':
              activeDisclosurePanel?.open &&
              activeDisclosurePanel.key === index,
            'md:border-b-0': faqs.accordion.length - 1 === index,
          })}
        >
          {(panel) => {
            const { open } = panel;
            return (
              <>
                <DisclosureButton
                  className="flex justify-between gap-8 w-full"
                  onClick={() => togglePanels({ ...panel, key: index })}
                >
                  <p className="text-left xl:w-[750px]">{faq.question}</p>
                  <Arrow
                    className={clsx(
                      'min-w-4 min-h-4 transform transition-transform duration-300',
                      {
                        'rotate-180': open,
                        'rotate-0': !open,
                        'w-4 h-4 ': true,
                        'md:min-w-8 md:min-h-8': true,
                      }
                    )}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-[14px] font-light my-3 md:text-[16px] md:font-medium">
                  {faq.answers}
                </DisclosurePanel>
              </>
            );
          }}
        </Disclosure>
      ))}
    </ul>
  );
};
