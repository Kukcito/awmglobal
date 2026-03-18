import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide04_Solucion() {
  const services = [
    { label: 'Brokerage Internacional', angle: -90, icon: '📈' },
    { label: 'Asset Management', angle: -18, icon: '💼' },
    { label: 'Inversiones Vinculadas a Seguros', angle: 54, icon: '🛡️' },
    { label: 'Estructuras Fiduciarias', angle: 126, icon: '🏛️' },
    { label: 'Activos Digitales', angle: 198, icon: '🔗' },
  ];

  const benefits = [
    { icon: '✅', text: 'Mayor eficiencia en decisiones estratégicas' },
    { icon: '✅', text: 'Transparencia total y reportería unificada' },
    { icon: '✅', text: 'Control de riesgos centralizado' },
    { icon: '✅', text: 'Un solo punto de contacto para todo tu patrimonio' },
  ];

  return (
    <SlideLayout id="slide-4" background="linear-gradient(135deg, #12331c 0%, #1a3e24 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              La Solución AWM
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '30px', color: '#ffffff', lineHeight: 1.2 }}>
              Plataforma Unificada de{' '}
              <span style={{ color: '#45ac41' }}>Gestión Patrimonial</span>
            </h2>
          </div>
          <AWMLogo variant="dark" size="sm" />
        </div>

        <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        {/* Main content: ecosystem diagram + benefits */}
        <div className="flex-1 flex gap-8 items-center">
          {/* Ecosystem SVG */}
          <div className="flex-shrink-0 relative" style={{ width: '340px', height: '340px' }}>
            <svg width="340" height="340" viewBox="0 0 340 340">
              {/* Outer ring */}
              <circle cx="170" cy="170" r="150" fill="none" stroke="#45ac41" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
              <circle cx="170" cy="170" r="110" fill="none" stroke="#2a6d2f" strokeWidth="1" opacity="0.3" />

              {/* Center circle */}
              <circle cx="170" cy="170" r="55" fill="#45ac41" opacity="0.9" />
              <text x="170" y="162" textAnchor="middle" fill="white" fontSize="11" fontFamily="Montserrat,sans-serif" fontWeight="700">CLIENTE</text>
              <text x="170" y="177" textAnchor="middle" fill="white" fontSize="11" fontFamily="Montserrat,sans-serif" fontWeight="700">AWM</text>

              {/* Connector lines + nodes */}
              {services.map((svc, i) => {
                const rad = (svc.angle * Math.PI) / 180;
                const innerR = 65;
                const outerR = 140;
                const x1 = 170 + innerR * Math.cos(rad);
                const y1 = 170 + innerR * Math.sin(rad);
                const x2 = 170 + outerR * Math.cos(rad);
                const y2 = 170 + outerR * Math.sin(rad);
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#45ac41" strokeWidth="1.5" opacity="0.6" />
                    <circle cx={x2} cy={y2} r="14" fill="#1a3e24" stroke="#45ac41" strokeWidth="1.5" />
                    <text x={x2} y={y2 + 5} textAnchor="middle" fill="#45ac41" fontSize="12">{svc.icon}</text>
                  </g>
                );
              })}
            </svg>

            {/* Labels around SVG */}
            {services.map((svc, i) => {
              const rad = (svc.angle * Math.PI) / 180;
              const r = 178;
              const x = 170 + r * Math.cos(rad);
              const y = 170 + r * Math.sin(rad);
              return (
                <div
                  key={i}
                  className="absolute font-montserrat font-medium"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                    fontSize: '9px',
                    color: '#d7ead9',
                    width: '80px',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                >
                  {svc.label}
                </div>
              );
            })}
          </div>

          {/* Right side: description + benefits */}
          <div className="flex-1">
            <div
              className="p-6 rounded-lg mb-5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(69,172,65,0.3)' }}
            >
              <p className="font-montserrat font-light" style={{ fontSize: '14px', color: '#d7ead9', lineHeight: 1.7 }}>
                AWM integra en una sola plataforma servicios que tradicionalmente están dispersos entre múltiples proveedores,
                eliminando fricción, reduciendo costos y mejorando la visibilidad total sobre el patrimonio.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ fontSize: '16px' }}>{b.icon}</span>
                  <p className="font-montserrat font-medium" style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-5 p-4 rounded-lg"
              style={{ background: 'rgba(69,172,65,0.15)', border: '1px solid #45ac41' }}
            >
              <p className="font-montserrat font-bold text-center" style={{ fontSize: '13px', color: '#45ac41' }}>
                Todo en un único ecosistema internacional unificado
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
