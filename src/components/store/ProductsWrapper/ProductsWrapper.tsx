import { ProductCard } from "../ProductCard";
import Styles from "./ProductsWrapper.module.sass";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={Styles.ProductsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
