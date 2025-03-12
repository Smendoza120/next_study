import Link from "next/link";
import Styles from "./ProductCard.module.sass";
import Image from "next/image";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      className={Styles.ProductCard__link}
      href={`/articulo/${product.handle}?id=${product.id}`}
    >
      <article className={Styles.ProductCard__ProductCard}>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />

        <div className={Styles.ProductCard__info}>
          <h3>{product.title}</h3>
        </div>

        <span className={Styles.ProductCard__priceTag}>{product.price}</span>
      </article>
    </Link>
  );
};
