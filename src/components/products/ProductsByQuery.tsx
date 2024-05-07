'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../../graphql/queries/products.graphql';

export const ProductsByQuery = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  return (
    <ul>{data?.products.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
  );
};
