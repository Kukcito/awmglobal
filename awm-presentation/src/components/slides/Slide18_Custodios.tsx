import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide18_Custodios() {
  const custodians = [
    { name: 'Interactive Brokers', detail: 'NASDAQ: IBKR | Regulado SEC/FINRA', flag: '🇺🇸' },
    { name: 'Pershing LLC', detail: 'BNY Mellon | Custodio institucional global', flag: '🇺🇸' },
    { name: 'Swissquote Bank', detail: 'SIX Swiss Exchange | Regulado FINMA', flag: '🇨🇭' },
    { name: 'Saxo Bank', detail: 'Danish FSA | Mercados globales', flag: '🇩🇰' },
  ];

  const benefits = [
    { icon: '🔐', title: 'Segregación total', desc: 'Activos separados de AWM (zero commingling)' },
    { icon: '🛡️', title: 'Protección ante insolvencia', desc: 'Activos seguros ante cualquier eventualidad del asesor' },
    { icon: '👁️', title: 'Transparencia total', desc: 'Visibilidad completa de holdings en tiempo real' },
    { icon: '🔑', title: 'Acceso directo del cliente', desc: 'El cliente accede directamente a su cuenta' },
    { icon: '📋', title: 'Reportes independientes', desc: 'Directamente del custodio, sin intermediación' },
  ];

  const partners = [
    'Firmas legales especializadas en estructuración patrimonial',
    'Auditores internacionales para clientes institucionales',
    'Proveedores tecnológicos (Bloomberg, Refinitiv)',
    'Aseguradoras internacionales de alta calificación',
  ];

  return (
    <SlideLayout id="slide-18" background="#ffffff">
      <div className="flex h-full">
        {/* Left image */}
        <div className="w-60 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
            alt="Global banking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 40%, rgba(255,255,255,1))' }} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col px-10 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Alianzas Estratégicas
          </p>
          <h2 className="font-montserrat font-bold mb-4" style={{ fontSize: '26px', color: '#12331c', lineHeight: 1.2 }}>
            Partnerships con las Instituciones{' '}
            <span style={{ color: '#45ac41' }}>Más Sólidas del Mundo</span>
          </h2>

          <div className="grid grid-cols-2 gap-5">
            {/* Custodians list */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Custodios Globales Tier 1
              </p>
              <div className="space-y-2 mb-4">
                {custodians.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: '#f8fdf8', border: '1px solid #e8f5e9' }}
                  >
                    <span style={{ fontSize: '18px' }}>{c.flag}</span>
                    <div>
                      <p className="font-montserrat font-bold" style={{ fontSize: '12px', color: '#12331c' }}>{c.name}</p>
                      <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d' }}>{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl" style={{ background: '#f0faf0', border: '1px solid #d7ead9' }}>
                <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d', lineHeight: 1.5 }}>
                  + Otros custodios institucionales disponibles bajo solicitud, seleccionados según las necesidades específicas de cada cliente.
                </p>
              </div>
            </div>

            {/* Benefits + Partners */}
            <div>
              <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Beneficios de Custodia Segregada
              </p>
              <div className="space-y-2 mb-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ fontSize: '14px', flexShrink: 0 }}>{b.icon}</span>
                    <div>
                      <p className="font-montserrat font-semibold" style={{ fontSize: '11px', color: '#12331c' }}>{b.title}</p>
                      <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d' }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl" style={{ background: '#12331c' }}>
                <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Partners Estratégicos
                </p>
                {partners.map((p, i) => (
                  <p key={i} className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>
                    • {p}
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
