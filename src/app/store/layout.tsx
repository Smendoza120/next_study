import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";
import Styles from "./StoreLayout.module.sass";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollections();

  return (
    <main className={Styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={Styles.StoreLayout__list}>
          {collections.map((collection: any) => (
            <Link
              className={Styles.StoreLayout__chip}
              href={`/store/${collection.handle}`}
              key={collection.id}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
