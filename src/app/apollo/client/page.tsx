import { Suspense } from 'react';

import { ApolloProductsClientFetching, Loading, Title } from '@components';

const Page = () => (
  <Suspense fallback={<Loading />}>
    <Title>Apollo - CSR with useSuspenseQuery</Title>
    <ApolloProductsClientFetching />;
  </Suspense>
);
export default Page;
