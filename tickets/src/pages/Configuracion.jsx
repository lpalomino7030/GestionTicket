import './config.css';
import rostro from "../assets/rostro.avif";


const Configuracion = () => {
  return (
    <div className="configuracion">
      <div className='titleConfig'>
        <h3>Configuracion y Perfil</h3>
        <p>
          Administra tu identidad digital y preferencias del ecosistema
          'nombreEmpresa'
        </p>
      </div>
      {/* -- */}

      <div className='BodyConfig'>
        <div className='PerfilPanel'>
          <div className='PerfilDescription'>
             <img className='configImgPerfil' src={rostro} alt="rostro" /> 
            <p className='fontBlack'>NombreDelUsuario</p>
            <p className='fontOrange'>cargoDelUsuario</p>
          </div>
          <div className='PanelPerfilInfo'>
            <InfoUsuario
              txtTitle={"CORREO ELECTRONICO"}
              txtInfo={"correo@ejemplo.com"}
            />
            <InfoUsuario txtTitle={"CONTRASEÑA"} txtInfo={"*********"} />
            <InfoUsuario txtTitle={"NUMERO DNI"} txtInfo={"70300000"} />
          </div>
          <div className='PanelPerfilBtn'>
            <button className='btn editarPefil fontOrange'>Editar Perfil</button>
            <button className='btn seguridad fontBlack'>Seguridad</button>
          </div>
        </div>
        <div className='PreferPanel'>
          <div>
            <h3>Preferencias de interfaz</h3>
            <div className='ItemPreference'>
              <div>ICONO</div>
              <div>
                <p>Modo Oscuro</p>
                <p>Cambia entre tema oscuro y claro.</p>
              </div>
              <div>
                <input type="checkbox" name="" id="ModoTema" />
              </div>
            </div>
            <div className='ItemPreference'>
              <div>ICONO</div>
              <div>
                <p>Idioma del sistema</p>
                <p>Selecciona el lenguaje de la plataforma.</p>
              </div>
              <div>
                <select name="idioma" id="idioma">
                  <option value="ES">Español (ES)</option>
                </select>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className='botoneraConfig'>
        <div className='btnCancelar'>Cancelar</div>
        <div className=' btnGuardar'>Guardar Cambios</div>
      </div>

      {/* -- */}
      <div className='footerConfig'>
        <div className='EstadoCuenta'>
          <h4 className='fontBlack'>Estado de Cuenta</h4>
          <p className='fontGrayInfo' >tu cuenta esta verificada y activa.</p>
        </div>
        <div className='DangerZone'>
          <div>
            <h4>Zona de Riesgo</h4>
            <p className='fontGrayInfo'>una vez desactivada la cuenta no hay marcha atras.</p>
          </div>
          <div className='borderDanger'>
            <p>Desactivar cuenta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoUsuario = ({ txtTitle, txtInfo }) => {
  return (
    <div className="infoUsuario">
      <p className='fontGrayInfo'>{txtTitle}</p>
      <p className='fontBlackInfo'>{txtInfo}</p>
    </div>
  );
};

export default Configuracion;
