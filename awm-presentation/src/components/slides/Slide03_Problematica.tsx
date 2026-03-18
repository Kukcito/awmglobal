import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide03_Problematica() {
  const problems = [
    'Servicios dispersos entre múltiples proveedores sin coordinación central',
    'Falta de consolidación patrimonial: visión fragmentada del portafolio total',
    'Transparencia limitada y reportería inconsistente entre instituciones',
    'Dificultad para tomar decisiones integradas de inversión y protección',
    'Riesgos de duplicidad de costos y conflictos de interés no revelados',
    'Complejidad regulatoria y fiscal transfronteriza sin asesoría experta',
  ];

  return (
    <SlideLayout id="slide-3" background="#ffffff">
      <div className="flex h-full">
        {/* Left image panel */}
        <div className="w-80 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
            alt="Financial complexity"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.95))' }}
          />
          {/* Slide number */}
          <div className="absolute bottom-6 left-6">
            <span className="font-montserrat font-bold" style={{ color: '#12331c', fontSize: '40px', opacity: 0.3 }}>03</span>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8 relative">
          {/* Top bar */}
          <div className="flex items-center gap-4 mb-6">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1" />
          </div>

          <div className="mb-2">
            <span
              className="font-montserrat font-light uppercase tracking-widest"
              style={{ fontSize: '11px', color: '#459860', letterSpacing: '0.2em' }}
            >
              El Contexto del Inversionista Moderno
            </span>
          </div>

          <h2
            className="font-montserrat font-bold mb-1"
            style={{ fontSize: '32px', color: '#12331c', lineHeight: 1.2 }}
          >
            El Desafío de la
          </h2>
          <h2
            className="font-montserrat font-bold mb-6"
            style={{ fontSize: '32px', color: '#45ac41', lineHeight: 1.2 }}
          >
            Fragmentación Financiera
          </h2>

          <div
            className="h-px w-16 mb-6"
            style={{ background: '#45ac41' }}
          />

          <div className="space-y-3">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: '#fff0f0', border: '1.5px solid #ef4444' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <line x1="2" y1="2" x2="8" y2="8" stroke="#ef4444" strokeWidth="1.5" />
                    <line x1="8" y1="2" x2="2" y2="8" stroke="#ef4444" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="font-montserrat" style={{ fontSize: '13px', color: '#2c2c2c', lineHeight: 1.5 }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom conclusion */}
          <div
            className="mt-6 p-4 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #12331c, #224b2d)' }}
          >
            <p
              className="font-montserrat font-semibold text-center"
              style={{ fontSize: '14px', color: '#ffffff', lineHeight: 1.5 }}
            >
              El problema no es la falta de opciones.{' '}
              <span style={{ color: '#45ac41' }}>Es la falta de integración.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
