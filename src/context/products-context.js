import React from 'react';
export const ProductsContext = React.createContext({
  products:[],
  setProductQuantity: (id, value) => {},
  getProductsInCart:()=>{}
})