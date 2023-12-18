'use client';
import { PAGINATION } from '@/constants';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Filters } from '@/types';

export default function Pagination({
  filters,
  options,
}: {
  filters: Filters;
  options: {
    productsLength: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? PAGINATION.initialPage;
  const per_page = searchParams.get('per_page') ?? PAGINATION.pageLimit;
  const action = ({ direction }: { direction: 'next' | 'back' }) => {
    let query = '';
    if (direction === 'next') {
      query = `/?page=${Number(page) + 1}&per_page=${per_page}`;
    } else {
      query = `/?page=${Number(page) - 1}&per_page=${per_page}`;
    }
    if (filters.category) {
      query += `&categoryId=${filters.category}`;
    }
    if (filters.minPrice && filters.maxPrice) {
      query += `&price_min=${filters.minPrice}&price_max=${filters.maxPrice}`;
    }
    router.push(query);
  };

  return (
    <div className="flex flex-row items-center gap-[30px] mt-[35px] justify-center ">
      <button
        disabled={!options.hasPrevPage}
        onClick={() => action({ direction: 'back' })}
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="arrow left"
          width={12.9}
          height={22.62}
        />
      </button>
      <p>{`
        ${page} di
        ${Math.ceil(options.productsLength / Number(per_page))}`}
      </p>
      <button
        disabled={!options.hasNextPage}
        onClick={() => action({ direction: 'next' })}
      >
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow right"
          width={12.9}
          height={22.62}
        />
      </button>
    </div>
  );
}
