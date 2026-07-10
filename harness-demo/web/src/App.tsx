import { FormEvent, useEffect, useState } from 'react';

type ColumnaId = 'bien' | 'mejorar' | 'acciones';

interface Tarjeta {
  id: number;
  columna: ColumnaId;
  texto: string;
  responsable?: string;
}

const COLUMNAS: { id: ColumnaId; titulo: string; emoji: string }[] = [
  { id: 'bien', titulo: 'Salió bien', emoji: '🌱' },
  { id: 'mejorar', titulo: 'A mejorar', emoji: '🔧' },
  { id: 'acciones', titulo: 'Acciones', emoji: '🎯' },
];

export function App() {
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>([]);
  const [error, setError] = useState('');

  async function cargar(): Promise<void> {
    const respuesta = await fetch('/api/tarjetas');
    setTarjetas(await respuesta.json());
  }

  useEffect(() => {
    void cargar();
    const timer = setInterval(() => void cargar(), 2000);
    return () => clearInterval(timer);
  }, []);

  async function agregar(
    columna: ColumnaId,
    texto: string,
    responsable: string,
  ): Promise<boolean> {
    const respuesta = await fetch('/api/tarjetas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ columna, texto, responsable }),
    });
    if (!respuesta.ok) {
      const cuerpo = await respuesta.json();
      setError(cuerpo.message ?? 'algo salió mal');
      return false;
    }
    setError('');
    void cargar();
    return true;
  }

  return (
    <main>
      <header>
        <h1>Retro del equipo</h1>
        <p>Tablero local · se actualiza solo cada 2 segundos</p>
      </header>
      {error && <div className="error">{error}</div>}
      <div className="tablero">
        {COLUMNAS.map((columna) => (
          <ColumnaRetro
            key={columna.id}
            {...columna}
            tarjetas={tarjetas.filter((t) => t.columna === columna.id)}
            onAgregar={agregar}
          />
        ))}
      </div>
    </main>
  );
}

interface ColumnaProps {
  id: ColumnaId;
  titulo: string;
  emoji: string;
  tarjetas: Tarjeta[];
  onAgregar: (
    columna: ColumnaId,
    texto: string,
    responsable: string,
  ) => Promise<boolean>;
}

function ColumnaRetro(props: ColumnaProps) {
  const { id, titulo, emoji, tarjetas, onAgregar } = props;
  const [texto, setTexto] = useState('');
  const [responsable, setResponsable] = useState('');

  async function enviar(evento: FormEvent): Promise<void> {
    evento.preventDefault();
    if (await onAgregar(id, texto, responsable)) {
      setTexto('');
      setResponsable('');
    }
  }

  return (
    <section className="columna" data-col={id}>
      <h2>
        <span>{emoji}</span> {titulo}
        <span className="contador">{tarjetas.length}</span>
      </h2>
      {tarjetas.map((tarjeta) => (
        <article key={tarjeta.id} className="tarjeta">
          {tarjeta.texto}
          {tarjeta.responsable && (
            <div>
              <span className="responsable">@{tarjeta.responsable}</span>
            </div>
          )}
        </article>
      ))}
      <form onSubmit={enviar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarjeta…"
        />
        {id === 'acciones' && (
          <input
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
            placeholder="Responsable"
          />
        )}
        <button>Agregar</button>
      </form>
    </section>
  );
}
