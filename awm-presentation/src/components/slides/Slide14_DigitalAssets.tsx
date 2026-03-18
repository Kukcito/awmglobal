import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide14_DigitalAssets() {
  const strategies = [
    'Bitcoin y principales criptomonedas',
    'ETFs de criptoactivos regulados',
    'Estrategias digitales diversificadas',
    'Custodia en cold-storage certificado',
    'Marcos de asignación controlada de riesgo',
  ];

  const institutional = [
    { icon: '🔒', title: 'Solo Custodios Regulados', desc: 'Auditados y certificados' },
    { icon: '📊', title: 'Segregación Total', desc: 'Activos digitales separados' },
    { icon: '📋', title: 'Reporting Transparente', desc: 'Tiempo real, 24/7' },
    { icon: '⚖️', title: 'Límites de Exposición', desc: 'Según perfil de riesgo' },
  ];

  return (
    <SlideLayout id="slide-14" background="linear-gradient(135deg, #0b1610 0%, #12331c 50%, #1a3e24 100%)">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <AWMLogo variant="onDark" size="sm" />
            <div className="px-3 py-1 rounded" style={{ background: 'rgba(69,172,65,0.2)', border: '1px solid #45ac41' }}>
              <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#45ac41', letterSpacing: '0.1em' }}>
                PRODUCTO 05
              </span>
            </div>
          </div>
        </div>

        <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
          Institutional Digital Asset Access
        </p>
        <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '28px', color: '#69b32d', lineHeight: 1.2 }}>
          AWM Digital Assets Desk™
        </h2>
        <p className="font-montserrat font-semibold mb-4" style={{ fontSize: '14px', color: '#ffffff' }}>
          Incorporar innovación sin comprometer seguridad.
        </p>

        <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        <div className="flex gap-8 flex-1">
          {/* Left: description + strategies */}
          <div className="flex-1">
            <div
              className="p-5 rounded-xl mb-5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(105,179,45,0.3)' }}
            >
              <p className="font-montserrat font-light" style={{ fontSize: '13px', color: '#d7ead9', lineHeight: 1.7 }}>
                Exposición segura y profesionalmente gestionada a activos digitales a través de soluciones
                reguladas y enfocadas en custodia institucional. Diversificación alternativa con los más
                altos estándares de seguridad del mercado.
              </p>
            </div>

            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#69b32d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Estrategias Disponibles
            </p>
            <div className="space-y-2">
              {strategies.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="6" fill="none" stroke="#69b32d" strokeWidth="1.2" />
                    <polyline points="4,7 6,9 10,5" fill="none" stroke="#69b32d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-montserrat" style={{ fontSize: '12px', color: '#ffffff' }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: institutional approach */}
          <div className="w-72 flex-shrink-0">
            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#69b32d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Enfoque Institucional
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {institutional.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(105,179,45,0.25)' }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-montserrat font-semibold" style={{ fontSize: '11px', color: '#69b32d' }}>{item.title}</p>
                  <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(105,179,45,0.1)', border: '1px solid #69b32d' }}
            >
              <p className="font-montserrat font-semibold mb-1" style={{ fontSize: '11px', color: '#69b32d', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Ideal Para
              </p>
              <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.6 }}>
                Inversionistas buscando diversificación alternativa, early adopters institucionales y
                exposición controlada a la innovación blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #69b32d, #45ac41, transparent)' }} />
    </SlideLayout>
  );
}
