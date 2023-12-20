'use client';
import { Filters } from '@/types';
import Select from './select';
import Image from 'next/image';
import { SingleValue } from 'react-select';

export default function Filter({
  handlePrice,
  filtersData,
  handleSelect,
}: {
  handlePrice: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (
    selectedData: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => void;
  filtersData: Filters;
}) {
  return (
    <section className="w-full mt-[60px]  border-b-[1px] border-gray h-[110px]">
      <div>
        <p className="text-[13px] text-[#4A4A4A]">Home / Donna</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row gap-[25px]  items-center">
          <Select onChange={handleSelect} />
          <input
            value={filtersData.minPrice}
            name="minPrice"
            onChange={handlePrice}
            placeholder="Prezzo Minimo"
            className="w-[184px] border-[1px] border-[#cccccc]  rounded-[5px] h-10 px-[10px]"
          />
          <input
            value={filtersData.maxPrice}
            onChange={handlePrice}
            name="maxPrice"
            placeholder="Prezzo Massimo"
            className="w-[184px] border-[1px] border-[#cccccc]  rounded-[5px] h-10 px-[10px]"
          />
        </div>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              id="check"
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <Image
                src="/icons/check.svg"
                alt="check"
                width={20}
                height={20}
              />
            </span>
          </label>
          <label htmlFor="check">Solo disponibili</label>
        </div>
      </div>
    </section>
  );
}
