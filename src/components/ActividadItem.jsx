
import React, { useState } from 'react';

function ActividadItem({ tituloActividad, duracion, etapaDidactica }) {

  // Estado inicial de la actividad
  const [completada, setCompletada] = useState(false);

  return (
    <div style={{
      border: '1px solid #E9D5FF',
      borderLeft: '5px solid #C084FC',
      padding: '15px 20px',
      borderRadius: '10px',
      marginBottom: '12px',
      background: completada ? '#E9D5FF' : '#FAF5FF',
      boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
      textAlign: 'left'
    }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15px'
      }}>

        <div>
          <span style={{
            background: '#E9D5FF',
            color: '#6B21A8',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {etapaDidactica}
          </span>

          <h4 style={{
            margin: '12px 0 0 0',
            color: '#581C87',
            fontSize: '15px'
          }}>
            {tituloActividad}
          </h4>
        </div>

        <span style={{
          fontSize: '13px',
          color: '#7E22CE',
          whiteSpace: 'nowrap'
        }}>
          ⏳ {duracion}
        </span>

      </div>

      {/* Botón interactivo con useState */}
      <div style={{
        textAlign: 'center',
        marginTop: '15px'
      }}>

        <button
          type="button"
          onClick={() => setCompletada(!completada)}
          style={{
            background: completada ? '#7C3AED' : '#B57EDC',
            color: '#FFFFFF',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {completada
            ? '✅ Actividad Completada'
            : '⏳ Marcar como Completada'}
        </button>

      </div>

    </div>
  );
}

export default ActividadItem;