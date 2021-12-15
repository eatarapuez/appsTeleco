import React, {useContext} from "react";
import { ProductsContext } from "../../context/products-context";
import "./style.css";

export const ProductCard = ({
  name = "Pizza",
  quantity = 0,
  imageUrl = "",
  id =0
}) => {
  const {setProductQuantity} = useContext(ProductsContext)
  const onEditQuantityPress = (type='more') => {
    setProductQuantity(
      id,
      type === 'more' ? quantity + 1 : quantity-1 // Esta linea valida si el tipo es mas y si si, envía a la funcion la cantidad mas 1 de lo contrario la cantidad menos 1
    )
  }
  return (
    <div className="container">
      <picture>
        <img src={imageUrl} alt={"Producto " + name} />
      </picture>
      <p className="product-name">{name}</p>
      <div className="quantity-controller">
        <button onClick={() => onEditQuantityPress('less')} >
          <p>-</p>
        </button>
        <div>
          <p>{quantity}</p>
        </div>
        <button onClick={() => onEditQuantityPress('more')} >
          <p>+</p>
        </button>
      </div>
    </div>
  );
};
