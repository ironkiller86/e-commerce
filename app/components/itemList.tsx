import { Product } from '@/types';
import Card from './card';



export default function ItemList({ products }: { products: Product[] }) {
  return (
    <section>
      <div className="flex flex-row flex-wrap items-center gap-[20px] mt-[34px] justify-center">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-[40px] flex  items-center justify-center">
        pagination
      </div>
    </section>
  );
}
