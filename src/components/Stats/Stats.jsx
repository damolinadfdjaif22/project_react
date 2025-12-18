// src/components/Stats/Stats.jsx
import React, { useEffect, useState } from 'react';

function Stats() {
  const [visits, setVisits] = useState(() => {
    try {
      return Number(localStorage.getItem('stats_visits')) || 0;
    } catch {
      return 0;
    }
  });

  const [likes, setLikes] = useState(() => {
    try {
      return Number(localStorage.getItem('stats_likes')) || 0;
    } catch {
      return 0;
    }
  });

  // Persistir en localStorage cuando cambian
  useEffect(() => {
    try {
      localStorage.setItem('stats_visits', String(visits));
    } catch {}
  }, [visits]);

  useEffect(() => {
    try {
      localStorage.setItem('stats_likes', String(likes));
    } catch {}
  }, [likes]);

  const incrementVisits = () => setVisits((v) => v + 1);
  const incrementLikes = () => setLikes((l) => l + 1);
  const resetStats = () => {
    setVisits(0);
    setLikes(0);
    try {
      localStorage.removeItem('stats_visits');
      localStorage.removeItem('stats_likes');
    } catch {}
  };

  return (
    <section className="stats" aria-labelledby="stats-heading">
      <h2 id="stats-heading">Estadísticas</h2>

      <div className="stats-grid" role="list">
        <div className="stat-card" role="listitem">
          <p className="stat-label">Visitas</p>
          <p className="stat-value" aria-live="polite" aria-atomic="true">
            {visits}
          </p>
          <div className="stat-actions">
            <button
              type="button"
              onClick={incrementVisits}
              aria-label="Incrementar visitas"
            >
              + Visita
            </button>
          </div>
        </div>

        <div className="stat-card" role="listitem">
          <p className="stat-label">Likes</p>
          <p className="stat-value" aria-live="polite" aria-atomic="true">
            {likes}
          </p>
          <div className="stat-actions">
            <button
              type="button"
              onClick={incrementLikes}
              aria-label="Dar like"
            >
              ❤️ Like
            </button>
          </div>
        </div>
      </div>

      <div className="stats-footer">
        <button
          type="button"
          className="btn-reset"
          onClick={resetStats}
          aria-label="Restablecer estadísticas"
        >
          Restablecer
        </button>
      </div>
    </section>
  );
}

export default Stats;
