import { BASE_URL, ENDPOINT, PAGINATION } from '@/constants';
import { Product } from '@/types';
import ProductsContainer from './components/productsContainer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function getProducts(url?: string) {
  console.log(`${BASE_URL}${ENDPOINT.products}?${url}`);
  const res = await fetch(`${BASE_URL}${ENDPOINT.products}?${url}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? PAGINATION.initialPage;
  const per_page = searchParams['per_page'] ?? PAGINATION.pageLimit;
  const categoryId = searchParams['categoryId'] ?? '';
  const priceMin = searchParams['price_min'] ?? '';
  const priceMax = searchParams['price_max'] ?? '';
  let queryString = ``;
  if (categoryId) {
    queryString += `categoryId=${categoryId}`;
  }
  if (priceMin && priceMax) {
    queryString += `&price_min=${priceMin}&price_max=${priceMax}`;
  }
  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...
  console.log('queryString', queryString);
  const products: Product[] = await getProducts(queryString);
  const allProductsQt = products.length;
  const entries = products.slice(start, end);

  return (
    <main className="px-[104px]">
      <ProductsContainer
        products={entries}
        paginationOptions={{
          productsLength: allProductsQt,
          hasNextPage: end < allProductsQt,
          hasPrevPage: start > 0,
        }}
      />
    </main>
  );
}
