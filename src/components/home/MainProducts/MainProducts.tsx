import Image from "next/image";
import Styles from "./MainProducts.module.sass";
import { getMainProducts } from "app/services/shopify/products";

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className={Styles.MainProducts}>
      <h3>✨ New products relased!</h3>

      <div className={Styles.MainProducts__grid}>
        {products.map((product: any) => {
          const imageSrc = product.image;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
