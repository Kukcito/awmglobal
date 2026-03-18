import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide19_Tecnologia() {
  const features = [
    {
      icon: '📱',
      title: 'Acceso Multi-Dispositivo',
      items: ['Web platform, iOS y Android', 'Autenticación multi-factor (MFA)', 'Encriptación de grado bancario'],
    },
    {
      icon: '📊',
      title: 'Reportería en Tiempo Real',
      items: ['Consolidación multi-custodio', 'Valuación mark-to-market', 'Performance attribution detallado'],
    },
    {
      icon: '📈',
      title: 'Analytics Avanzado',
      items: ['Análisis de riesgo (VaR, stress testing)', 'Proyecciones de escenarios', 'Tax reporting automatizado'],
    },
    {
      icon: '🔔',
      title: 'Alertas Inteligentes',
      items: ['Movimientos de cuenta en tiempo real', 'Rebalanceos ejecutados', 'Cambios materiales en portafolio'],
    },
    {
      icon: '🗂️',
      title: 'Documentación Central',
      items: ['Contratos y acuerdos digitales', 'Estados de cuenta históricos', 'Reportes fiscales consolidados'],
    },
    {
      icon: '🔒',
      title: 'Seguridad de Datos',
      items: ['Encriptación AES-256', 'Servidores certificados ISO', 'Backups redundantes globales'],
    },
  ];

  return (
    <SlideLayout id="slide-19" background="#ffffff">
      <div className="flex h-full">
        <div className="flex-1 flex flex-col px-12 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="onLight" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Plataforma Digital AWM
          </p>
          <h2 className="font-montserrat font-bold mb-4" style={{ fontSize: '28px', color: '#12331c', lineHeight: 1.2 }}>
            Acceso Total a Tu Patrimonio,{' '}
            <span style={{ color: '#45ac41' }}>Siempre</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 flex-1">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-xl flex flex-col"
                style={{
                  background: '#f8fdf8',
                  border: '1px solid #e8f5e9',
                  borderTop: '3px solid #45ac41',
                  boxShadow: '0 2px 8px rgba(18,51,28,0.06)',
                }}
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <p
                  className="font-montserrat font-bold mb-2"
                  style={{ fontSize: '12px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {f.title}
                </p>
                <div className="space-y-1.5 flex-1">
                  {f.items.map((item, j) => (
                    <p key={j} className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d', lineHeight: 1.5 }}>
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-4 p-4 rounded-xl text-center"
            style={{ background: 'linear-gradient(135deg, #12331c, #224b2d)' }}
          >
            <p className="font-montserrat font-semibold" style={{ fontSize: '13px', color: '#ffffff' }}>
              Transparencia 24/7 •{' '}
              <span style={{ color: '#45ac41' }}>Sin intermediarios</span>
              {' '}•{' '}
              <span style={{ color: '#d7ead9' }}>Acceso directo a tu capital en todo momento</span>
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="w-60 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
            alt="Digital platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95), transparent 30%)' }} />
          <div className="absolute bottom-6 right-4">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '36px', opacity: 0.5 }}>19</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
