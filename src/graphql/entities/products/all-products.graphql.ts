import { request } from 'graphql-request';

import { graphql } from '@graphql/codegen';
import { schemaUrl } from '@graphql/schema';

const productsQueryDocument = graphql(`
  query allProducts {
    products {
      id
      ...ProductItemWithCategory
    }
  }
`);

export const getAllProducts = async () =>
  await request(schemaUrl, productsQueryDocument, {});
