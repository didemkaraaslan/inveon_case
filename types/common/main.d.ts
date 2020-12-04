type ColorsType = "red" | "green" | "blue";
type SizesType = "s" | "m" | "l" | "xl";
type CategoriesType = "female" | "male";

interface Product {
  productID: string;
  productName: string;
  productBrand: string;
  productDetail: string;
  productImage: string;
  productPrice: number;
  productColor: ColorsType;
  productSize: SizesType;
  productCategory: CategoriesType;
  inStock: boolean;
}

interface Filter {
  colors: Array<ColorsType>;
  sizes: Array<SizesType>;
  categories: Array<CategoriesType>;
}

interface State {
  products: Array<Product>;
  basket: Array<Product>;
  filters: Filter;
}
