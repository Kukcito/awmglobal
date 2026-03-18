import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide12_LifeShield() {
  const benefits = [
    'Acumulación de valor de cuenta de inversión',
    'Beneficios de cobertura de vida integrados',
    'Transferencia patrimonial simplificada',
    'Características de protección de activos',
    'Oportunidades de diferimiento fiscal',
    'Designación directa de beneficiarios',
  ];

  const useCases = [
    { icon: '🏠', title: 'Protección Familiar', desc: 'Seguridad financiera para cónyuge e hijos' },
    { icon: '💼', title: 'Planificación de Retiro', desc: 'Crecimiento con protección a largo plazo' },
    { icon: '🌳', title: 'Transferencia Patrimonial', desc: 'Evitar probate y simplificar sucesión' },
    { icon: '🛡️', title: 'Preservación Multi-Gen.', desc: 'Protección de riqueza generacional' },
  ];

  const taxBenefits = [
    'Diferimiento de impuestos sobre ganancias de inversión',
    'Transferencia eficiente a beneficiarios',
    'Protección ante reclamaciones de acreedores (según jurisdicción)',
  ];

  return (
    <SlideLayout id="slide-12" background="#ffffff">
      <div className="flex h-full">
        {/* Left image */}
        <div className="w-64 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80"
            alt="Family protection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 40%, rgba(255,255,255,1))' }} />
          <div
            className="absolute top-6 left-4 px-3 py-1 rounded"
            style={{ background: '#45ac41' }}
          >
            <span className="font-montserrat font-bold" style={{ fontSize: '10px', color: '#ffffff', letterSpacing: '0.1em' }}>
              PRODUCTO 03
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-10 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="onLight" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Insurance-Linked Investment Solutions
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '24px', color: '#45ac41', lineHeight: 1.2 }}>
            AWM Life & Investment Shield™
          </h2>
          <p className="font-montserrat font-semibold mb-4" style={{ fontSize: '14px', color: '#12331c' }}>
            Protección + Crecimiento Patrimonial
          </p>

          <p className="font-montserrat font-light mb-5" style={{ fontSize: '12px', color: '#224b2d', lineHeight: 1.7 }}>
            Vehículos híbridos que combinan crecimiento de activos con protección, planificación patrimonial
            y eficiencia fiscal transfronteriza. El instrumento ideal para quienes piensan en generaciones.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {/* Benefits */}
            <div className="col-span-1">
              <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Beneficios
              </p>
              <div className="space-y-1.5">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0 mt-0.5">
                      <polyline points="2,6 5,9 10,3" fill="none" stroke="#45ac41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-montserrat" style={{ fontSize: '10px', color: '#2c2c2c', lineHeight: 1.4 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="col-span-1">
              <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Casos de Uso
              </p>
              <div className="space-y-2">
                {useCases.map((u, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ fontSize: '14px' }}>{u.icon}</span>
                    <div>
                      <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: '#12331c' }}>{u.title}</p>
                      <p className="font-montserrat font-light" style={{ fontSize: '9px', color: '#224b2d' }}>{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax benefits */}
            <div className="col-span-1">
              <div className="h-full p-3 rounded-xl" style={{ background: '#12331c' }}>
                <p className="font-montserrat font-semibold mb-2" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Ventajas Fiscales
                </p>
                <div className="space-y-2">
                  {taxBenefits.map((t, i) => (
                    <p key={i} className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>
                      • {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
