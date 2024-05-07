import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getAllProducts } from '../../graphql/queries/products.graphql';
import { getQueryClient } from '../../providers/get-query-client';

import { ProductsByQuery } from './ProductsByQuery';

export const HydratedProducts = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProductsByQuery />
    </HydrationBoundary>
  );
};
