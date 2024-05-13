'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '@graphql/products';

import { ProductsGrid } from './ProductsGrid';

export const TanstackQueryProductsClientHydration = () => {
  const { data } = useQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
  });

  if (!data?.products) {
    return null;
  }

  return <ProductsGrid data={data.products} />;
};
