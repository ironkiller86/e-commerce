import DiscountBox from '@/app/components/discountBox';
import { Product } from '@/types';
import Image from 'next/image';

const qualityList = [
  'Sit dolor amet neque',
  'Lorem ipsum',
  'consectetur adipiscing elit',
];

export default function ProductInfo({ product }: { product: Product }) {
  const { title, category, price } = product;
  return (
    <div className="flex-1 gap-[12px] flex flex-col">
      <p className="font-[400] text-[13px] text-secondaryGray">
        Home / category / product-name
      </p>
      <p className="font-[700] text-[18px]">{category?.name || ''}</p>
      <p className="font-[900] text-[38px]">{title || ''}</p>
      <p className="font-[600] text-[14px]">Codice: 40.30.0000.00</p>
      <p className="font-[600] text-[14px]">Garanzia: 24 mesi</p>
      <div className="flex flex-row items-center justify-between py-[20px]">
        <p className="font-[600] text-[20px] text-red">{`${price} €`}</p>
        <DiscountBox discount={20} price={product.price} />
      </div>
      <div className=" flex flex-row items-center justify-start gap-[20px] border-y-[1px] border-thirdGray py-[11px]">
        <Image src="/icons/box.svg" alt="box" width={15.6} height={17.6} />
        <p className="text-green font-[700]">Disponibile</p>
      </div>
      <div className="flex justify-end ">
        <button className="min-w-[269px] bg-black text-white h-[50px] font-[800] text-[15px]">
          AGGIUNGI AL CARRELLO
        </button>
      </div>
      <div className="mt-[20px]">
        <p className="font-[600] text-[14px]">PUNTI DI FORZA</p>
        <ul className="bg-lightGray py-[40px] px-[25px]">
          {qualityList.map((qualityItem) => (
            <>
              <li
                key={qualityItem}
                className="flex flex-row items-center gap-[30px]  "
              >
                <Image
                  src="/icons/feature.svg"
                  alt="box"
                  width={24}
                  height={24}
                />
                <p className="font-[700] text-[18px]">{qualityItem}</p>
              </li>
              <div className="border-b-[1px] border-thirdGray my-[25px] last:border-b-0  last:my-0" />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
