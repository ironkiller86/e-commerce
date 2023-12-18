'use client';
import { Product } from '@/types';
import Card from './card';
import Image from 'next/image';
import Filter from './filter';
import { useEffect, useRef, useState } from 'react';
import { getProducts } from '../page';
import { BASE_URL, ENDPOINT } from '@/constants';

import { useSearchParams, useRouter } from 'next/navigation';

export default function ItemList({
  products,
  productsLength,
}: {
  products: Product[];
  productsLength: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '3';

  const pp = Number(per_page);

  /*   const [data, setData] = useState<{ isLoading: boolean; products: Product[] }>(
    { isLoading: false, products: [] },
  ); */
  const [filters, setFilters] = useState<{
    category: string;
    minPrice: string;
    maxPrice: string;
  }>({
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  const handlePrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelect = (selectedData: { value: string; label: string }) => {
    /*   router.push(`/?categoryId=${parseInt(selectedData.value)}`); */
    setFilters((prevState) => ({
      ...prevState,
      category: selectedData.value,
    }));
  };

  /*  useEffect(() => {
    const fetchData = async () => {
      let queryString = '';
      if (filters.category) {
        queryString += `categoryId=${parseInt(filters.category)}`;
      }
      if (filters.minPrice && filters.maxPrice) {
        queryString += `&price_min=${parseFloat(
          filters.minPrice,
        )}&price_max=${parseFloat(filters.maxPrice)}`;
      }
      const url = `${BASE_URL}${ENDPOINT.products}?${queryString}`;
      console.log('queryString', url);
      const productsFiltered: Product[] = await getProducts(url);
      console.log(productsFiltered);
      setData((prevState) => ({
        ...prevState,
        products: productsFiltered,
      }));
    };
    if (filters.category || filters.minPrice || filters.maxPrice) fetchData();
  }, [filters.category, filters.minPrice, filters.maxPrice]); */

  useEffect(() => {
    if (filters.category) {
      router.push(`/?categoryId=${parseInt(filters.category)}`);
    }

    if (filters.minPrice && filters.maxPrice) {
      router.push(
        `/?price_min=${filters.minPrice}&price_max=${filters.maxPrice}`,
      );
    }

    /*     if (filters.category) {
      router.push(`/?categoryId=${parseInt(filters.category)}`);
    } */
  }, [filters.category, filters.minPrice, filters.maxPrice]);

  return (
    <section>
      <Filter
        filtersData={filters}
        handlePrice={handlePrice}
        handleSelect={handleSelect}
      />
      <div className="flex flex-row flex-wrap items-center gap-[20px] mt-[34px] justify-center">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-[30px] mt-[25px] justify-center">
        <button
          onClick={() => {
            router.push(
              `/?page=${Number(page) - 1}&per_page=${per_page}&categoryId=${
                filters.category
              }&price_min=${filters.minPrice}&price_max=${filters.maxPrice}`,
            );
          }}
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="arrow left"
            width={12.9}
            height={22.62}
          />
        </button>
        <p>
          {page} di {Math.ceil(productsLength / Number(per_page))}
        </p>
        <button
          onClick={() => {
            router.push(
              `/?page=${Number(page) + 1}&per_page=${per_page}&categoryId=${
                filters.category
              }&price_min=${filters.minPrice}&price_max=${filters.maxPrice}`,
            );
          }}
        >
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow right"
            width={12.9}
            height={22.62}
          />
        </button>
      </div>
    </section>
  );
}
