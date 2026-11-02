import { useEffect, useState } from "react";

function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerActividades() {
      try {
        const respuesta = await fetch("/api/actividades");

        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar las actividades");
        }

        const datos = await respuesta.json();

        setActividades(datos.records || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerActividades();
  }, []);

  if (cargando) {
    return <p>⏳ Cargando actividades...</p>;
  }

  if (error) {
    return <p>❌ Error: {error}</p>;
  }

  return (
    <section>
      <h2>📚 Actividades de aprendizaje</h2>

      {actividades.length === 0 ? (
        <p>No hay actividades registradas.</p>
      ) : (
        actividades.map((actividad) => {
          const datos = actividad.fields || actividad;

          return (
            <div
              key={actividad.id}
              style={{
                backgroundColor: "#FAF5FF",
                border: "2px solid #D8B4FE",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              <h3>💜 {datos.title}</h3>
              <p>⏰ Duración: {datos.duration}</p>
              <p>📂 Categoría: {datos.category}</p>
              <p>
                {datos.completed
                  ? "✅ Completada"
                  : "⏳ Pendiente"}
              </p>
            </div>
          );
        })
      )}
    </section>
  );
}

export default ListaActividades;