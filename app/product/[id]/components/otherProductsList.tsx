import Card from '@/app/components/card';
import { Product } from '@/types';
import React from 'react';
import '../pages.css';

export default function OtherProductsList({
  otherProductsList,
}: {
  otherProductsList: Product[];
}) {
  return (
    <section className="mb-[60px]">
      <p className="font-[800] text-[30px]">Guarda anche</p>
      <ul className="mt-[46px] flex flex-row items-center gap-[25px]  max-w-full overflow-x-auto overflow-y-hidden py-4">
        {otherProductsList.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
