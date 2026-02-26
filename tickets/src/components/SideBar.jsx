import CardPerfil from "./CardPerfil";
import CardItem from "./CardItem";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import rostro from "../assets/rostro.avif";

const Sidebar = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };



  return (
    <div className="Sidebar">
      <CardPerfil username={user?.nombres} rol={user?.rol} img={rostro} />

      <div className="listItemBar">
        <CardItem icon="home-sharp" title="Dashboard" ruta="/dashboard"/>

        <CardItem icon="ticket-sharp" title="Tickets" ruta="/dashboard/tickets" />
        <CardItem icon="bar-chart-sharp" title="Reportes" ruta="/dashboard/reportes" />
        <CardItem icon="settings-sharp" title="Configuración" ruta="/dashboard/configuracion" />
      </div>
      <div>
        <div className="card-item" onClick={handleLogout}>
          <ion-icon name="log-out-sharp"></ion-icon>
          <h4>Salir</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
