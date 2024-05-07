'use client';

import type { AllProductsQuery } from '../../graphql/codegen/graphql';

type ProductsProps = {
  data: AllProductsQuery['products'];
};

export const ProductsByPropsDrilling = ({ data }: ProductsProps) => (
  <ul>{data?.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
);
