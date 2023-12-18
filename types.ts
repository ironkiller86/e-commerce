export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Filters = {
  category: string;
  minPrice: string;
  maxPrice: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};
