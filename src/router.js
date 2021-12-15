import React, { useState } from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./componets/header";
import { ProductsContext } from "./context/products-context";
import {
  AuthenticationContext,
  userShape,
} from "./context/authentication-context";
import { Cart } from "./routes/cart";
import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { Position } from "./routes/position";

export const RouterHandler = () => {
  const queryClient = new QueryClient();
  const [products, setProducts] = useState({
    products: [
      { id: 0, name: "Pizza", quantity: 0, imageUrl: "https://img.freepik.com/foto-gratis/pizza-pizza-rellena-tomates-salami-aceitunas_140725-1200.jpg?size=626&ext=jpg" },
      { id: 1, name: "Otra pizza", quantity: 0, imageUrl: "https://image.freepik.com/foto-gratis/pizza-relleno-carne-rodajas-tomate_114579-3532.jpg" },
      { id: 2, name: "Salchipapas", quantity: 0, imageUrl: "https://static.wixstatic.com/media/191129_27bf5e5416df4c59bd293444a3039437~mv2.png/v1/fit/w_500,h_500,q_90/file.png" },
      { id: 3, name: "Hamburguesa", quantity: 0, imageUrl: "https://imagenes.lainformacion.com/files/article_amp/uploads/imagenes/2020/05/06/5eb27630ae38c.png" },
      { id: 4, name: "Lasagna", quantity: 0, imageUrl: "https://tvazteca.brightspotcdn.com/dims4/default/37410aa/2147483647/strip/true/crop/1280x789+0+85/resize/1200x740!/format/jpg/quality/90/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2Ffc%2F71%2F4332725717e4989eecdda3ec8864%2Flasagna-italiana-mexicana-cocineros-mexicanos-2096849.jpg" },
    ],
    changed: false,
  });
  const [user, setUser] = useState(userShape);
  const setProductQuantity = (id, quantity) => {
    if (quantity < 0) return null;
    const productsCopy = products.products;
    const indexInProducts = productsCopy.findIndex(
      (product) => product.id === id
    );
    const product = productsCopy[indexInProducts];
    product.quantity = quantity;
    productsCopy[indexInProducts] = product;
    setProducts((prevState) => ({
      changed: !prevState.changed,
      products: productsCopy,
    }));
  };
  const getProductsInCart = () => {
    return products.products.filter(({ quantity }) => quantity > 0);
  };
  const setAuthentication = (user = userShape) =>
    setUser((prevState) => ({ ...prevState, ...user }));
  const logOut = () => setAuthentication(userShape);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationContext.Provider
        value={{ setAuthentication, logOut, user }}
      >
        <ProductsContext.Provider
          value={{
            products: products.products,
            setProductQuantity,
            getProductsInCart,
          }}
        >
          <App />
        </ProductsContext.Provider>
      </AuthenticationContext.Provider>
    </QueryClientProvider>
  );
};

const App = () => {
  return (
    <Router>
      <div>
      <iframe width="100%" height="125" src="https://www.youtube.com/embed/v2H4l9RpkwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Header />
        <Switch>
        <Route exact path="/position">
            <Position />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};