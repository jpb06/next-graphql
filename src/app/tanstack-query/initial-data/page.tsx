import { Suspense } from 'react';

import { Loading, ProductsGrid, Title } from '@components';
import { getAllProducts } from '@graphql/products';

const Rsc = async () => {
  const initialData = await getAllProducts();

  return <ProductsGrid data={initialData.products} />;
};

const Page = () => (
  <Suspense fallback={<Loading />}>
    <Title>Tanstack query - RSC SSR via initial data</Title>
    <Rsc />
  </Suspense>
);
export default Page;
