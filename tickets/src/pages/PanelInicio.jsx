import CardCaseItem from "../components/CardCaseItem";

const PanelInicio = ({ usuario }) => {
  return (
    <div className="Inicio panel">
      <div className="PanelBienvenida">
        <div>
          <h1>¡Bienvenido, {usuario}!</h1>
          <p>
            Aqui puedes Gestionar y dar seguimientos a los tickets de soporte
            tecnico.
          </p>
        </div>
        <div>
          <button type="button" className="CrearTicket">+   Crear Ticket</button>
        </div>
      </div>
      <div className="PanelCard">
        <CardCaseItem
          icon="document-text-outline"
          titulo="Abiertos"
          cant={5}
          style={{ backgroundColor: "#7ebdf1" }}
        />
        <CardCaseItem
          icon="checkmark-done-outline"
          titulo="Asignados"
          cant={10}
          style={{ backgroundColor: "#f3c666" }}
        />
        <CardCaseItem
          icon="time-outline"
          titulo="Resueltos"
          cant={3}
          style={{ backgroundColor: "#b1dfc6" }}
        />
        <CardCaseItem
          icon="time-outline"
          titulo="Rechazados"
          cant={3}
          style={{ backgroundColor: "#f1b6b6" }}
        />
      </div>
    </div>
  );
};

export default PanelInicio;
