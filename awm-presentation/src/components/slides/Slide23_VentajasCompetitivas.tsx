import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide23_VentajasCompetitivas() {
  const advantages = [
    { icon: '🔗', title: 'Integración Total', desc: 'Todos los servicios en un único ecosistema unificado sin fragmentación' },
    { icon: '🏛️', title: 'Arquitectura Abierta', desc: 'Sin conflictos de interés, acceso directo a mercados institucionales' },
    { icon: '🏦', title: 'Custodios Tier 1', desc: 'Solo las instituciones más sólidas y reguladas del mundo' },
    { icon: '🔐', title: 'Cuentas Segregadas', desc: 'Tus activos completamente separados y protegidos siempre' },
    { icon: '🌍', title: 'Compliance Internacional', desc: 'Marcos regulatorios globales reconocidos y auditados' },
    { icon: '📊', title: 'Transparencia 24/7', desc: 'Acceso total a tu patrimonio en tiempo real, sin opacidad' },
    { icon: '💯', title: 'Fee-Only Model', desc: 'Sin comisiones ocultas — intereses 100% alineados con el cliente' },
    { icon: '🎯', title: 'Experiencia Institucional', desc: 'Estándares de family office para cada perfil de cliente' },
    { icon: '⏳', title: 'Filosofía de Largo Plazo', desc: 'Preservación primero, crecimiento segundo — siempre' },
    { icon: '🤝', title: 'Servicio Personalizado', desc: 'Relación directa con advisors senior dedicados al cliente' },
  ];

  return (
    <SlideLayout id="slide-23" background="linear-gradient(135deg, #0b1610 0%, #12331c 50%, #1a3e24 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              Resumen Ejecutivo
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '28px', color: '#ffffff', lineHeight: 1.2 }}>
              Por Qué AWM Es{' '}
              <span style={{ color: '#45ac41' }}>Diferente</span>
            </h2>
          </div>
          <AWMLogo variant="dark" size="sm" />
        </div>

        <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        <div className="grid grid-cols-5 gap-3 flex-1">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="p-4 rounded-xl flex flex-col items-start"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(69,172,65,0.2)',
                borderTop: '3px solid #45ac41',
              }}
            >
              <div className="text-2xl mb-2">{a.icon}</div>
              <p className="font-montserrat font-bold mb-1" style={{ fontSize: '11px', color: '#45ac41', lineHeight: 1.3 }}>
                {a.title}
              </p>
              <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-4 p-4 rounded-xl"
          style={{ background: 'rgba(69,172,65,0.1)', border: '1px solid #45ac41' }}
        >
          <p className="font-montserrat font-semibold text-center" style={{ fontSize: '14px', color: '#ffffff' }}>
            AWM Global:{' '}
            <span style={{ color: '#45ac41' }}>Tu Socio Estratégico en Wealth Management</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
