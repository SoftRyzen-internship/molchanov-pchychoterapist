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
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule: Rule) =>
                      rule
                        .uri({
                          scheme: ['http', 'https', 'mailto'],
                        })
                        .error('Невірне посилання'),
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: [{ title: '_blank', value: '_blank' }],
                      layout: 'radio',
                    },
                    validation: (rule: Rule) =>
                      rule.custom((value) => {
                        if (value !== '_blank') {
                          return 'Оберіть _blank';
                        }
                        return true;
                      }),
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
