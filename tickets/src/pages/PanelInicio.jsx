import CardCaseItem from "../components/CardCaseItem";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../api/client";

import ListaTicket from "../components/ListaTicket";
import HistoricoActividad from "../components/HistoricoActividad";

const PanelInicio =  ( ) => {

  const [cantEstados, setCantEstados] = useState([]);


  useEffect(() => {

    const fetchCantEstados = async () => {
      try {
        const response = await axiosClient.get("/tickets/contarPorEstado");
        setCantEstados(response.data);
      }
      catch (error) {
        console.error("Error al obtener la cantidad de estados:", error);
      }
    };

    fetchCantEstados();
  }, []);

console.log(cantEstados);


const { user } = useContext(AuthContext);

  if (!user) return <p>Cargando...</p>;

  return (
    <div className="Inicio panel">
      <div className="PanelBienvenida">
        <div>
          <h1>¡Bienvenido, {user.nombres}!</h1>
          <p>
            Aqui puedes Gestionar y dar seguimientos a los tickets de soporte
            tecnico.
          </p>
        </div>
        <div>
          <Link to="/dashboard/crear-ticket">
            <button className="CrearTicket">+   Crear Ticket</button>
          </Link>
        </div>
      </div>
      <div className="PanelCard">
        <CardCaseItem
          icon="document-text-outline"
          titulo="Abiertos"
          cant={cantEstados[0]?.cantidad || 0}
          style={{ backgroundColor: "#7ebdf1" }}
        />
        <CardCaseItem
          icon="checkmark-done-outline"
          titulo="Asignados"
          cant={cantEstados[1]?.cantidad || 0}
          style={{ backgroundColor: "#f3c666" }}
        />
                <CardCaseItem
          icon="checkmark-done-outline"
          titulo="En Proceso"
          cant={cantEstados[2]?.cantidad || 0}
          style={{ backgroundColor: "#e7e4de" }}
        />
        <CardCaseItem
          icon="time-outline"
          titulo="Resueltos"
          cant={cantEstados[3]?.cantidad || 0}
          style={{ backgroundColor: "#b1dfc6" }}
        />
        <CardCaseItem
          icon="time-outline"
          titulo="Rechazados"
          cant={cantEstados[5]?.cantidad || 0}
          style={{ backgroundColor: "#f1b6b6" }}
        />
      </div>
      <div className="BodyPanel">
        <ListaTicket/>
        <HistoricoActividad/>
      </div>
    </div>
  );
};

export default PanelInicio;
