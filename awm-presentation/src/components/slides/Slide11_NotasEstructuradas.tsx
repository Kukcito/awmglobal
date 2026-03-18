import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide11_NotasEstructuradas() {
  const types = [
    {
      name: 'Notas con Protección Total',
      tag: '100% Capital Protected',
      desc: 'Capital garantizado al vencimiento. Rendimiento vinculado al activo subyacente (equity, índice, bono).',
      ideal: 'Perfiles conservadores y de bajo riesgo',
      color: '#12331c',
      bgLight: '#f0faf0',
    },
    {
      name: 'Notas Participativas',
      tag: 'Participation Notes',
      desc: 'Participación en la alza de acciones o índices con protección parcial del 80-90% del capital.',
      ideal: 'Expectativas alcistas moderadas',
      color: '#2a6d2f',
      bgLight: '#f4fbf4',
    },
    {
      name: 'Notas Vinculadas a Divisas',
      tag: 'FX-Linked Notes',
      desc: 'Rendimientos basados en movimientos cambiarios (USD/MXN, EUR/USD). Protección condicional según strike.',
      ideal: 'Cobertura o aprovechamiento de volatilidad FX',
      color: '#45ac41',
      bgLight: '#f8fdf8',
    },
    {
      name: 'Notas con Barrera Knock-Out',
      tag: 'Barrier Notes',
      desc: 'Rendimientos atractivos mientras el precio permanece dentro del rango. Rebate si se activa la barrera.',
      ideal: 'Mercados estables con expectativas de rango',
      color: '#69b32d',
      bgLight: '#fcfff5',
    },
  ];

  return (
    <SlideLayout id="slide-11" background="#ffffff">
      <div className="flex h-full">
        {/* Left narrow bar */}
        <div
          className="w-10 flex-shrink-0"
          style={{ background: 'linear-gradient(to bottom, #45ac41, #12331c)' }}
        />

        {/* Content */}
        <div className="flex-1 flex flex-col px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div
              className="px-3 py-1 rounded"
              style={{ background: '#12331c' }}
            >
              <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41', letterSpacing: '0.1em' }}>
                AWM STRUCTURED SOLUTIONS™
              </span>
            </div>
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Tipos de Instrumentos
          </p>
          <h2 className="font-montserrat font-bold mb-5" style={{ fontSize: '26px', color: '#12331c', lineHeight: 1.2 }}>
            Opciones para Cada{' '}
            <span style={{ color: '#45ac41' }}>Expectativa de Mercado</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {types.map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-xl flex flex-col"
                style={{
                  background: t.bgLight,
                  border: `1px solid ${t.color}30`,
                  borderTop: `4px solid ${t.color}`,
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-montserrat font-bold" style={{ fontSize: '13px', color: t.color, lineHeight: 1.3, flex: 1 }}>
                    {t.name}
                  </p>
                  <span
                    className="font-montserrat font-semibold px-2 py-0.5 rounded flex-shrink-0 ml-2"
                    style={{ fontSize: '9px', background: t.color, color: '#ffffff', whiteSpace: 'nowrap' }}
                  >
                    {t.tag}
                  </span>
                </div>
                <p className="font-montserrat font-light mb-3" style={{ fontSize: '11px', color: '#2c2c2c', lineHeight: 1.5, flex: 1 }}>
                  {t.desc}
                </p>
                <div className="flex items-center gap-2 pt-2" style={{ borderTop: `1px solid ${t.color}20` }}>
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="4" fill="none" stroke={t.color} strokeWidth="1.2" />
                    <text x="5" y="8.5" textAnchor="middle" fill={t.color} fontSize="7" fontFamily="Montserrat,sans-serif" fontWeight="700">i</text>
                  </svg>
                  <p className="font-montserrat font-medium" style={{ fontSize: '10px', color: t.color }}>
                    Ideal para: {t.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="w-56 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1642790551116-18e4a9a223f4?w=500&q=80"
            alt="Financial charts"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95), transparent 40%)' }}
          />
          <div className="absolute bottom-6 right-4">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '36px', opacity: 0.5 }}>11</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
