import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide20_Compliance() {
  const complianceItems = [
    'Marcos regulatorios reconocidos internacionalmente',
    'Adherencia a mejores prácticas globales de la industria',
    'Auditorías externas periódicas y reconciliación diaria',
    'Segregación total de activos de clientes',
  ];

  const kycAml = [
    'Know Your Customer (KYC) detallado y verificación de identidad',
    'Anti-Money Laundering (AML) screening continuo',
    'Source of funds verification rigurosa',
    'Ongoing monitoring de transacciones sospechosas',
    'Cumplimiento con FATCA y CRS (reportes fiscales internacionales)',
  ];

  const protection = [
    { icon: '👤', title: 'Cuentas a nombre del cliente', desc: 'No en estructura omnibus' },
    { icon: '🔒', title: 'Custodios regulados', desc: 'Con seguro de inversores' },
    { icon: '📊', title: 'Transparencia de fees', desc: 'Sin costos ocultos' },
    { icon: '📋', title: 'Reportería regulatoria', desc: 'A entes competentes' },
  ];

  return (
    <SlideLayout id="slide-20" background="linear-gradient(135deg, #12331c 0%, #1a3e24 100%)">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              Regulación & Compliance
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '26px', color: '#ffffff', lineHeight: 1.2 }}>
              Operamos Bajo los Más Altos{' '}
              <span style={{ color: '#45ac41' }}>Estándares Internacionales</span>
            </h2>
          </div>
          <AWMLogo variant="dark" size="sm" />
        </div>

        <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        <div className="grid grid-cols-3 gap-4 flex-1">
          {/* Compliance Framework */}
          <div>
            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Marco de Compliance
            </p>
            <div
              className="p-4 rounded-xl h-auto"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(69,172,65,0.25)' }}
            >
              <div className="space-y-3">
                {complianceItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 mt-0.5">
                      <circle cx="7" cy="7" r="6" fill="none" stroke="#45ac41" strokeWidth="1.2" />
                      <polyline points="4,7 6,9 10,5" fill="none" stroke="#45ac41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center justify-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <path d="M16 2L4 8v10c0 8.4 5.2 14.4 12 16 6.8-1.6 12-7.6 12-16V8L16 2z" fill="none" stroke="#45ac41" strokeWidth="1.5" />
                    <polyline points="10,16 14,20 22,12" fill="none" stroke="#45ac41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-montserrat font-semibold" style={{ fontSize: '12px', color: '#45ac41' }}>
                    Compliance Certificado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KYC/AML */}
          <div>
            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Procesos KYC / AML
            </p>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(69,172,65,0.25)' }}
            >
              <div className="space-y-2">
                {kycAml.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#45ac41' }} />
                    </div>
                    <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Investor Protection */}
          <div>
            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Protección de Inversores
            </p>
            <div className="grid grid-cols-2 gap-3">
              {protection.map((p, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(69,172,65,0.2)' }}
                >
                  <div className="text-xl mb-1">{p.icon}</div>
                  <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: '#ffffff' }}>{p.title}</p>
                  <p className="font-montserrat font-light" style={{ fontSize: '9px', color: '#459860' }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-3 p-4 rounded-xl"
              style={{ background: 'rgba(69,172,65,0.1)', border: '1px solid #45ac41' }}
            >
              <p className="font-montserrat font-medium" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.5 }}>
                La seguridad de los activos de nuestros clientes no es negociable. Es el pilar fundamental de nuestra operación.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
