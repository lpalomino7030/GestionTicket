import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "../assets/Login.css";
import rostro from "../assets/rostro.avif";


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="contenedorLogin">
      <div className="LoginPanel">
        <p className="LoginTittle">Sistema de Gestion de Tickets</p>
        <div className="LoginImage">
          <img src={rostro} alt="Rostro de usuario" />
          <p className="SaludoLogin">¡Bienvenido de Nuevo!</p>
          <p>Inicia sesión con tus credenciales</p>
        </div>
        <form onSubmit={handleSubmit} className="formLogin">
          <div className="inputGroup">
            {/* div icono */}
            <input
              type="email"
              name="email"
              placeholder="Correo"
              onChange={handleChange}
              required
            />
          </div>

<div className="inputGroup">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
</div>

          <button type="submit" className="BottonLogin">Inicia Sesion</button>
          <p className="relogin">¿Olvidaste Tu Contraseña?</p>
        </form>
        <p className="footerLogin">
          {" "}
          Sistema de Gestión de Tickets -  2026
        </p>
      </div>
    </div>
  );
};

export default Login;
