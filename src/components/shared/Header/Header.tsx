import Style from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className={Style.Header}>
      <ul className={Style.Header__list}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>

        <Link href={"/store"}>
          <li>Store</li>
        </Link>
      </ul>
    </nav>
  );
};
