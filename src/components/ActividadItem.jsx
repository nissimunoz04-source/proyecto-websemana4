import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ActividadItem({
  tituloActividad,
  duracion,
  etapaDidactica,
  descripcion = 'Actividad pedagógica para fortalecer el aprendizaje.'
}) {

  const [completada, setCompletada] = useState(false);
  const [expandido, setExpandido] = useState(false);

  // Colores personalizados según la etapa didáctica
  const colores = {
    'Diagnóstica': {
      fondo: '#FFF0F7',
      borde: '#EC4899',
      etiqueta: '#F4B8CE',
      texto: '#9D174D',
      boton: '#BE185D'
    },
    'Construcción': {
      fondo: '#EFF8FF',
      borde: '#0284C7',
      etiqueta: '#BAE6FD',
      texto: '#075985',
      boton: '#0369A1'
    },
    'Aplicación': {
      fondo: '#ECFDF8',
      borde: '#0D9488',
      etiqueta: '#99F6E4',
      texto: '#115E59',
      boton: '#0F766E'
    }
  };

  const tema = colores[etapaDidactica] || {
    fondo: '#FAF5FF',
    borde: '#A855F7',
    etiqueta: '#E9D5FF',
    texto: '#581C87',
    boton: '#6B21A8'
  };

  return (
    <motion.div
      layout
      whileHover={{
        y: -4,
        boxShadow: `0 12px 28px ${tema.borde}35`
      }}
      transition={{
        layout: {
          type: 'spring',
          stiffness: 300,
          damping: 30
        },
        duration: 0.3
      }}
      style={{
        border: `1px solid ${tema.borde}`,
        borderLeft: `6px solid ${tema.borde}`,
        padding: '22px',
        borderRadius: '16px',
        marginBottom: '18px',
        background: completada
          ? 'linear-gradient(135deg, #F3E8FF, #FCE7F3)'
          : tema.fondo,
        boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
        textAlign: 'left'
      }}
    >

      {/* Información principal */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '14px'
      }}>

        <div style={{ flex: '1 1 180px' }}>
          <span style={{
            background: tema.etiqueta,
            color: tema.texto,
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {etapaDidactica}
          </span>

          <h4 style={{
            margin: '16px 0 0',
            color: tema.texto,
            fontSize: '17px',
            lineHeight: '1.5'
          }}>
            {tituloActividad}
          </h4>
        </div>

        <span style={{
          fontSize: '13px',
          color: tema.texto,
          fontWeight: '600',
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
        gap: '12px',
        marginTop: '20px'
      }}>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCompletada(!completada)}
          aria-pressed={completada}
          style={{
            background: completada ? '#6B21A8' : tema.boton,
            color: '#FFFFFF',
            border: 'none',
            padding: '11px 16px',
            borderRadius: '9px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
        >
          {completada
            ? '✅ Actividad Completada'
            : '⏳ Marcar como Completada'}
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExpandido(!expandido)}
          aria-expanded={expandido}
          style={{
            background: '#6B21A8',
            color: '#FFFFFF',
            border: 'none',
            padding: '11px 16px',
            borderRadius: '9px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
        >
          {expandido
            ? '▲ Ocultar descripción'
            : '▼ Ver detalle pedagógico'}
        </motion.button>
      </div>

      {/* Descripción pedagógica animada */}
      <AnimatePresence initial={false}>
        {expandido && (
          <motion.div
            key="descripcion"
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.3
            }}
            style={{
              overflow: 'hidden'
            }}
          >
            <div style={{
              marginTop: '18px',
              padding: '18px',
              background: '#FFFFFF',
              borderLeft: `4px solid ${tema.borde}`,
              borderRadius: '10px',
              color: tema.texto,
              fontSize: '14px',
              lineHeight: '1.7',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <strong>📚 Descripción pedagógica:</strong>

              <p style={{ marginBottom: 0 }}>
                {descripcion}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

export default ActividadItem;