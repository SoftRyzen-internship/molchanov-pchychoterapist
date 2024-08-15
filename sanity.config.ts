'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemas';
import { structure } from './sanity/structure';

export default defineConfig({
  projectId,
  dataset,
  schema,
  apiVersion: '2024-08-13',
  basePath: '/admin',
  title: 'Psychologist Molchanov',
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
