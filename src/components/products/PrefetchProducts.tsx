import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getAllProducts } from '@graphql/products';
import { getQueryClient } from '@logic/tanstack-query';

import { PrefetchedProductsClientHydration } from './PrefetchedProductsClientHydration';

export const PrefectProducts = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <PrefetchedProductsClientHydration />
    </HydrationBoundary>
  );
};
