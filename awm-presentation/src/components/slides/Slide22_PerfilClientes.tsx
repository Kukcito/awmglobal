import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide22_PerfilClientes() {
  const profiles = [
    {
      icon: '👤',
      title: 'High Net Worth Individuals',
      tag: 'HNWI',
      desc: 'Patrimonio líquido USD $1M+. Buscan consolidación, sofisticación y planificación patrimonial integral.',
      color: '#12331c',
    },
    {
      icon: '💎',
      title: 'Ultra High Net Worth',
      tag: 'UHNWI',
      desc: 'Patrimonio USD $10M+. Necesidades de family office, estructuración multi-jurisdiccional y sucesión compleja.',
      color: '#224b2d',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Familias Multi-Generacionales',
      tag: 'FAMILY OFFICE',
      desc: 'Planificación sucesoria compleja, gobierno familiar, educación financiera de herederos y continuidad patrimonial.',
      color: '#2a6d2f',
    },
    {
      icon: '🏢',
      title: 'Corporate Treasury',
      tag: 'EMPRESAS',
      desc: 'Empresas con excedentes de liquidez. Gestión profesional de tesorería y diversificación más allá de la banca.',
      color: '#45ac41',
    },
    {
      icon: '🏛️',
      title: 'Instituciones',
      tag: 'INSTITUCIONAL',
      desc: 'Fundaciones, endowments, fondos de pensiones y asociaciones que requieren gestión patrimonial especializada.',
      color: '#69b32d',
    },
  ];

  const traits = [
    'Valoran disciplina sobre especulación',
    'Priorizan preservación de capital ante todo',
    'Buscan transparencia total en su patrimonio',
    'Requieren asesoría fiduciaria especializada',
    'Piensan en generaciones, no en quarters',
    'Demandan accountability e integridad',
  ];

  return (
    <SlideLayout id="slide-22" background="linear-gradient(180deg, #ffffff 0%, #f8fdf8 100%)">
      <div className="flex h-full">
        {/* Left image */}
        <div className="w-60 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
            alt="High net worth clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 40%, rgba(248,253,248,1))' }} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col px-10 py-8">
          <div className="flex items-center gap-4 mb-4">
            <AWMLogo variant="onLight" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Segmento de Clientes
          </p>
          <h2 className="font-montserrat font-bold mb-4" style={{ fontSize: '26px', color: '#12331c', lineHeight: 1.2 }}>
            Para Quién{' '}
            <span style={{ color: '#45ac41' }}>Trabajamos</span>
          </h2>

          <div className="flex gap-5 flex-1">
            {/* Profiles */}
            <div className="flex-1">
              <div className="space-y-2">
                {profiles.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e8f5e9',
                      borderLeft: `4px solid ${p.color}`,
                      boxShadow: '0 1px 4px rgba(18,51,28,0.05)',
                    }}
                  >
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{p.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-montserrat font-bold" style={{ fontSize: '12px', color: p.color }}>{p.title}</p>
                        <span
                          className="font-montserrat font-bold px-1.5 py-0.5 rounded"
                          style={{ fontSize: '8px', background: p.color, color: '#ffffff' }}
                        >
                          {p.tag}
                        </span>
                      </div>
                      <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#224b2d', lineHeight: 1.5 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common traits */}
            <div className="w-56 flex-shrink-0">
              <div
                className="h-full p-4 rounded-xl flex flex-col"
                style={{ background: '#12331c' }}
              >
                <p className="font-montserrat font-bold mb-4" style={{ fontSize: '12px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Características Comunes
                </p>
                <div className="space-y-3 flex-1">
                  {traits.map((t, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="flex-shrink-0 mt-0.5">
                        <circle cx="7" cy="7" r="6" fill="#45ac41" opacity="0.3" />
                        <polyline points="4,7 6,9 10,5" fill="none" stroke="#45ac41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#d7ead9', lineHeight: 1.5 }}>{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="font-montserrat font-medium text-center" style={{ fontSize: '10px', color: '#459860' }}>
                    Si esto te describe, AWM es tu socio ideal.
                  </p>
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
