import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide16_Comparativa() {
  const rows = [
    {
      num: '01',
      solution: 'AWM Global Markets™',
      profile: 'Inversionista activo',
      objective: 'Ejecución y trading',
      term: 'Corto / Medio',
      color: '#12331c',
    },
    {
      num: '02',
      solution: 'AWM Structured Solutions™',
      profile: 'Conservador',
      objective: 'Protección + rendimiento',
      term: 'Medio / Largo',
      color: '#224b2d',
    },
    {
      num: '03',
      solution: 'AWM Life & Investment Shield™',
      profile: 'Familiar multi-generacional',
      objective: 'Protección + sucesión',
      term: 'Largo plazo',
      color: '#2a6d2f',
    },
    {
      num: '04',
      solution: 'AWM Trust & Fiduciary™',
      profile: 'Empresario / UHNWI',
      objective: 'Estructuración patrimonial',
      term: 'Largo plazo',
      color: '#3a9336',
    },
    {
      num: '05',
      solution: 'AWM Digital Assets Desk™',
      profile: 'Innovador institucional',
      objective: 'Diversificación alternativa',
      term: 'Medio / Largo',
      color: '#45ac41',
    },
    {
      num: '06',
      solution: 'AWM Private Mandates™',
      profile: 'Delegación total',
      objective: 'Gestión discrecional',
      term: 'Medio / Largo',
      color: '#69b32d',
    },
  ];

  return (
    <SlideLayout id="slide-16" background="#ffffff">
      <div className="flex h-full">
        {/* Left narrow bar */}
        <div className="w-10 flex-shrink-0" style={{ background: 'linear-gradient(to bottom, #12331c, #45ac41)' }} />

        <div className="flex-1 flex flex-col px-12 py-8">
          <div className="flex items-center gap-4 mb-5">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Guía de Selección
          </p>
          <h2 className="font-montserrat font-bold mb-5" style={{ fontSize: '28px', color: '#12331c', lineHeight: 1.2 }}>
            Encuentra la Solución{' '}
            <span style={{ color: '#45ac41' }}>Adecuada para Tu Perfil</span>
          </h2>

          {/* Table */}
          <div className="flex-1 flex flex-col" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8f5e9' }}>
            {/* Header */}
            <div
              className="grid grid-cols-4 gap-0"
              style={{ background: '#12331c', padding: '12px 16px' }}
            >
              {['Solución AWM', 'Perfil Ideal', 'Objetivo Principal', 'Plazo'].map((h) => (
                <p key={h} className="font-montserrat font-semibold" style={{ fontSize: '11px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {h}
                </p>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-0 items-center"
                style={{
                  padding: '10px 16px',
                  background: i % 2 === 0 ? '#ffffff' : '#f8fdf8',
                  borderBottom: '1px solid #e8f5e9',
                  borderLeft: `4px solid ${row.color}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-montserrat font-bold"
                    style={{ fontSize: '9px', color: row.color, width: '22px', flexShrink: 0 }}
                  >
                    {row.num}
                  </span>
                  <p className="font-montserrat font-semibold" style={{ fontSize: '11px', color: '#12331c' }}>
                    {row.solution}
                  </p>
                </div>
                <p className="font-montserrat" style={{ fontSize: '11px', color: '#224b2d' }}>{row.profile}</p>
                <p className="font-montserrat" style={{ fontSize: '11px', color: '#224b2d' }}>{row.objective}</p>
                <div
                  className="inline-flex items-center px-2 py-0.5 rounded"
                  style={{ background: `${row.color}15`, width: 'fit-content' }}
                >
                  <p className="font-montserrat font-medium" style={{ fontSize: '10px', color: row.color }}>
                    {row.term}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-lg" style={{ background: '#f0faf0', border: '1px solid #d7ead9' }}>
            <p className="font-montserrat font-medium text-center" style={{ fontSize: '12px', color: '#224b2d' }}>
              Los mandatos pueden combinarse e integrarse en una sola estrategia patrimonial unificada.
              Contáctenos para una propuesta personalizada.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
