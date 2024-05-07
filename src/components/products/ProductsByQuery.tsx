'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../graphql/queries/products.graphql';

import { ProductsByPropsDrilling } from './ProductsByPropsDrilling';

export const ProductsByQuery = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (!data?.products) {
    return <div>Loading</div>;
  }

  return <ProductsByPropsDrilling data={data?.products} />;
};
