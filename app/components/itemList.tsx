'use client';
import { Product } from '@/types';
import Card from './card';
import Image from 'next/image';
import Filter from './filter';
import { useEffect, useRef, useState } from 'react';
import { getProducts } from '../page';
import { BASE_URL, ENDPOINT } from '@/constants';

export default function ItemList({ products }: { products: Product[] }) {
  const [data, setData] = useState<{ isLoading: boolean; products: Product[] }>(
    { isLoading: false, products: [] },
  );
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
    setFilters((prevState) => ({
      ...prevState,
      category: selectedData.value,
    }));
  };

  useEffect(() => {
    console.log('filters', filters);
  }, [filters]);

  useEffect(() => {
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
  }, [filters.category, filters.minPrice, filters.maxPrice]);

  return (
    <section>
      <Filter
        filtersData={filters}
        handlePrice={handlePrice}
        handleSelect={handleSelect}
      />
      <div className="flex flex-row flex-wrap items-center gap-[20px] mt-[34px] justify-center">
        {data.products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-[30px] mt-[25px] justify-center">
        <button>
          <Image
            src="/icons/arrow-left.svg"
            alt="arrow left"
            width={12.9}
            height={22.62}
          />
        </button>
        <p>1 di 26</p>
        <button>
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
