import { BASE_URL, ENDPOINT } from '@/constants';
import { Product } from '@/types';
import './pages.css';
import ProductInfo from './components/productInfo';
import ProductDescription from './components/productDescription';
import ProductImages from './components/productImages';
import OtherProductsList from './components/otherProductsList';

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}${ENDPOINT.products}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export async function getProductsByCategory(categoryId: number) {
  const res = await fetch(
    `${BASE_URL}${ENDPOINT.products}/?categoryId=${categoryId}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: number } }) {
  const product: Product = await getProduct(params.id);
  const productByCategory: Product[] = await getProductsByCategory(
    product.category.id,
  );

  return (
    <main className="px-[104px] mt-[60px]">
      <section className="flex flex-row gap-[25px]">
        <ProductImages images={product.images} />
        <ProductInfo product={product} />
      </section>
      <ProductDescription description={product.description} />
      <OtherProductsList otherProductsList={productByCategory} />
    </main>
  );
}
