import React from 'react';

const data = {
  advantages: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ],
  details: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Sed do eiusmod tempor incididunt',
    'Labore et dolore magna aliqua',
    'Quam lacus suspendisse faucibus interdum posuere.',
  ],
};

export default function ProductDescription({
  description,
}: {
  description: string;
}) {
  return (
    <section className="my-[60px] px-[208px]">
      <p className="font-[900] text-[36px]">Descrizione</p>
      <div className="mt-[40px] leading-7">
        <p>{description}</p>
        <p className='max-w-[90%]'>
          Adipiscing elit pellentesque habitant morbi tristique senectus et.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis
          auctor.Risus commodo viverra maecenas accumsan lacus. Pellentesque
          elit eget gravida cum sociis. Egestas pretium aenean pharetra magna
          ac.
        </p>
      </div>
      <div className="mt-[40px] leading-7">
        <p className="font-[700] text-[18px]">Vantaggi</p>
        <ul className="flex flex-col">
          {data.advantages.map((pro, index: number) => (
            <li className="list-disc list-inside" key={index}>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[40px] leading-7">
        <p className="font-[700] text-[18px]">Dettagli prodotto</p>
        <ul className="flex flex-col">
          {data.details.map((pro, index) => (
            <li className="list-disc list-inside" key={index}>
              {pro}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
