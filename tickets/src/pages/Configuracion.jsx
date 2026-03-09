const Configuracion = () => {
  return (
    <>
      <div>
        <p>Configuracion y Perfil</p>
        <p>
          Administra tu identidad digital y preferencias del ecosistema
          'nombreEmpresa'
        </p>
      </div>
      {/* -- */}

      <div>
        <div>
          <div>
            {/* <img src="" alt="" /> */}
            <p>NombreDelUsuario</p>
            <p>cargoDelUsuario</p>
          </div>
          <div>
            <InfoUsuario
              txtTitle={"Correo Electronico"}
              txtInfo={"correo@ejemplo.com"}
            />
            <InfoUsuario txtTitle={"Contraseña"} txtInfo={"*********"} />
            <InfoUsuario txtTitle={"Numero DNI"} txtInfo={"70300000"} />
          </div>
          <div>
            <button>Editar Perfil</button>
            <button>Seguridad</button>
          </div>
        </div>
        <div>
          <div>
            <p>Preferencias de interfaz</p>
            <div>
              <div>ICONO</div>
              <div>
                <p>Modo Oscuro</p>
                <p>Cambia entre tema oscuro y claro.</p>
              </div>
              <div>
                <input type="checkbox" name="" id="ModoTema" />
              </div>
            </div>
            <div>
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

      <div>
        <div>Cancelar</div>
        <div>Guardar Cambios</div>
      </div>

      {/* -- */}
      <div>
        <div>
          <p>Estado de Cuenta</p>
          <p>tu cuenta esta verificada y activa.</p>
        </div>
        <div>
          <div>
            <p>Zona de Riesgo</p>
            <p>una vez desactivada la cuenta no hay marcha atras.</p>
          </div>
          <div>
            <div>Desactivar cuenta</div>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoUsuario = ({ txtTitle, txtInfo }) => {
  return (
    <div>
      <p>{txtTitle}</p>
      <p>{txtInfo}</p>
    </div>
  );
};

export default Configuracion;
