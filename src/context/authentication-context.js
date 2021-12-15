import React from "react";
export const userShape = {
  name: "",
  photo: "",
  isLogged: false,
  token: "",
  email: "",
};
export const AuthenticationContext = React.createContext({
  user: userShape,
  setAuthentication: (user = userShape) => {},
  logOut: () => {},
});
