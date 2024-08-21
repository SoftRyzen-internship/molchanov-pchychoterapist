import { Rule } from '@sanity/types';

export const politics = {
  name: 'politics',
  title: 'Політика конфіденційності та захисту персональних даних',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (rule: Rule) =>
        rule.required().error('Це поле обов`язкове для заповнення'),
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'array',
      validation: (rule: Rule) =>
        rule.required().error('Це поле обов`язкове для заповнення'),
      of: [
        {
          type: 'block',
          styles: [
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
        },
      ],
    },
  ],
};
