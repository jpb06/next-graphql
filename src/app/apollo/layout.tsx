import type { PropsWithChildren } from 'react';

import { ApolloWrapper } from '@logic/apollo';

const ApolloLayout = ({ children }: PropsWithChildren) => (
  <ApolloWrapper>{children}</ApolloWrapper>
);
export default ApolloLayout;
