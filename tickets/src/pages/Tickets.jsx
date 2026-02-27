import {Link} from "react-router-dom";
import ListaTicket from "../components/ListaTicket";


const Tickets = () => {
    return (
        <div className="TicketsPage">


            <div className="TicketTitulo">
                <div>
                    <h1>Tickets</h1>
                    <p>En esta sección puedes gestionar todos los tickets de soporte técnico, asignar responsables, actualizar estados y prioridades,</p>
                    <p> y mantener un seguimiento detallado de cada caso.</p>

                </div>
                <div >
                    <Link to="/dashboard/crear-ticket">
                        <button className="CrearTicket">+   Crear Ticket</button>
                    </Link>
                </div>
            </div>
            <div className="BodyTicketPanel">
                <ListaTicket />
            </div>
        </div>
    )
}

export default Tickets;