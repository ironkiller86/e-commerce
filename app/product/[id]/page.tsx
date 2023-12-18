import DiscountBox from '@/app/components/discountBox';
import { BASE_URL, ENDPOINT } from '@/constants';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import './pages.css';

const qualityList = [
  'Sit dolor amet neque',
  'Lorem ipsum',
  'consectetur adipiscing elit',
];

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
      <section className="flex flex-row gap-[25px]">
        <div className="flex flex-row flex-1 flex-wrap gap-[25px]">
          <picture className="imgContainer">
            <Image
              src={images[0]}
              alt="images"
              fill
              className="imagePreview"
              /*  width={index === 0 ? 707 : 341}
                height={index === 0 ? 707 : 394} */
            />
          </picture>
          <div className="flex flex-row justify-between items-center w-full">
            <picture className="smallImgContainer">
              <Image
                src={images[1]}
                alt="images"
                fill
                className="imagePreview"
              />
            </picture>
            <picture className="smallImgContainer">
              <Image
                src={images[2]}
                alt="images"
                fill
                className="imagePreview"
              />
            </picture>
          </div>
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
          <div className="mt-[12px] flex flex-row items-center justify-start gap-[20px] border-y-[1px] border-gray py-[11px]">
            <Image src="/icons/box.svg" alt="box" width={15.6} height={17.6} />
            <p className="text-green font-[700]">Disponibile</p>
          </div>
          <div className="flex justify-end mt-[12px]">
            <button className="min-w-[269px] bg-black text-white h-[50px] font-[800] text-[15px]">
              AGGIUNGI AL CARRELLO
            </button>
          </div>
          <div className="mt-[44px]">
            <p>PUNTI DI FORZA</p>
            <div className="bg-lightGray pt-[40px] px-[25px]">
              {qualityList.map((qualityItem) => (
                <div
                  key={qualityItem}
                  className="flex flex-row items-center gap-[30px] pb-[25px]  border-b-[1px] border-gray "
                >
                  <Image
                    src="/icons/box.svg"
                    alt="box"
                    width={15.6}
                    height={17.6}
                  />
                  <p>{qualityItem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
