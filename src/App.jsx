
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
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
        nombreDocente="Mía Muñoz 👩‍🏫💗 "
        horario="Sábados 7:00 AM ⏱️"
      />

      {/* Competencia e indicador de logro */}
      <ObjetivosCard
        competencia="Construir interfaces web utilizando componentes reutilizables en React."
        indicadorLogro="Utiliza correctamente las props para organizar y personalizar componentes."
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
        tituloActividad="❓Trivia Rápida Interactiva"
        duracion="5 minutos"
        etapaDidactica="Diagnóstica"
      />

      {/* Actividad de construcción */}
      <ActividadItem
        tituloActividad="📝Taller Guiado de Componentes"
        duracion="25 minutos"
        etapaDidactica="Construcción"
      />

      {/* Actividad de aplicación */}
      <ActividadItem
        tituloActividad="💻Práctica de Props en React⚛️"
        duracion="25 minutos"
        etapaDidactica="Aplicación"
      />

    </div>
  );
}

export default App;