import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3, #E0F2FE)',
      padding: '22px',
      borderRadius: '20px',
      margin: '22px 0',
      boxShadow: '0 8px 24px rgba(107,33,168,0.12)',
      border: '1px solid #E9D5FF'
    }}>

      {/* Tarjeta de competencia */}
      <div style={{
        background: '#FFF0F7',
        border: '1px solid #F4B8CE',
        borderLeft: '6px solid #EC4899',
        borderRadius: '14px',
        padding: '20px',
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(236,72,153,0.10)'
      }}>

        <h3 style={{
          color: '#9D174D',
          fontSize: '19px',
          margin: '0 0 12px',
          fontWeight: '800'
        }}>
          🏫 Competencia
        </h3>

        <p style={{
          color: '#831843',
          fontSize: '14px',
          lineHeight: '1.7',
          margin: 0
        }}>
          {competencia}
        </p>

      </div>

      {/* Tarjeta de indicador de logro */}
      <div style={{
        background: '#ECFEFF',
        border: '1px solid #67E8F9',
        borderLeft: '6px solid #2DD4BF',
        borderRadius: '14px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(45,212,191,0.12)'
      }}>

        <h3 style={{
          color: '#0F766E',
          fontSize: '19px',
          margin: '0 0 12px',
          fontWeight: '800'
        }}>
          🌟 Indicador de Logro
        </h3>

        <p style={{
          color: '#155E75',
          fontSize: '14px',
          lineHeight: '1.7',
          margin: 0
        }}>
          {indicadorLogro}
        </p>

      </div>

    </section>
  );
}

export default ObjetivosCard;