import { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    passwordActual: "",
    passwordNueva: "",
    tema: "light",
    notificaciones: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos guardados:", formData);

    // Aquí puedes hacer tu request al backend
    // await axios.put("/api/settings", formData)

    alert("Configuración actualizada correctamente");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Configuración</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Perfil */}
        <section style={styles.section}>
          <h3>Perfil</h3>

          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </section>

        {/* Seguridad */}
        <section style={styles.section}>
          <h3>Seguridad</h3>

          <label>Contraseña actual</label>
          <input
            type="password"
            name="passwordActual"
            value={formData.passwordActual}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Nueva contraseña</label>
          <input
            type="password"
            name="passwordNueva"
            value={formData.passwordNueva}
            onChange={handleChange}
            style={styles.input}
          />
        </section>

        {/* Preferencias */}
        <section style={styles.section}>
          <h3>Preferencias</h3>

          <label>Tema</label>
          <select
            name="tema"
            value={formData.tema}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
          </select>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              name="notificaciones"
              checked={formData.notificaciones}
              onChange={handleChange}
            />
            Activar notificaciones
          </label>
        </section>

        <button type="submit" style={styles.button}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
  },
};

export default Settings;