import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Мої послуги')
        .child(S.document().schemaType('services').documentId('services')),
      S.listItem()
        .title('Часті запитання')
        .child(S.document().schemaType('faq').documentId('faq')),
      S.listItem()
        .title('Політика конфіденційності')
        .child(S.document().schemaType('politics').documentId('politics')),
    ]);
