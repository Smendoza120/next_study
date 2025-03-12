import Image from "next/image";
import Styles from "./ProductView.module.sass";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className={Styles.ProductView}>
      <section className={Styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={Styles.ProductView__info}>
        <h1 className={Styles.ProductView__info_title}>{product.title}</h1>
        <p className={Styles.ProductView__info__category}>{product.tags}</p>
        <p className={Styles.ProductView__info__description}>
          {product.description}
        </p>
        <span className={Styles.ProductView__info__price}>{product.price}</span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  );
};
