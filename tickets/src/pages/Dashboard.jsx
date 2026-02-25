import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "../assets/Inicio.css";
import Navegacion from "../components/navegacion";
import Panel from "../components/Panel";
import Sidebar from "../components/SideBar";
import PanelInicio from "./PanelInicio";

const Dashboard = () =>{
    return(
<section className="layout">
  <div className="header"> <Navegacion/></div>
  <div className="leftSide"><Sidebar/></div>
  <div className="body">
    {/* <Panel/> */}
        <Routes>
        <Route path="/" element={<PanelInicio usuario="Luis Palomino" />} />
        {/* <Route path="/dashboard/" element={<PanelInicio />} /> */}
      </Routes>
  </div>

</section>
    )
}

export default Dashboard;