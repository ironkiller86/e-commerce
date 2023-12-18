import React from 'react';

export default function DiscountBox({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  return (
    <div className="flex flex-row items-center gap-[9px] justify-center">
      <div>
        <p className="text-[16px] text-secondaryGray line-through">{`${price} €`}</p>
      </div>
      <div className="bg-green py-[4px] px-[11px] rounded-[5px] text-[14px] font-[800] text-white">{`-${discount}%`}</div>
    </div>
  );
}
