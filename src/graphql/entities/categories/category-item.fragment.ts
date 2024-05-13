import { graphql } from '@graphql/codegen';

export const CategoryItemFragment = graphql(`
  fragment CategoryItem on GqlCategory {
    id
    name
  }
`);
