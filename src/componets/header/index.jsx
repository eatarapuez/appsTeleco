import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication-context";
import "./style.css";

export const Header = () => {
  const { push } = useHistory();
  const {
    user: { isLogged, email },
  } = useContext(AuthenticationContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link  to="/cart">Carrito</Link>
          </li>
          <li>
            <Link  to="/position">Encuentranos</Link>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li> */}
        </ul>
      </nav>
      {!isLogged ? (
        <button className="auth-button" onClick={() => push("/login")}>
          <h2>Iniciar sesión</h2>
        </button>
      ) : (
        <p>Bienvenido {email}</p>
      )}
    </header>
  );
};
