import React, { useContext } from "react";

import { ProductCard } from "../../componets/cards";
import { ProductsContext } from "../../context/products-context";
import "./style.css";

export const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div className="products-container">
        {products.map(({ name, id, imageUrl, quantity }) => {
          return (
            <ProductCard
              key={id}
              name={name}
              id={id}
              imageUrl={imageUrl}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
};
