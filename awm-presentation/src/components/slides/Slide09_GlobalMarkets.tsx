import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide09_GlobalMarkets() {
  const capabilities = [
    'Acciones estadounidenses e internacionales',
    'ETFs y fondos listados globales',
    'Bonos gubernamentales y corporativos',
    'Estrategias con opciones y derivados',
    'Trading multi-divisa',
    'Custodia institucional certificada',
  ];

  const benefits = [
    { icon: '→', text: 'Ejecución directa en mercados globales' },
    { icon: '→', text: 'Cuentas segregadas (activos 100% protegidos)' },
    { icon: '→', text: 'Acceso 24/7 a plataforma digital' },
    { icon: '→', text: 'Reportería consolidada en tiempo real' },
  ];

  const idealFor = ['Inversionistas activos', 'Family offices', 'Gestores de tesorería corporativa'];

  return (
    <SlideLayout id="slide-9" background="#ffffff">
      <div className="flex h-full">
        {/* Left image */}
        <div className="w-64 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
            alt="Trading floor"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, transparent 40%, rgba(255,255,255,1))' }}
          />
          {/* Product badge */}
          <div
            className="absolute top-6 left-4 px-3 py-1 rounded"
            style={{ background: '#45ac41' }}
          >
            <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#ffffff', letterSpacing: '0.1em' }}>
              PRODUCTO 01
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            International Brokerage & Market Access
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '26px', color: '#45ac41', lineHeight: 1.2 }}>
            AWM Global Markets™
          </h2>
          <p className="font-montserrat font-light mb-4" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.7 }}>
            Plataforma profesional de ejecución y custodia que provee acceso directo a las principales bolsas globales
            a través de cuentas seguras y completamente segregadas.
          </p>

          <div className="grid grid-cols-2 gap-5">
            {/* Capabilities */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '12px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Capacidades
              </p>
              <div className="space-y-2">
                {capabilities.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#d7ead9' }}>
                      <svg width="8" height="6" viewBox="0 0 8 6">
                        <polyline points="1,3 3,5 7,1" fill="none" stroke="#45ac41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-montserrat" style={{ fontSize: '11px', color: '#2c2c2c' }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits + Ideal For */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '12px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Beneficios Clave
              </p>
              <div className="space-y-2 mb-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ color: '#45ac41', fontSize: '14px', fontWeight: 700 }}>{b.icon}</span>
                    <p className="font-montserrat" style={{ fontSize: '11px', color: '#2c2c2c' }}>{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg" style={{ background: '#f8fdf8', border: '1px solid #d7ead9' }}>
                <p className="font-montserrat font-semibold mb-1" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Ideal Para
                </p>
                {idealFor.map((f, i) => (
                  <p key={i} className="font-montserrat font-light" style={{ fontSize: '11px', color: '#224b2d' }}>
                    • {f}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
