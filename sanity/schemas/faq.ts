import { Rule } from '@sanity/types';

export const faq = {
  name: 'faq',
  title: 'Часті запитання',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Список',
      type: 'string',
    },
    {
      name: 'faqList',
      title: 'Список питань/відповідей',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Питання',
              validation: (rule: Rule) =>
                rule
                  .required()
                  .error('Це поле обовязкове для заповнення')
                  .min(3)
                  .error('Мінімальна кількість символів 3')
                  .max(130)
                  .error('Максимальна кількість символів 130'),
            },
            {
              name: 'answer',
              type: 'string',
              title: 'Відповідь',
              validation: (rule: Rule) =>
                rule
                  .required()
                  .error('Це поле обовязкове для заповнення')
                  .min(3)
                  .error('Мінімальна кількість символів 3')
                  .max(250)
                  .error('Максимальна кількість символів 250'),
            },
          ],
        },
      ],
      validation: (rule: Rule) =>
        rule
          .min(3)
          .error('Мінімальна кількість питань 3')
          .max(12)
          .error('Максимальна кількість питань 12'),
    },
  ],
};
