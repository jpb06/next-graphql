'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { ProductsGrid } from '@components';
import { productsQueryDocument } from '@graphql/products';

export const ApolloProductsClientFetching = () => {
  const { data } = useSuspenseQuery(productsQueryDocument);

  return <ProductsGrid data={data.products} />;
};
