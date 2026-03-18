import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide24_CTA() {
  const steps = [
    {
      icon: '📞',
      title: 'Conversación Exploratoria',
      desc: 'Sin compromiso. Confidencial. Entendemos tus objetivos y situación actual.',
      duration: '30 min',
      color: '#12331c',
    },
    {
      icon: '📊',
      title: 'Análisis Preliminar',
      desc: 'Revisión de estructura patrimonial e identificación de oportunidades de optimización.',
      duration: '1-2 sem.',
      color: '#2a6d2f',
    },
    {
      icon: '📋',
      title: 'Propuesta Formal',
      desc: 'Estrategia personalizada, fee structure transparente y roadmap de implementación.',
      duration: '2-3 sem.',
      color: '#45ac41',
    },
    {
      icon: '🤝',
      title: 'Onboarding',
      desc: 'Apertura de cuentas segregadas, transferencia de activos y activación de servicios.',
      duration: '3-4 sem.',
      color: '#69b32d',
    },
  ];

  return (
    <SlideLayout id="slide-24" background="#ffffff">
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 flex flex-col px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Comienza Hoy
          </p>
          <h2 className="font-montserrat font-bold mb-2" style={{ fontSize: '28px', color: '#12331c', lineHeight: 1.2 }}>
            Construyamos Juntos{' '}
            <span style={{ color: '#45ac41' }}>Tu Futuro Financiero</span>
          </h2>
          <p className="font-montserrat font-light mb-5" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.7 }}>
            La preservación de capital es el primer paso hacia el crecimiento sostenible.
            Agenda una consulta confidencial con nuestro equipo de advisors senior.
          </p>

          {/* Process steps */}
          <div className="space-y-3 flex-1">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: '#f8fdf8',
                  border: '1px solid #e8f5e9',
                  borderLeft: `4px solid ${s.color}`,
                }}
              >
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{s.icon}</span>
                <div className="flex-1">
                  <p className="font-montserrat font-bold" style={{ fontSize: '12px', color: s.color }}>{s.title}</p>
                  <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#2c2c2c', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                <div
                  className="flex-shrink-0 px-2 py-1 rounded"
                  style={{ background: `${s.color}15` }}
                >
                  <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: s.color }}>{s.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#9ca3af' }}>
              Inversión mínima recomendada: USD $500,000 | Mandatos institucionales: USD $2,000,000+
            </p>
          </div>
        </div>

        {/* Right CTA panel */}
        <div
          className="w-72 flex-shrink-0 flex flex-col justify-center px-8 py-8 relative"
          style={{ background: 'linear-gradient(135deg, #12331c, #1a3e24)' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              borderRadius: '0',
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(69,172,65,0.2)', border: '2px solid #45ac41' }}>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <polyline points="4,14 11,21 24,7" fill="none" stroke="#45ac41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-montserrat font-bold" style={{ fontSize: '16px', color: '#ffffff', lineHeight: 1.3 }}>
                Agenda una Consulta<br />
                <span style={{ color: '#45ac41' }}>Estratégica</span>
              </p>
            </div>

            <div className="space-y-4">
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(69,172,65,0.3)' }}
              >
                <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#459860', marginBottom: '2px' }}>Email</p>
                <p className="font-montserrat font-semibold" style={{ fontSize: '13px', color: '#ffffff' }}>info@awmglobal.net</p>
              </div>

              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(69,172,65,0.3)' }}
              >
                <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#459860', marginBottom: '2px' }}>Website</p>
                <p className="font-montserrat font-semibold" style={{ fontSize: '13px', color: '#ffffff' }}>www.awmglobal.net</p>
              </div>

              <div
                className="p-4 rounded-xl text-center"
                style={{ background: '#45ac41' }}
              >
                <p className="font-montserrat font-bold" style={{ fontSize: '14px', color: '#ffffff' }}>
                  Contáctanos Ahora
                </p>
                <p className="font-montserrat font-light" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>
                  Consulta sin compromiso
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="font-montserrat font-light italic text-center" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.5 }}>
                "Capital preservation as a source of continuity"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
