
import React, { useState } from 'react';

function ActividadItem({
  tituloActividad,
  duracion,
  etapaDidactica,
  descripcion = 'Actividad pedagógica para fortalecer el aprendizaje.'
}) {

  const [completada, setCompletada] = useState(false);
  const [expandido, setExpandido] = useState(false);

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
        flexWrap: 'wrap',
        gap: '15px'
      }}>

        <div style={{ flex: '1 1 180px' }}>
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

      {/* Botones interactivos */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '18px'
      }}>

        <button
          type="button"
          onClick={() => setCompletada(!completada)}
          style={{
            background: completada ? '#7C3AED' : '#B57EDC',
            color: '#FFFFFF',
            border: 'none',
            padding: '9px 14px',
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

        <button
          type="button"
          onClick={() => setExpandido(!expandido)}
          aria-expanded={expandido}
          style={{
            background: '#6B21A8',
            color: '#FFFFFF',
            border: 'none',
            padding: '9px 14px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {expandido
            ? '▲ Ocultar descripción'
            : '▼ Ver detalle pedagógico'}
        </button>

      </div>

      {/* Descripción que aparece y desaparece */}
      {expandido && (
        <div style={{
          marginTop: '15px',
          padding: '14px',
          background: '#FFFFFF',
          borderLeft: '4px solid #A855F7',
          borderRadius: '8px',
          color: '#581C87',
          fontSize: '13px',
          lineHeight: '1.6'
        }}>
          <strong>📚 Descripción pedagógica:</strong>
          <p style={{ marginBottom: 0 }}>
            {descripcion}
          </p>
        </div>
      )}

    </div>
  );
}

export default ActividadItem;