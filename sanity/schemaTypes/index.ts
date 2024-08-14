import { type SchemaTypeDefinition } from 'sanity';
import services from './services';
import faq from './faq';
import politics from './politics';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, faq, politics],
};
