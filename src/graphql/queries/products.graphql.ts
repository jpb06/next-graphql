import request from 'graphql-request';

import { graphql } from '../codegen/gql';
import { schemaUrl } from '../schema-url';

const productsQueryDocument = graphql(/* GraphQL */ `
  query allProducts {
    products {
      id
      name
      description
      image
    }
  }
`);

export const getAllProducts = async () =>
  await request(schemaUrl, productsQueryDocument, {});
