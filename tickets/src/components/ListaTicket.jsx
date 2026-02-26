import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../api/client";

const ListaTicket = () => {
  const [tickets, setTickets] = useState([]);

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

  console.log(tickets);

  return (
    <div className="ListaTicket">
      <div className="header-lista">
        <h1>Lista de Tickets Recientes</h1>
        <div className="ver-todos">
          <p>Ver Todos</p> <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Estado</th>
              <th>Prioridad</th>
              <th>Fecha de Creación</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id_ticket}>
                <td className="codigotk">{ticket.codigo}</td>
                <td>{ticket.titulo}</td>
                <td style={cardEstado(ticket.estado)}>{ticket.estado}</td>
                <td>
                  <div className="type" style={cardPrioridad(ticket.prioridad)}>
                    {ticket.prioridad}
                  </div>
                </td>
                <td>{new Date(ticket.fecha_creacion).toLocaleDateString()}</td>
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
      return { color: "#ccc"};
  }
};

export default ListaTicket;
