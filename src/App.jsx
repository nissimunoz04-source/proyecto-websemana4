import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import ListaActividades from './components/ListaActividades';
import './App.css';

function App() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>

      {/* Encabezado principal */}
      <HeaderClase
        tituloTema="🌐💻 Desarrollo de Aplicaciones Web 🌐💻"
        nombreDocente="Mía Muñoz 👩‍🏫💗"
        horario="Sábados 7:00 AM ⏱️"
      />

      {/* Competencia e indicador de logro */}
      <ObjetivosCard
        competencia="Construir interfaces web utilizando componentes reutilizables en React e implementando interactividad mediante useState."
        indicadorLogro="Utiliza correctamente props y useState para organizar componentes y controlar la visualización de información pedagógica."
      />

      {/* Título de la secuencia didáctica */}
      <h2 style={{
        color: '#FFFFFF',
        fontSize: '24px',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '20px',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
      }}>
        ✏️ Secuencia Didáctica ✏️
      </h2>

      {/* Actividad diagnóstica */}
      <ActividadItem
        tituloActividad="❓ Trivia Rápida Interactiva"
        duracion="5 minutos"
        etapaDidactica="Diagnóstica"
        descripcion="Evaluación inicial de conocimientos previos mediante preguntas interactivas y dinámicas gamificadas para motivar la participación de los estudiantes."
      />

      {/* Actividad de construcción */}
      <ActividadItem
        tituloActividad="📝 Taller Guiado de Componentes"
        duracion="25 minutos"
        etapaDidactica="Construcción"
        descripcion="Construcción de interfaces web utilizando componentes reutilizables en React, propiedades (props), Vite y despliegue de aplicaciones mediante Vercel."
      />

      {/* Actividad de aplicación */}
      <ActividadItem
        tituloActividad="💻 Pruebas de Estado con useState ⚛️"
        duracion="25 minutos"
        etapaDidactica="Aplicación"
        descripcion="Implementación del hook useState para crear botones interactivos que permiten mostrar y ocultar descripciones pedagógicas, además de marcar actividades como completadas."
      />

      {/* Actividades obtenidas desde NocoDB */}
      <div style={{
        marginTop: '35px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <ListaActividades />
      </div>

    </div>
  );
}

export default App;