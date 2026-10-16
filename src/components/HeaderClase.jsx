import React from 'react';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header
      style={{
        background: '#B57EDC',
        color: 'white',
        padding: '25px 20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}
    >
      <h1
        style={{
          margin: '0 0 12px 0',
          fontSize: '26px',
          lineHeight: '1.3',
          overflowWrap: 'break-word'
        }}
      >
        {tituloTema}
      </h1>

      <p
        style={{
          margin: '0 0 10px 0',
          fontSize: '14px',
          lineHeight: '1.5'
        }}
      >
        Docente: {nombreDocente} | Horario: {horario}
      </p>

      <p
        style={{
          margin: 0,
          fontSize: '13px',
          fontWeight: 'bold'
        }}
      >
        Universidad Rafael Landívar
      </p>
    </header>
  );
}

export default HeaderClase;