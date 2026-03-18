import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide17_Implementacion() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Onboarding',
      bullets: [
        'Consulta inicial confidencial y sin compromiso',
        'Análisis de situación patrimonial actual',
        'Definición de objetivos y restricciones',
      ],
      duration: '1–2 semanas',
      color: '#12331c',
    },
    {
      num: '02',
      title: 'Estrategia Personalizada',
      bullets: [
        'Diseño de solución integrada a medida',
        'Selección de custodios y estructuras',
        'Propuesta de asset allocation',
      ],
      duration: '2–3 semanas',
      color: '#224b2d',
    },
    {
      num: '03',
      title: 'Implementación',
      bullets: [
        'Apertura de cuentas segregadas',
        'Transferencia y custodia de activos',
        'Activación de todos los servicios',
      ],
      duration: '3–4 semanas',
      color: '#2a6d2f',
    },
    {
      num: '04',
      title: 'Gestión Continua',
      bullets: [
        'Monitoreo proactivo del portafolio',
        'Rebalanceo según estrategia acordada',
        'Reportería periódica y comunicación',
      ],
      duration: 'Ongoing',
      color: '#45ac41',
    },
    {
      num: '05',
      title: 'Optimización Anual',
      bullets: [
        'Revisiones anuales de estrategia',
        'Ajustes según cambios en objetivos',
        'Incorporación de nuevos vehículos',
      ],
      duration: 'Anual',
      color: '#69b32d',
    },
  ];

  return (
    <SlideLayout id="slide-17" background="linear-gradient(135deg, #12331c 0%, #1a3e24 100%)">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              Nuestro Proceso
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '28px', color: '#ffffff', lineHeight: 1.2 }}>
              Cómo Trabajamos:{' '}
              <span style={{ color: '#45ac41' }}>Del Análisis a la Ejecución</span>
            </h2>
          </div>
          <AWMLogo variant="dark" size="sm" />
        </div>

        <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        {/* Steps in a horizontal row */}
        <div className="flex gap-3 flex-1 items-stretch">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col" style={{ position: 'relative' }}>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-10 z-10"
                  style={{ transform: 'translateX(50%)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <polyline points="4,4 12,8 4,12" fill="none" stroke="#45ac41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div
                className="h-full p-5 rounded-xl flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${step.color}60`,
                  borderTop: `4px solid ${step.color}`,
                }}
              >
                {/* Number */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-montserrat font-bold"
                    style={{ fontSize: '28px', color: step.color, lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `${step.color}40` }} />
                </div>

                {/* Title */}
                <p
                  className="font-montserrat font-bold mb-3"
                  style={{ fontSize: '12px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {step.title}
                </p>

                {/* Bullets */}
                <div className="space-y-2 flex-1">
                  {step.bullets.map((b, j) => (
                    <p key={j} className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>
                      • {b}
                    </p>
                  ))}
                </div>

                {/* Duration badge */}
                <div
                  className="mt-3 px-2 py-1 rounded text-center"
                  style={{ background: `${step.color}20`, border: `1px solid ${step.color}40` }}
                >
                  <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: step.color }}>
                    ⏱️ {step.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-montserrat font-light text-center" style={{ fontSize: '12px', color: '#459860' }}>
            Proceso diseñado para máxima eficiencia y mínima fricción — sin burocracia innecesaria.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
