"use client";
import Styles from "./ProductViewItemsOrder.module.sass";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubstract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className={Styles.ProductViewItemsOrder}>
      <div className={Styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubstract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={Styles.ProductViewItemsOrder__form}
      >
        <button className={Styles.ProductViewItemsOrder__submit} type="submit">
          <FaCartShopping />
          <span>add to cart</span>
        </button>
      </form>
    </div>
  );
};
