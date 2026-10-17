
import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header
      style={{
        background: 'linear-gradient(120deg, #6B21A8 0%, #A855F7 35%, #EC4899 70%, #0284C7 100%)',
        color: '#FFFFFF',
        padding: '35px 22px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 10px 28px rgba(107,33,168,0.25)',
        border: '2px solid rgba(255,255,255,0.5)',
        transition: 'box-shadow 0.3s ease'
      }}
    >

      <p style={{
        fontSize: '12px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        marginBottom: '14px'
      }}>
        ✨ PLAN DE CLASE DIGITAL ✨
      </p>

      <h1 style={{
        margin: '0 0 20px',
        fontSize: 'clamp(22px, 4vw, 30px)',
        lineHeight: '1.4',
        fontWeight: '900',
        overflowWrap: 'break-word',
        textShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>
        {tituloTema}
      </h1>

      {/* Información de la docente */}
      <div style={{
        background: 'rgba(255,255,255,0.18)',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: '12px',
        padding: '15px',
        marginBottom: '18px',
        backdropFilter: 'blur(8px)'
      }}>

        <p style={{
          margin: '0 0 8px',
          fontSize: '15px',
          fontWeight: 'bold'
        }}>
          👩‍🏫 Docente: {nombreDocente}
        </p>

        <p style={{
          margin: 0,
          fontSize: '14px'
        }}>
          🕒 Horario: {horario}
        </p>

      </div>

      {/* Identificación universitaria */}
      <div style={{
        background: '#CCFBF1',
        color: '#115E59',
        padding: '10px 14px',
        borderRadius: '25px',
        fontSize: '13px',
        fontWeight: 'bold',
        display: 'inline-block',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        🎓 Universidad Rafael Landívar
      </div>

    </header>
  );
}

export default HeaderClase;