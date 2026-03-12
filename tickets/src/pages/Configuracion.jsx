import "./config.css";
import rostro from "../assets/rostro.avif";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import axiosClient from "../api/client";

const Configuracion = () => {
  // const { user } = useContext(AuthContext);
  const [inputState, setInputState] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    dni: "",
  });

  console.log(inputState);
  return (
    <div className="configuracion">
      <div className="titleConfig">
        <h3>Configuracion y Perfil</h3>
        <p>
          Administra tu identidad digital y preferencias del ecosistema
          'nombreEmpresa'
        </p>
      </div>
      {/* -- */}

      <div className="BodyConfig">
        <div className="PerfilPanel">
          <div className="PerfilDescription">
            <img className="configImgPerfil" src={rostro} alt="rostro" />
            {/* <p className='fontBlack'> {user.nombre} </p> */}
            {/* <p className='fontOrange'> {user.rol} </p> */}
          </div>
          <div className="PanelPerfilInfo">
            <InfoUsuario
              txtTitle={"CORREO ELECTRONICO"}
              txtInfo={"correo@ejemplo.com"}
            />

            <PassUsuario
              txtTitle={"CONTRASEÑA"}
              txtInfo={"*********"}
              statespass={inputState}
            />

            <InfoUsuario txtTitle={"NUMERO DNI"} txtInfo={"70300000"} />
          </div>
          <div className="PanelPerfilBtn">
            <button className="btn editarPefil fontOrange">
              Editar Perfil
            </button>
            <button
              className="btn seguridad fontBlack"
              onClick={() => setInputState(!inputState)}
            >
              Seguridad
            </button>
          </div>
        </div>
        <div className="PreferPanel">
          <div>
            <h3>Preferencias de interfaz</h3>
            <div className="ItemPreference">
              <div>ICONO</div>
              <div>
                <p>Modo Oscuro</p>
                <p>Cambia entre tema oscuro y claro.</p>
              </div>
              <div>
                <input type="checkbox" name="" id="ModoTema" />
              </div>
            </div>
            <div className="ItemPreference">
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
      {inputState && (
        <div className="botoneraConfig">
          <div className="btnCancelar" onClick={() => setInputState(false)}>
            Cancelar
          </div>
          <div className=" btnGuardar">Guardar Cambios</div>
        </div>
      )}
      {/* -- */}
      <div className="footerConfig">
        <div className="EstadoCuenta">
          <h4 className="fontBlack">Estado de Cuenta</h4>
          <p className="fontGrayInfo">tu cuenta esta verificada y activa.</p>
        </div>
        <div className="DangerZone">
          <div>
            <h4>Zona de Riesgo</h4>
            <p className="fontGrayInfo">
              una vez desactivada la cuenta no hay marcha atras.
            </p>
          </div>
          <div className="borderDanger">
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
      <p className="fontGrayInfo">{txtTitle}</p>
      <p className="fontBlackInfo">{txtInfo}</p>
    </div>
  );
};

const PassUsuario = ({ txtTitle, txtInfo, statespass }) => {
  const [validarPassword, setValidarPassword] = useState({
    newPassword: "",
    validatePassword: "",
  });

  const validarCampos = (newpass, validate) => {
    if (newpass !== validate) {
      alert("Las contraseñas no coinciden");
      return null;
    }

    if (newpass.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return null;
    }

    return newpass;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validacion = validarCampos(
      validarPassword.newPassword,
      validarPassword.validatePassword,
    );

    if (validacion) {
      try {
        const response = await axiosClient.post("/api/user/update-password", {
          password: validacion,
        });
        alert("Contraseña actualizada correctamente");
      } catch (error) {
        alert("Error al actualizar la contraseña");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="fontGrayInfo">{txtTitle}</p>

      {statespass ? (
        <div className="infoUsuario">
          <div className="inputPass">
            <input
              type="password"
              name=""
              id=""
              placeholder="Nueva Contraseña"
              onChange={(e) =>
                setValidarPassword({
                  ...validarPassword,
                  newPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="inputPass">
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              onChange={(e) =>
                setValidarPassword({
                  ...validarPassword,
                  validatePassword: e.target.value,
                })
              }
            />
          </div>
        </div>
      ) : (
        <div className="infoUsuario">
          <p className="fontBlackInfo">{txtInfo}</p>
        </div>
      )}
    </form>
  );
};

export default Configuracion;
