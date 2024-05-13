import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

import { schemaUrl } from './src/graphql/constants/schema-url.constant';

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    'src/graphql/codegen/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
    'src/graphql/codegen/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
