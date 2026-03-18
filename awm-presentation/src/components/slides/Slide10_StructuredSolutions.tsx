import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide10_StructuredSolutions() {
  const strategies = [
    'Protección del 100% del principal al vencimiento',
    'Participación en índices o acciones específicas',
    'Estructuras de rendimiento condicional',
    'Características de barrera de protección (barrier protection)',
    'Diseños de cupón fijo o variable',
    'Plazos desde 7 días hasta 30 años',
  ];

  const useCases = [
    { title: 'Protección ante correcciones', desc: 'Capital protegido mientras el mercado cae' },
    { title: 'Captura con red de seguridad', desc: 'Participación en alzas con downside limitado' },
    { title: 'Rendimiento superior a renta fija', desc: 'Sin sacrificar la preservación del principal' },
  ];

  return (
    <SlideLayout id="slide-10" background="linear-gradient(180deg, #ffffff 0%, #f8fdf8 100%)">
      <div className="flex h-full">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="onLight" size="sm" />
            <div
              className="px-3 py-1 rounded"
              style={{ background: '#12331c' }}
            >
              <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41', letterSpacing: '0.1em' }}>
                PRODUCTO 02
              </span>
            </div>
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Structured Notes & Capital Protection Strategies
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '26px', color: '#45ac41', lineHeight: 1.2 }}>
            AWM Structured Solutions™
          </h2>

          <div className="h-px w-12 mb-3" style={{ background: '#45ac41' }} />

          <p className="font-montserrat font-light mb-5" style={{ fontSize: '12px', color: '#224b2d', lineHeight: 1.7 }}>
            Instrumentos personalizados diseñados para proporcionar exposición al mercado mientras incorporan
            mecanismos de protección del principal —parcial o total— para cada perfil de riesgo.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {/* Strategies */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Estrategias Disponibles
              </p>
              <div className="space-y-2">
                {strategies.map((s, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#d7ead9' }}>
                      <svg width="8" height="6" viewBox="0 0 8 6">
                        <polyline points="1,3 3,5 7,1" fill="none" stroke="#45ac41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-montserrat" style={{ fontSize: '11px', color: '#2c2c2c', lineHeight: 1.4 }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases + chart */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Casos de Uso
              </p>
              <div className="space-y-2 mb-4">
                {useCases.map((u, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg"
                    style={{ background: '#f0faf0', borderLeft: '3px solid #45ac41' }}
                  >
                    <p className="font-montserrat font-semibold" style={{ fontSize: '11px', color: '#12331c' }}>{u.title}</p>
                    <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d' }}>{u.desc}</p>
                  </div>
                ))}
              </div>

              {/* Simple chart */}
              <div
                className="p-3 rounded-lg"
                style={{ background: '#12331c', border: '1px solid #45ac41' }}
              >
                <p className="font-montserrat font-semibold text-center mb-2" style={{ fontSize: '10px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Objetivo Principal
                </p>
                <p className="font-montserrat font-light text-center" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.5 }}>
                  Reducir volatilidad mientras se mantiene<br />
                  <span style={{ color: '#45ac41', fontWeight: 600 }}>el potencial de alza del mercado</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-64 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80"
            alt="Structured investments"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95), transparent 50%), linear-gradient(to top, rgba(18,51,28,0.6), transparent)' }}
          />
          <div className="absolute bottom-6 right-4">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '40px', opacity: 0.5 }}>10</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
