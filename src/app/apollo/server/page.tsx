import { Suspense } from 'react';

import { Loading, ProductsGrid, Title } from '@components';
import { productsQueryDocument } from '@graphql/products';
import { delay } from '@logic';
import { getClient } from '@logic/apollo';

const Rsc = async () => {
  const { data } = await getClient().query({
    query: productsQueryDocument,
  });
  await delay(1000);

  return <ProductsGrid data={data.products} />;
};

const Page = () => (
  <Suspense fallback={<Loading />}>
    <Title>Apollo - RSC SSR via getClient</Title>
    <Rsc />
  </Suspense>
);
export default Page;
