import React from 'react';
import Image from 'next/image';
import '../pages.css';

export default function ProductImages({ images }: { images: string[] }) {
  return (
    <section className="flex flex-row flex-1 flex-wrap gap-[25px]">
      <picture className="imgContainer">
        <Image src={images[0]} alt="images" fill className="imagePreview" />
      </picture>
      <div className="flex flex-row justify-between items-center w-full">
        <picture className="smallImgContainer">
          <Image src={images[1]} alt="images" fill className="imagePreview" />
        </picture>
        <picture className="smallImgContainer">
          <Image src={images[2]} alt="images" fill className="imagePreview" />
        </picture>
      </div>
    </section>
  );
}
