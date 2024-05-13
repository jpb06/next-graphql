import { Suspense } from 'react';

import { PrefectProducts, Loading } from '@components';

const Page = () => (
  <Suspense fallback={<Loading />}>
    <PrefectProducts />
  </Suspense>
);
export default Page;
