import Image from "next/image";
import Styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { products } = await response.json();

  return (
    <section className={Styles.MainProducts}>
      <h3>✨ New products relased!</h3>

      <div className={Styles.MainProducts__grid}>
        {products.map((product: any) => {
          const imageSrc = product.images[0].src;
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
