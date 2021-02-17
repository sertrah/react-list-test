interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  brand: string;
  stock: number;
  photo: string;
  categories: string[];
}

enum listViewStyleEnum {
  list = "list",
  square = "square",
}
export { listViewStyleEnum };
export type { IProduct };
