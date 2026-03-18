import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide21_Seguridad() {
  const security = [
    { icon: '🔐', title: 'Segregación Total', desc: 'Cuentas completamente separadas. Zero commingling con activos de AWM.' },
    { icon: '🏦', title: 'Custodios Tier 1', desc: 'Solo instituciones reguladas. Protección de inversores hasta límites legales.' },
    { icon: '🛡️', title: 'Protección Legal', desc: 'Estructuras fiduciarias cuando aplicable. Asset protection strategies avanzadas.' },
    { icon: '📋', title: 'Auditoría Continua', desc: 'Auditorías externas anuales. Reconciliación diaria de posiciones.' },
    { icon: '💎', title: 'Diversificación de Custodios', desc: 'Opción de múltiples custodios para mitigar riesgo de contraparte.' },
  ];

  const comparison = [
    { aspect: 'Custodia de activos', awm: 'Segregada — cliente es propietario', traditional: 'A menudo pooled / omnibus' },
    { aspect: 'Transparencia', awm: 'Total, acceso 24/7 en tiempo real', traditional: 'Limitada, reportes mensuales' },
    { aspect: 'Conflictos de interés', awm: 'Arquitectura abierta, sin productos propios', traditional: 'Venden y recomiendan productos propios' },
    { aspect: 'Acceso a activos', awm: 'Directo del cliente al custodio', traditional: 'A través del intermediario' },
    { aspect: 'Protección', awm: 'Multi-capa institucional', traditional: 'Variable según proveedor' },
  ];

  return (
    <SlideLayout id="slide-21" background="#ffffff">
      <div className="flex flex-col h-full px-12 py-8">
        <div className="flex items-center gap-4 mb-4">
          <AWMLogo variant="onLight" size="sm" />
          <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
        </div>

        <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
          Seguridad Institucional
        </p>
        <h2 className="font-montserrat font-bold mb-4" style={{ fontSize: '26px', color: '#12331c', lineHeight: 1.2 }}>
          Tu Capital, Protegido a{' '}
          <span style={{ color: '#45ac41' }}>Nivel Institucional</span>
        </h2>

        <div className="flex gap-6 flex-1">
          {/* Left: 5 security pillars */}
          <div className="w-72 flex-shrink-0">
            <div className="space-y-2">
              {security.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: '#f8fdf8', border: '1px solid #e8f5e9' }}
                >
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <p className="font-montserrat font-bold" style={{ fontSize: '11px', color: '#12331c' }}>{s.title}</p>
                    <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d', lineHeight: 1.4 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: comparison table */}
          <div className="flex-1">
            <p className="font-montserrat font-semibold mb-3" style={{ fontSize: '11px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              AWM vs. Modelo Tradicional
            </p>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8f5e9' }}>
              {/* Header */}
              <div className="grid grid-cols-3" style={{ background: '#12331c', padding: '10px 12px' }}>
                {['Aspecto', 'AWM Global ✅', 'Modelo Tradicional ❌'].map((h, i) => (
                  <p key={i} className="font-montserrat font-semibold" style={{ fontSize: '10px', color: i === 1 ? '#45ac41' : '#ffffff', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                    {h}
                  </p>
                ))}
              </div>

              {comparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3"
                  style={{
                    padding: '8px 12px',
                    background: i % 2 === 0 ? '#ffffff' : '#f8fdf8',
                    borderBottom: '1px solid #e8f5e9',
                  }}
                >
                  <p className="font-montserrat font-semibold" style={{ fontSize: '10px', color: '#12331c', paddingRight: '8px' }}>{row.aspect}</p>
                  <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#2a6d2f', paddingRight: '8px', lineHeight: 1.4 }}>{row.awm}</p>
                  <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#9ca3af', paddingRight: '8px', lineHeight: 1.4 }}>{row.traditional}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-3 p-3 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #12331c, #224b2d)', border: '1px solid #45ac41' }}
            >
              <p className="font-montserrat font-medium text-center" style={{ fontSize: '12px', color: '#ffffff' }}>
                Con AWM, tus activos están protegidos{' '}
                <span style={{ color: '#45ac41' }}>siempre — incluso si AWM dejara de operar.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
