import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_API_URL,
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
