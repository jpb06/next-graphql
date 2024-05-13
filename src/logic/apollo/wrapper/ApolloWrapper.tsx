'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

import { makeClient } from './logic/make-client.logic';

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    {children}
  </ApolloNextAppProvider>
);
