import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "../assets/Inicio.css";
import Navegacion from "../components/navegacion";
import Panel from "../components/Panel";
import Sidebar from "../components/SideBar";
import PanelInicio from "./PanelInicio";
import CrearTicket from "./CrearTitcket";
import Tickets from "./Tickets";
import Configuracion from "./Configuracion";
import Settings from "./Settings";
import Reporte from "./Reporte";

const Dashboard = () =>{
    return(
<section className="layout">
  <div className="header"> <Navegacion/></div>
  <div className="leftSide"><Sidebar/></div>
  <div className="body">
    {/* <Panel/> */}
        <Routes>
        <Route path="/" element={<PanelInicio />} />
        <Route path="/crear-ticket" element={<CrearTicket />} />
        <Route path="/tickets/" element={<Tickets />} />
        <Route path="/tickets/:id" element={<CrearTicket />} />


<Route path="/configuracion" element={<Configuracion />} />
      <Route path="/reportes" element={<Reporte />} />
      
      </Routes>
  </div>

</section>
    )
}

export default Dashboard;