import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide06_Diferenciadores() {
  const cards = [
    {
      icon: '🏦',
      title: 'Custodios Tier 1',
      desc: 'Partnerships exclusivos con custodios globales de primer nivel. Cuentas completamente segregadas y protegidas.',
    },
    {
      icon: '🌍',
      title: 'Compliance Internacional',
      desc: 'Marcos regulatorios reconocidos globalmente. Auditorías externas periódicas y reportería institucional.',
    },
    {
      icon: '🔓',
      title: 'Arquitectura Abierta',
      desc: 'Acceso directo a mercados globales sin conflictos de interés. No vendemos productos propios.',
    },
    {
      icon: '📊',
      title: 'Consolidación Total',
      desc: 'Una sola relación de asesoría. Visión unificada de todo tu patrimonio en tiempo real.',
    },
    {
      icon: '🛡️',
      title: 'Protección de Capital',
      desc: 'Diseño orientado al largo plazo con estructuras avanzadas de mitigación de riesgo.',
    },
    {
      icon: '💼',
      title: 'Enfoque Institucional',
      desc: 'Estándares de family offices. Servicio personalizado con advisors senior dedicados.',
    },
  ];

  return (
    <SlideLayout id="slide-6" background="linear-gradient(135deg, #12331c 0%, #1a3e24 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              Ventajas Competitivas
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '30px', color: '#ffffff', lineHeight: 1.2 }}>
              ¿Por Qué Elegir{' '}
              <span style={{ color: '#45ac41' }}>AWM Global?</span>
            </h2>
          </div>
          <AWMLogo variant="dark" size="sm" />
        </div>

        <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(69,172,65,0.25)',
                borderTop: '4px solid #45ac41',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <p
                className="font-montserrat font-bold mb-2"
                style={{ fontSize: '13px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                {card.title}
              </p>
              <p className="font-montserrat font-light" style={{ fontSize: '12px', color: '#d7ead9', lineHeight: 1.6, flex: 1 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="font-montserrat font-medium text-center" style={{ fontSize: '12px', color: '#459860' }}>
            www.awmglobal.net — info@awmglobal.net
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
