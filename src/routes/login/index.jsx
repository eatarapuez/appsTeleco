import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { AuthenticationContext } from "../../context/authentication-context";
import { FormField } from "../../componets/form-field";
import "./style.css";
import { useHistory } from "react-router-dom";


export const Login = () => {
  const { setAuthentication, user } = useContext(AuthenticationContext);
  const {push  } = useHistory()
  const formSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required('Campo requerido'),
    password: Yup.string().required("Campo requerido"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validationSchema: formSchema,
    onSubmit: (values) => {
      setAuthentication({...user, isLogged:true, email: values.email})
      push('/')
    },
  });
  const onChange = (e) => {
    formik.handleChange(e);
  };
  console.log('errors', formik.errors);
  return (
    <div className="container-login">
      <div className="container-form">
        <form onSubmit={formik.handleSubmit} className="form-container" >
          <FormField
            name="email"
            errors={formik.errors.email}
            onChange={onChange}
            value={formik.values.email}
            label="correo"
          />
          <FormField
            name="password"
            errors={formik.errors.password}
            onChange={onChange}
            value={formik.values.password}
            label="contraseña"
          />
          <button className="login-button" type="submit" >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
