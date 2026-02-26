import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "../assets/Inicio.css";
import Navegacion from "../components/navegacion";
import Panel from "../components/Panel";
import Sidebar from "../components/SideBar";
import PanelInicio from "./PanelInicio";
import CrearTicket from "./CrearTitcket";
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
        {/* <Route path="/dashboard/" element={<PanelInicio />} /> */}
      </Routes>
  </div>

</section>
    )
}

export default Dashboard;