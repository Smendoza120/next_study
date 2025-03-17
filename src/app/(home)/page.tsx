import { Metadata } from "next";
import { MainProducts } from "../../components/home/MainProducts";

export const metaData: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world, an ecomerce from other century",
  keywords: ["ecomerce", "future", "world", "technology"]
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
