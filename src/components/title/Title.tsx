import type { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="mb-6 text-2xl text-white">{children}</h1>
);
