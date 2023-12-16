import Card from './components/card';
import Filter from './components/filter';
import { BASE_URL, ENDPOINT } from '@/constants';
import ItemList from './components/itemList';

async function getProducts() {
  const res = await fetch(`${BASE_URL}${ENDPOINT.products}`);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>', products);
  return (
    <main className="px-[104px]">
      <section>
        <Filter />
        <ItemList />
      </section>
    </main>
  );
}
