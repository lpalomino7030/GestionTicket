import CardPerfil from "./CardPerfil";
import CardItem from "./CardItem";

import rostro from "../assets/rostro.avif";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <CardPerfil username="Luis Palomino" rol="Administrador" img={rostro} />

      <div className="listItemBar">
        <CardItem icon="home-sharp" title="Dashboard" />

        <CardItem icon="ticket-sharp" title="Tickets" />
        <CardItem icon="bar-chart-sharp" title="Reportes" />
        <CardItem icon="settings-sharp" title="Configuración" />
      </div>
      <div>
        <CardItem icon="log-out-sharp" title="salir" />
      </div>
    </div>
  );
};

export default Sidebar;
