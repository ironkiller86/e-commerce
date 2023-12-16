'use client';

import Select from './select';

export default function Filter() {
  return (
    <section className="w-full mt-[60px]  border-b-[1px] border-gray">
      <div>
        <p className="text-[13px] text-[#4A4A4A]">Home / Donna</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <div className="flex flex-row gap-[25px]  items-center">
          <Select />
          <input
            type="number"
            className="w-[184px] border-[1px] border-[#cccccc]  rounded-[5px] h-10 px-[10px]"
          />
          <input
            type="number"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="#E42313"
                stroke="#E42313"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label htmlFor="check">Solo disponibili</label>
        </div>
      </div>
    </section>
  );
}
