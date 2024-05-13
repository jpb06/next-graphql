import { graphql } from '@graphql/codegen';

export const ProductItemWithCategoryFragment = graphql(`
  fragment ProductItemWithCategory on GqlProductWithCategory {
    ...ProductItem
    category {
      ...CategoryItem
    }
  }
`);
