import Card from './components/card';
import Filter from './components/filter';
import { BASE_URL, ENDPOINT } from '@/constants';
import ItemList from './components/itemList';
import { Product } from '@/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function getProducts(url?: string) {
  const res = await fetch(
    url || `${BASE_URL}${ENDPOINT.products}?offset=1&limit=10`,
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

export default async function Home() {
  const products: Product[] = await getProducts();
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>', products);
  return (
    <main className="px-[104px]">
      <section>
        <ItemList products={products} />
      </section>
    </main>
  );
}
