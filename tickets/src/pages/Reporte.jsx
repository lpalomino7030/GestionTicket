import { useEffect, useState } from "react";
import axiosClient from "../api/client";

const Reporte = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReporte = async () => {
      try {
        const response = await axiosClient.get("/reportes/resumen");
        setDatos(response.data);
      } catch (error) {
        console.error("Error cargando reporte:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReporte();
  }, []);

  if (loading) return <p>Cargando reporte...</p>;

  return (
    <div className="PanelReporte">
      <h2>Reporte General de Tickets</h2>
      <p>Aqui encontraras el reporte de tickets por estado</p>
<br />
      <table className=" reporte-table">
        <thead className="head-table">
          <tr>
            <th>Estado</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody className="Body-table">
          {datos.map((item) => (
            <tr key={item.id_estado}>
              <td>{item.estado}</td>
              <td>{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Reporte;