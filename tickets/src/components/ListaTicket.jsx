import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../api/client";
import { Link, useNavigate } from "react-router-dom";

const ListaTicket = () => {
  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axiosClient.get("/tickets/getTicket");
        setTickets(response.data);
      } catch (error) {
        console.error("Error al obtener los tickets:", error);
      }
    };

    fetchTickets();
  }, []);


  return (
    <div className="ListaTicket">
      <div className="header-lista">
        <h1>Lista de Tickets Recientes</h1>
        <Link to="/dashboard/tickets">
          <div className="ver-todos">
            <p>Ver Todos</p> <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </Link>

      </div>
      <div>
        <table>
          <thead className="head-table">
            <tr>
              <th>ID Ticket</th>
              <th>Título</th>
              <th>Estado</th>
              <th>Prioridad</th>
              <th>Fecha de Creación</th>
            </tr>
          </thead>
          <tbody className="Body-table">
            {tickets.map((ticket) => (
              <tr key={ticket.id_ticket}>
                <td className="codigotk" onClick={() => navigate(`/dashboard/tickets/${ticket.id_ticket}`)}>{ticket.codigo}</td>
                <td className="truncate">{ticket.titulo}</td>
                <td style={cardEstado(ticket.estado)}>{ticket.estado}</td>
                <td>
                  <div className="type" style={cardPrioridad(ticket.prioridad)}>
                    {ticket.prioridad}
                  </div>
                </td>
                <td className="fechaTk">{new Date(ticket.fecha_creacion).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cardPrioridad = (prioridad) => {
  switch (prioridad) {
    case "Baja":
      return { backgroundColor: "#7ebdf1", color: "#fff" };
    case "Media":
      return { backgroundColor: "#f0c040", color: "#fff" };
    case "Alta":
      return { backgroundColor: "#e55c5c", color: "#fff" };
    case "Critica":
      return { backgroundColor: "#e55c5c", color: "#fff" };
    default:
      return { backgroundColor: "#ccc", color: "#000" };
  }
};

const cardEstado = (estado) => {
  switch (estado) {
    case "Abierto":
      return { color: "#7ebdf1" };
    case "Asignado":
      return { color: "#f0c040" };
    case "Resuelto":
      return { color: "#b1dfc6" };
    case "Rechazado":
      return { color: "#f1b6b6" };
    default:
      return { color: "#ccc" };
  }
};

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export default ListaTicket;
