export type FaqItem = {
  _key: string;
  question: string;
  answer: string;
};

export type AccordionProps = {
  faqs: FaqItem[];
};
