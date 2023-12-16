import Card from './card';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ItemList() {
  return (
    <section>
      <div className="flex flex-row flex-wrap items-center gap-[20px] mt-[34px] justify-center">
        {arr.map((item) => (
          <Card key={item} />
        ))}
      </div>
      <div className="mt-[40px] flex  items-center justify-center">pagination</div>
    </section>
  );
}
