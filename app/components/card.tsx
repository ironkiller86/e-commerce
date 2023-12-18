import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import DiscountBox from './discountBox';
import { useMemo } from 'react';

function calculateDiscount(originalPrice: number, discountPercentage: number) {
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;
  return Math.floor(discountedPrice);
}

const isNew = true;
function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Card({ product }: { product: Product }) {
  const discount = useMemo(() => getRandomInteger(5, 40), []);
  return (
    <article className="w-[289px] h-[420px]  bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)]  hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col relative">
          <Image src={product?.images[0]} alt="item" width={289} height={220} />
          <div className=" text-center p-4 flex flex-col justify-center gap-[5px]">
            <p className="text-[18px] font-[700]">{product?.title}</p>
            <p className="text-[20px] font-[600] text-[#E32119]">{`${calculateDiscount(
              product?.price,
              discount,
            ).toString()} €`}</p>
            <DiscountBox discount={discount} price={product.price} />
          </div>
          {isNew && (
            <div className="absolute top-[267px] left-1 text-[12px] font-[600] bg-white px-[10px]">
              Novita
            </div>
          )}
          <div className="absolute top-[5px] right-[5px] z-10">
            <button>
              <Image
                src="/icons/heart-round.svg"
                alt="heart-round icon"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
