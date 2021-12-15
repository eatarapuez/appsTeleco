import React, { useContext } from "react";

import { ProductCard } from "../../componets/cards";
import { ProductsContext } from "../../context/products-context";
import "../home/style.css";
import "./style.css"

export const Cart = () => {
  const { getProductsInCart } = useContext(ProductsContext);
  if(getProductsInCart().length === 0) return(<h1>Vaya! parece que no hay productos en el carrito</h1>)
  return (
    <div>
      <div className="products-container">
        {getProductsInCart().map(({ name, id, imageUrl, quantity }) => {
          return (
            <ProductCard
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
