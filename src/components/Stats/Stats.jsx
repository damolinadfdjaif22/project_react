import { useState } from 'react';

function Stats() {
  const [visits, setVisits] = useState(0);

  return (
    <section className="stats">
      <h2>Estadísticas</h2>
      <p>Visitas: {visits}</p>
      <button onClick={() => setVisits(visits + 1)}>
        Incrementar
      </button>
    </section>
  );
}

export default Stats;
