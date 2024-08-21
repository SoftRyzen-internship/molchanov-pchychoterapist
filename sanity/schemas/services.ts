import { Rule } from '@sanity/types';

export const services = {
  name: 'services',
  title: 'Мої послуги',
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
      name: 'servicesList',
      title: 'Список послуг',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Список',
              type: 'string',
              validation: (rule: Rule) => [
                rule.min(3).error('Мінімальна кількість символів 3'),
                rule.max(70).error('Максимальна кількість символів 70'),
              ],
            },
          ],
        },
      ],
      validation: (rule: Rule) => [
        rule.min(3).error('Мінімальна кількість послуг 3'),
        rule.max(12).error('Максимальна кількість послуг 12'),
      ],
    },
  ],
};
