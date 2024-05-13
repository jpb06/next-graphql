import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import {
  Loading,
  TanstackQueryProductsClientHydration,
  Title,
} from '@components';
import { getAllProducts } from '@graphql/products';
import { getQueryClient } from '@logic/tanstack-query';

const PrefetchProducts = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TanstackQueryProductsClientHydration />
    </HydrationBoundary>
  );
};

const Page = () => (
  <Suspense fallback={<Loading />}>
    <Title>Tanstack query - RSC SSR via hydration</Title>
    <PrefetchProducts />
  </Suspense>
);
export default Page;
