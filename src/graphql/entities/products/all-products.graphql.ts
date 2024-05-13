import { request } from 'graphql-request';

import { graphql } from '@graphql/codegen';
import { schemaUrl } from '@graphql/schema';
import { delay } from '@logic';

export const productsQueryDocument = graphql(`
  query allProducts {
    products {
      id
      ...ProductItemWithCategory
    }
  }
`);

export const getAllProducts = async () => {
  const data = await request(schemaUrl, productsQueryDocument, {});
  await delay(1000);

  return data;
};
