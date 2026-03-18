import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide08_PortadaProductos() {
  const solutions = [
    { num: '01', name: 'AWM Global Markets™', sub: 'International Brokerage & Market Access', icon: '📈' },
    { num: '02', name: 'AWM Structured Solutions™', sub: 'Structured Notes & Capital Protection', icon: '🏗️' },
    { num: '03', name: 'AWM Life & Investment Shield™', sub: 'Insurance-Linked Investment Solutions', icon: '🛡️' },
    { num: '04', name: 'AWM Trust & Fiduciary™', sub: 'Wealth Structuring & Asset Protection', icon: '🏛️' },
    { num: '05', name: 'AWM Digital Assets Desk™', sub: 'Institutional Digital Asset Access', icon: '🔗' },
    { num: '06', name: 'AWM Private Mandates™', sub: 'Discretionary Portfolio Management', icon: '💼' },
  ];

  return (
    <SlideLayout id="slide-8" background="linear-gradient(135deg, #0b1610 0%, #12331c 50%, #1a3e24 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 flex h-full">
        {/* Left panel */}
        <div className="w-96 flex-shrink-0 flex flex-col justify-center px-14 py-10">
          <AWMLogo variant="onDark" size="md" className="mb-8" />

          <p className="font-montserrat font-light uppercase tracking-widest mb-2" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Nuestros Productos
          </p>
          <h2 className="font-montserrat font-bold mb-3" style={{ fontSize: '36px', color: '#ffffff', lineHeight: 1.1 }}>
            Solutions
          </h2>
          <h2 className="font-montserrat font-light mb-5" style={{ fontSize: '28px', color: '#45ac41', lineHeight: 1.1 }}>
            Designed Around Wealth Objectives
          </h2>

          <div className="h-px w-16 mb-5" style={{ background: '#45ac41' }} />

          <p className="font-montserrat font-light mb-6" style={{ fontSize: '13px', color: '#d7ead9', lineHeight: 1.7 }}>
            6 líneas de servicio integradas, cada una diseñada para objetivos patrimoniales específicos.
            Del trading activo a la protección generacional.
          </p>

          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full"
            style={{ background: 'rgba(69,172,65,0.15)', border: '1px solid #45ac41' }}
          >
            <span className="font-montserrat font-bold" style={{ fontSize: '28px', color: '#45ac41' }}>6</span>
            <span className="font-montserrat font-light" style={{ fontSize: '12px', color: '#d7ead9' }}>
              Líneas de Servicio<br />Especializadas
            </span>
          </div>
        </div>

        {/* Right panel - product list */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10 gap-3">
          {solutions.map((s) => (
            <div
              key={s.num}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(69,172,65,0.2)',
                borderLeft: '4px solid #45ac41',
              }}
            >
              <span
                className="font-montserrat font-bold w-8 flex-shrink-0"
                style={{ fontSize: '11px', color: '#459860' }}
              >
                {s.num}
              </span>
              <span className="text-xl flex-shrink-0">{s.icon}</span>
              <div>
                <p className="font-montserrat font-semibold" style={{ fontSize: '13px', color: '#ffffff' }}>
                  {s.name}
                </p>
                <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#459860' }}>
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
