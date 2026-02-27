import "../assets/CrearTk.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../api/client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CrearTicket = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [crearTicket, setTicket] = useState({
    titulo: "",
    descripcion: "",
    userId: user ? user.id_usuario : null,
    prioridad: "",
    id_usuario_asignado: "",
    // categoria: ''
  });

  const [usuarioAsignar, setusuarioAsignar] = useState([]);

  // const CreateTicket = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const response = await axiosClient.post('/tickets', crearTicket);

  //     }
  //     catch (error) {
  //         console.error('Error al crear el ticket:', error);
  //     }
  //     finally {
  //         navigate("/dashboard");
  //     }
  // };

  useEffect(() => {
    if (id) {
      const getTicketById = async () => {
        try {
          const response = await axiosClient.get(`/tickets/${id}`);
          const Tecnicos = await axiosClient.get("/users/tecnicos");

          const ticketData = response.data;
          const tecnicoData = Tecnicos.data;

          setusuarioAsignar(tecnicoData);

          setTicket({
            titulo: ticketData.titulo,
            descripcion: ticketData.descripcion,
            prioridad: ticketData.prioridad,
            userId: ticketData.id_usuario_creador,
            id_usuario_asignado: ticketData.id_usuario_asignado || "",
          });
        } catch (error) {
          console.error("Error al obtener el ticket:", error);
        }
      };

      getTicketById();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        console.log(crearTicket);
        await axiosClient.put(`/tickets/update/${id}`, crearTicket);
      } else {
        await axiosClient.post("/tickets", crearTicket);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error al guardar el ticket:", error);
    }
  };

  return (
    <div className="CrearTkPanel">
      <div className="headerTkPanel">
        <h1>
          {id
            ? "Editar Ticket de Soporte Técnico"
            : "Crear Nuevo Ticket de Soporte Técnico"}
        </h1>
        <div className="breadcrumb">
          <ion-icon name="chevron-forward-outline"></ion-icon>
          <p>Inicio</p>
          <ion-icon name="chevron-forward-outline"></ion-icon>
          <p> {id ? "Editar Ticket" : "Crear Ticket"}</p>
        </div>
      </div>
      <form className="FormCreateTk" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          {/* <input placeholder='Ej. Problema de Conexion' type="text" id="titulo" name="titulo" onChange={(e) => { setTicket({ ...crearTicket, titulo: e.target.value }) }} required /> */}
          <input
            placeholder="Ej. Problema de Conexion"
            type="text"
            id="titulo"
            name="titulo"
            value={crearTicket.titulo}
            onChange={(e) =>
              setTicket({ ...crearTicket, titulo: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            value={crearTicket.descripcion}
            placeholder="Describe el problema con el mayor detalle posible"
            id="descripcion"
            name="descripcion"
            onChange={(e) => {
              setTicket({ ...crearTicket, descripcion: e.target.value });
            }}
            required
          ></textarea>
        </div>
        <div className="Precision">
          <div className="form-group">
            <label htmlFor="prioridad">Prioridad</label>
            <select
              id="prioridad"
              name="prioridad"
              value={crearTicket.prioridad}
              onChange={(e) =>
                setTicket({ ...crearTicket, prioridad: e.target.value })
              }
              required
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
              <option value="Critica">Critica</option>
            </select>
          </div>
          {!id ? (
            <div className="form-group">
              <label htmlFor="categoria">Categoría</label>
              <select id="categoria" name="categoria" required>
                <option value="">Selecciona una categoría</option>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="red">Red</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="Tecnico">Asignar Ticket</label>
              <select
                value={crearTicket.id_usuario_asignado}
                id="Tecnico"
                name="Tecnico"
                onChange={(e) =>
                  setTicket({
                    ...crearTicket,
                    id_usuario_asignado: e.target.value,
                  })
                }
                required
              >
                <option value="">Selecciona Técnico</option>

                {usuarioAsignar.map((tecnico) => (
                  <option key={tecnico.id_usuario} value={tecnico.id_usuario}>
                    {tecnico.nombres}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="addFileCard">
          <div className="form-group">
            <label htmlFor="Estados">Asignar Estado</label>
            <select
              value={crearTicket.estado}
              
              id="Estados"
              name="Estados"
              onChange={(e) =>
                setTicket({ ...crearTicket, estado: e.target.value })
              }
              required
            >
              <option value="">Selecciona Estado</option>
              
            </select>
          </div>

          <div className="form-group addfile">
            <label htmlFor="adjunto">Adjuntar Archivo...</label>
            {/* <input type="file" id="adjunto" name="adjunto" /> */}
            <p>
              Arrastra y suelta un archivo aquí o haz clic para seleccionar uno.
              (Opcional)
            </p>
          </div>
        </div>
        <div className="ButtonPanel">
          <Link to="/dashboard">
            <button type="button" className="cancel-button">
              Cancelar
            </button>
          </Link>

          <button type="submit" className="submit-button">
            {id ? "Actualizar Ticket" : "Crear Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearTicket;
