import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide05_Principios() {
  const principles = [
    {
      num: '01',
      title: 'CAPITAL PRESERVATION',
      desc: 'Proteger el principal es la base de la creación sostenible de riqueza. La preservación del capital es nuestra prioridad absoluta antes de cualquier estrategia de crecimiento.',
      color: '#45ac41',
      bg: '#f8fdf8',
    },
    {
      num: '02',
      title: 'GLOBAL DIVERSIFICATION',
      desc: 'Exposición a múltiples geografías, clases de activos y estrategias para mitigar riesgos sistémicos y capturar oportunidades donde se presenten.',
      color: '#2a6d2f',
      bg: '#f0faf0',
    },
    {
      num: '03',
      title: 'STRUCTURE BEFORE RETURNS',
      desc: 'La eficiencia legal, planificación fiscal y estrategia sucesoria son tan importantes como el rendimiento. Sin estructura, el rendimiento es temporal.',
      color: '#224b2d',
      bg: '#edf8ed',
    },
  ];

  return (
    <SlideLayout id="slide-5" background="#ffffff">
      <div className="flex h-full">
        {/* Left image */}
        <div className="w-72 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
            alt="Solid foundations"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, transparent 40%, rgba(255,255,255,0.95))' }}
          />
          <div className="absolute bottom-6 left-6">
            <span className="font-montserrat font-bold" style={{ color: '#ffffff', fontSize: '40px', opacity: 0.4 }}>05</span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <div className="flex items-center gap-4 mb-6">
            <AWMLogo variant="onLight" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Filosofía de Inversión
          </p>
          <h2 className="font-montserrat font-bold mb-2" style={{ fontSize: '32px', color: '#12331c', lineHeight: 1.15 }}>
            Preserve First,{' '}
            <span style={{ color: '#45ac41' }}>Grow Second</span>
          </h2>
          <p className="font-montserrat font-light mb-6" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.6 }}>
            Nuestra filosofía de inversión se fundamenta en tres principios que guían cada decisión patrimonial.
          </p>

          <div className="space-y-4">
            {principles.map((p) => (
              <div
                key={p.num}
                className="flex gap-5 p-5 rounded-xl"
                style={{
                  background: p.bg,
                  border: `1px solid ${p.color}22`,
                  boxShadow: '0 2px 12px rgba(18,51,28,0.06)',
                }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="font-montserrat font-bold"
                    style={{ fontSize: '42px', color: p.color, lineHeight: 1, opacity: 0.9 }}
                  >
                    {p.num}
                  </span>
                </div>
                <div>
                  <p
                    className="font-montserrat font-bold mb-1"
                    style={{ fontSize: '13px', color: p.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {p.title}
                  </p>
                  <p className="font-montserrat font-light" style={{ fontSize: '12px', color: '#2c2c2c', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
