export const politics = {
  name: 'politics',
  title: 'Політика конфіденційності та захисту персональних даних',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Підзаголовок',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
