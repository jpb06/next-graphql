import type { PropsWithChildren } from 'react';

import { Providers } from '@logic/tanstack-query';

const TanstackQueryLayout = ({ children }: PropsWithChildren) => (
  <Providers>{children}</Providers>
);
export default TanstackQueryLayout;
