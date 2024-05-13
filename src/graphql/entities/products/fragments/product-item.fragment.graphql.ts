import { graphql } from '@graphql/codegen';

export const ProductItemFragment = graphql(`
  fragment ProductItem on GqlProductWithCategory {
    name
    description
    image
    price
    stock
  }
`);
