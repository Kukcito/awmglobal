import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide13_TrustFiduciary() {
  const strategies = [
    'Trusts internacionales y estructuras holding',
    'Mandatos fiduciarios especializados',
    'Estructuras de planificación patrimonial',
    'Estrategias avanzadas de protección de activos',
    'Arreglos custodiales internacionales',
    'Administración de wealth familiar (family office services)',
  ];

  const benefits = [
    { icon: '⚖️', title: 'Protección Legal', desc: 'Activos blindados de reclamaciones externas' },
    { icon: '🔗', title: 'Continuidad Generacional', desc: 'Transferencia patrimonial fluida y controlada' },
    { icon: '💰', title: 'Optimización Fiscal', desc: 'Estructuras eficientes según jurisdicción' },
    { icon: '🔒', title: 'Privacidad Patrimonial', desc: 'Confidencialidad de activos y beneficiarios' },
    { icon: '🏢', title: 'Gobierno Corporativo', desc: 'Reglas claras para la gestión familiar' },
  ];

  const process = [
    'Análisis de estructura patrimonial actual',
    'Diseño de vehículo fiduciario óptimo',
    'Implementación legal con partners especializados',
    'Administración continua y reportería periódica',
  ];

  return (
    <SlideLayout id="slide-13" background="linear-gradient(180deg, #ffffff 0%, #f8fdf8 100%)">
      <div className="flex h-full">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div className="px-3 py-1 rounded" style={{ background: '#12331c' }}>
              <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41', letterSpacing: '0.1em' }}>
                PRODUCTO 04
              </span>
            </div>
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Wealth Structuring & Asset Protection
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '24px', color: '#45ac41', lineHeight: 1.2 }}>
            AWM Trust & Fiduciary Services™
          </h2>
          <p className="font-montserrat font-light mb-4" style={{ fontSize: '12px', color: '#224b2d', lineHeight: 1.7 }}>
            Vehículos legales y fiduciarios diseñados para salvaguardar activos, optimizar la sucesión
            y administrar la riqueza con supervisión profesional a través de generaciones.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {/* Strategies */}
            <div>
              <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Estrategias
              </p>
              <div className="space-y-2">
                {strategies.map((s, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0 mt-0.5">
                      <polyline points="2,6 5,9 10,3" fill="none" stroke="#45ac41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-montserrat" style={{ fontSize: '10px', color: '#2c2c2c', lineHeight: 1.4 }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Beneficios
              </p>
              <div className="space-y-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ fontSize: '14px' }}>{b.icon}</span>
                    <div>
                      <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: '#12331c' }}>{b.title}</p>
                      <p className="font-montserrat font-light" style={{ fontSize: '9px', color: '#224b2d' }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Nuestro Proceso
              </p>
              <div className="space-y-2">
                {process.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: '#12331c' }}
                    >
                      <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41' }}>{i + 1}</span>
                    </div>
                    <p className="font-montserrat" style={{ fontSize: '10px', color: '#2c2c2c', lineHeight: 1.5 }}>{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 p-3 rounded-lg" style={{ background: '#12331c' }}>
                <p className="font-montserrat font-medium" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>
                  Ideal para empresarios, familias multi-generacionales y holdings corporativos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-56 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80"
            alt="Legal documents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(248,253,248,0.95), transparent 40%)' }} />
          <div className="absolute bottom-6 right-4">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '36px', opacity: 0.5 }}>13</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
