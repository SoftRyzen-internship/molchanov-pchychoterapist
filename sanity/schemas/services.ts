import { Rule } from '@sanity/types';

export const services = {
  name: 'services',
  title: 'Мої послуги',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Список',
      type: 'string',
    },
    {
      name: 'servicesList',
      title: 'Перелік послуг',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Список',
              type: 'string',
              validation: (rule: Rule) =>
                rule
                  .min(3)
                  .error('Мінімальна кількість символів 3')
                  .max(70)
                  .error('Максимальна кількість символів 70'),
            },
          ],
        },
      ],
      validation: (rule: Rule) =>
        rule
          .min(3)
          .error('Мінімальна кількість послуг 3')
          .max(12)
          .error('Максимальна кількість послуг 12'),
    },
  ],
};
