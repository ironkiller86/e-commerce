import DiscountBox from '@/app/components/discountBox';
import { BASE_URL, ENDPOINT } from '@/constants';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}${ENDPOINT.products}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: number } }) {
  const product: Product = await getProduct(params.id);
  const { title, description, category, price, images, id } = product;

  return (
    <main className="px-[104px] mt-[60px]">
      <section className="flex flex-row">
        <div className="flex flex-row flex-1 flex-wrap gap-[25px]">
          {images?.map((image, index) => (
            <div key={image} >
              <Image
                src={image}
                alt="images"
                width={index === 0 ? 707 : 341}
                height={index === 0 ? 707 : 394}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          <p>{category?.name || ''}</p>
          <p>{title || ''}</p>
          <p>Codice: 40.30.0000.00</p>
          <p>Garanzia: 24 mesi</p>
          <div className="flex flex-row items-center justify-between">
            <p>{`${price} €`}</p>
            <DiscountBox discount={/* discount */ 20} price={product.price} />
          </div>
        </div>
      </section>
    </main>
  );
}
