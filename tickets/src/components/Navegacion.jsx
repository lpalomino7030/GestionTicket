import rostro from "../assets/rostro.avif";
import "../assets/Inicio.css";
const Navegacion = () =>{
    return(
        <div className="Navs">
        <div className="TittleNav"><p>Sistema de Gestion De Tickets</p></div>
        <div className="BuscarNav">
            {/* #icono */}
            <input placeholder="Buscar..." type="text" name="Buscar" id="BuscarItem" />
        </div>
        <div className="PerfilNav">
             {/* #icono */}
              <ion-icon name="notifications-sharp"></ion-icon>
              <div>
                <img className="NavImage" src={rostro} alt="" />
              </div>
        </div>
        </div>
    )
}   

export default Navegacion;