import { type SchemaTypeDefinition } from 'sanity';
import services from './services';
import faq from './faq';
import politics from './politics';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, faq, politics],
};

export default schema;
