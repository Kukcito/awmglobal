import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide15_PrivateMandates() {
  const mandates = [
    {
      icon: '🛡️',
      name: 'CONSERVATIVE',
      desc: 'Preservación de capital',
      detail: 'Renta fija predominante | Volatilidad mínima',
      color: '#12331c',
      bar: 20,
    },
    {
      icon: '⚖️',
      name: 'BALANCED',
      desc: 'Crecimiento moderado',
      detail: 'Balance equity/renta fija | Riesgo medio',
      color: '#2a6d2f',
      bar: 50,
    },
    {
      icon: '📈',
      name: 'GROWTH',
      desc: 'Apreciación de capital',
      detail: 'Mayor exposición equity | Riesgo medio-alto',
      color: '#45ac41',
      bar: 75,
    },
    {
      icon: '💰',
      name: 'INCOME',
      desc: 'Generación de flujo de caja',
      detail: 'Dividendos y cupones | Estabilidad',
      color: '#69b32d',
      bar: 40,
    },
    {
      icon: '🔒',
      name: 'CAPITAL PRESERVATION',
      desc: 'Protección absoluta',
      detail: 'Liquidez | Riesgo ultra-bajo',
      color: '#459860',
      bar: 10,
    },
  ];

  const services = [
    'Asignación estratégica de activos (SAA)',
    'Rebalanceo táctico periódico',
    'Monitoreo continuo del portafolio',
    'Reportería consolidada mensual',
    'Supervisión del equipo de inversión senior',
    'Revisiones anuales de estrategia',
  ];

  return (
    <SlideLayout id="slide-15" background="#ffffff">
      <div className="flex h-full">
        <div className="flex-1 flex flex-col px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div className="px-3 py-1 rounded" style={{ background: '#12331c' }}>
              <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41', letterSpacing: '0.1em' }}>
                PRODUCTO 06
              </span>
            </div>
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Discretionary Portfolio Management
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '24px', color: '#45ac41', lineHeight: 1.2 }}>
            AWM Private Mandates™
          </h2>
          <p className="font-montserrat font-light mb-5" style={{ fontSize: '12px', color: '#224b2d', lineHeight: 1.7 }}>
            Portafolios gestionados activamente por el equipo de inversión de AWM bajo parámetros de riesgo claramente
            definidos. Delega la gestión con total transparencia y control.
          </p>

          <div className="flex gap-5 flex-1">
            {/* Mandate types */}
            <div className="flex-1">
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Tipos de Mandato
              </p>
              <div className="space-y-3">
                {mandates.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl" style={{ background: '#f8fdf8', border: `1px solid ${m.color}20` }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ fontSize: '14px' }}>{m.icon}</span>
                      <p className="font-montserrat font-bold" style={{ fontSize: '11px', color: m.color, letterSpacing: '0.05em' }}>
                        {m.name}
                      </p>
                    </div>
                    <p className="font-montserrat font-medium mb-1" style={{ fontSize: '10px', color: '#2c2c2c' }}>
                      {m.desc}
                    </p>
                    <p className="font-montserrat font-light mb-2" style={{ fontSize: '9px', color: '#224b2d' }}>
                      {m.detail}
                    </p>
                    {/* Risk bar */}
                    <div className="flex items-center gap-2">
                      <p className="font-montserrat font-light" style={{ fontSize: '8px', color: '#459860', width: '36px' }}>Riesgo</p>
                      <div className="flex-1 h-1.5 rounded-full" style={{ background: '#e8f5e9' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${m.bar}%`, background: `linear-gradient(to right, ${m.color}, ${m.color}99)` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services included */}
            <div className="w-52 flex-shrink-0">
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Servicios Incluidos
              </p>
              <div
                className="p-4 rounded-xl"
                style={{ background: '#12331c' }}
              >
                <div className="space-y-2">
                  {services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0 mt-0.5">
                        <polyline points="2,6 5,9 10,3" fill="none" stroke="#45ac41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="font-montserrat" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.4 }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-3 p-4 rounded-xl"
                style={{ background: '#f0faf0', border: '1px solid #45ac41' }}
              >
                <p className="font-montserrat font-medium" style={{ fontSize: '11px', color: '#12331c' }}>
                  Ideal para inversores que prefieren delegar la gestión activa con total confianza en profesionales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-56 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
            alt="Portfolio management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95), transparent 40%)' }} />
          <div className="absolute bottom-6 right-4">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '36px', opacity: 0.5 }}>15</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
