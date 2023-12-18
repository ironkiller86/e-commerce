import Card from './components/card';
import Filter from './components/filter';
import { BASE_URL, ENDPOINT } from '@/constants';
import ItemList from './components/itemList';
import { Product } from '@/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function getProducts(url?: string) {
  console.log(`${BASE_URL}${ENDPOINT.products}?${url}`);
  const res = await fetch(
    `${BASE_URL}${ENDPOINT.products}?${url}`,
    /*  `https://api.escuelajs.co/api/v1/products?offset=2&limit=10` */
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '3';
  const categoryId = searchParams['categoryId'] ?? '';
  const priceMin = searchParams['price_min'] ?? '';
  const priceMax = searchParams['price_max'] ?? '';
  /* let queryString = `offset=${page}&limit=${per_page}`; */
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

  const products: Product[] = await getProducts(queryString);
  const entries = products.slice(start, end);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> entries.length', entries.length);
  return (
    <main className="px-[104px]">
      <section>
        <ItemList products={entries} productsLength={products.length} />
      </section>
    </main>
  );
}
