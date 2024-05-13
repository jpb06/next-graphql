'use client';

import Image from 'next/image';

import { Card } from '@components';

import type { AllProductsQuery } from '../../graphql/codegen/graphql';

type ProductsGridProps = {
  data: AllProductsQuery['products'];
};

export const ProductsGrid = ({ data }: ProductsGridProps) => (
  <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-4">
    {data?.map(({ id, name, description, image }) => (
      <Card key={id} className="flex" scale={1.03}>
        <figure className="relative h-[100px]">
          <Image
            src={image}
            className="rounded-t-lg object-cover"
            fill
            sizes="(max-width: &100px) 100vw"
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg">{name}</h2>
          <div>{description}</div>
        </div>
      </Card>
    ))}
  </div>
);
