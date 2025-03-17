import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetaData({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  return {
    title: product.title,
    descrption: product.descrption,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  console.log(product);

  // if (!id) {
  //   redirect("/store");
  // }

  return <ProductView product={product} />;
}
