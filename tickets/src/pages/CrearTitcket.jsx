import '../assets/CrearTk.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../api/client';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const CrearTicket = () => {

    const { user } = useContext(AuthContext);

    const [crearTicket, setTicket] = useState({
        titulo: '',
        descripcion: '',
        userId: user ? user.id_usuario : null,
        prioridad: ''
        // categoria: ''
    });

    const CreateTicket = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/tickets', crearTicket);
            // console.log('Ticket creado:', response.data);
        }
        catch (error) {
            console.error('Error al crear el ticket:', error);
        }
    };

    const handleSubmit = (e) => {
        CreateTicket(e);
    };

    return (
        <div className="CrearTkPanel">
            <div className='headerTkPanel'>
                <h1>Crear Nuevo Ticket de Soporte Tecnico</h1>
                <div className="breadcrumb">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <p>Inicio</p>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <p>Crear Ticket</p>
                </div>

            </div>
            <form className='FormCreateTk' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input placeholder='Ej. Problema de Conexion' type="text" id="titulo" name="titulo" onChange={(e)=>{setTicket({...crearTicket, titulo: e.target.value})}} required />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea placeholder='Describe el problema con el mayor detalle posible' id="descripcion" name="descripcion" onChange={(e)=>{setTicket({...crearTicket, descripcion: e.target.value})}} required></textarea>
                </div>
                <div className='Precision'>
                    <div className="form-group">
                        <label htmlFor="prioridad">Prioridad</label>
                        <select id="prioridad" name="prioridad" onChange={(e)=>{setTicket({...crearTicket, prioridad: e.target.value})}} required>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                            <option value="critica">Critica</option>

                        </select>
                    </div>

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
                </div>
                <div className='addFileCard'>
                    <div className="form-group addfile">
                        <label htmlFor="adjunto" >Adjuntar Archivo...</label>
                        {/* <input type="file" id="adjunto" name="adjunto" /> */}
                        <p>
                            Arrastra y suelta un archivo aquí o haz clic para seleccionar uno. (Opcional)
                        </p>
                    </div>
                </div>
                <div className="ButtonPanel">
                    <Link to="/dashboard">
                        <button type="button" className="cancel-button">Cancelar</button>
                    </Link>

                    <button type="submit" className="submit-button">Crear Ticket</button>

                </div>
            </form>
        </div>
    );
}

export default CrearTicket;