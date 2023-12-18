'use client';
import React, { useEffect, useState } from 'react';
import Filter from './filter';
import { useRouter } from 'next/navigation';
import Card from './card';
import { Product } from '@/types';
import Pagination from './pagination';

const numberRegex = /^[0-9.]+$/;

export default function ProductsContainer({
  products,
  paginationOptions,
}: {
  products: Product[];
  paginationOptions: {
    productsLength: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}) {
  const [filters, setFilters] = useState<{
    category: string;
    minPrice: string;
    maxPrice: string;
  }>({
    category: '',
    minPrice: '',
    maxPrice: '',
  });
  const router = useRouter();

  const handlePrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    if (numberRegex.test(value)) {
      setFilters((prevState) => ({ ...prevState, [name]: value }));
    } else setFilters((prevState) => ({ ...prevState, [name]: '' }));
  };

  const handleSelect = (selectedData: { value: string; label: string }) => {
    setFilters((prevState) => ({
      ...prevState,
      category: selectedData.value,
      maxPrice: '',
      minPrice: '',
    }));
  };

  useEffect(() => {
    let query = `/?`;
    if (filters.category) {
      query += `categoryId=${parseInt(filters.category)}`;
    }
    if (filters.minPrice && filters.maxPrice) {
      query += `&price_min=${filters.minPrice}&price_max=${filters.maxPrice}`;
    }
    router.push(query);
  }, [filters.category, filters.minPrice, filters.maxPrice, router]);

  return (
    <section className="mb-[60px]">
      <Filter
        filtersData={filters}
        handlePrice={handlePrice}
        handleSelect={handleSelect}
      />
      <div className="flex flex-row flex-wrap items-center gap-[20px] mt-[34px] justify-center min-h-[300px]">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      {paginationOptions.productsLength ? (
        <Pagination filters={filters} options={paginationOptions} />
      ) : null}
    </section>
  );
}
