
import React from 'react';

function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <div style={{
      border: '1px solid #D8B4F8',
      borderLeft: '6px solid #B57EDC',
      padding: '20px',
      borderRadius: '10px',
      background: '#F3E8FF',
      margin: '20px 0',
      textAlign: 'center',
      boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        margin: '0 0 12px 0',
        color: '#6B21A8',
        fontSize: '18px'
      }}>
        🏫 Competencia 🏫: {competencia}
      </h3>

      <p style={{
        margin: 0,
        color: '#581C87',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        🌟 Indicador de Logro: {indicadorLogro}
      </p>
    </div>
  );
}

export default ObjetivosCard;