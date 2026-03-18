import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide07_AccesoInstitucional() {
  const access = [
    'Mercados accionarios globales (Global equity markets)',
    'Renta fija internacional (International fixed income)',
    'Productos estructurados (Structured products)',
    'Derivados listados (Listed derivatives)',
    'Vehículos fiduciarios y trusts (Trust & fiduciary vehicles)',
    'Inversiones vinculadas a seguros (Insurance-linked investments)',
    'Activos digitales institucionales (Institutional digital assets)',
    'Mandatos discrecionales de portafolio (Discretionary mandates)',
  ];

  return (
    <SlideLayout id="slide-7" background="#ffffff">
      <div className="flex h-full">
        {/* Left narrow column */}
        <div
          className="w-12 flex-shrink-0"
          style={{ background: 'linear-gradient(to bottom, #12331c, #45ac41)' }}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <div className="flex items-center gap-4 mb-5">
            <AWMLogo variant="light" size="sm" />
            <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          </div>

          <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
            Acceso Global
          </p>
          <h2 className="font-montserrat font-bold mb-1" style={{ fontSize: '28px', color: '#12331c', lineHeight: 1.2 }}>
            Open Architecture.
          </h2>
          <h2 className="font-montserrat font-bold mb-4" style={{ fontSize: '28px', color: '#45ac41', lineHeight: 1.2 }}>
            Institutional Access.
          </h2>

          <p className="font-montserrat font-light mb-5" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.7 }}>
            Los clientes de AWM se benefician de acceso directo a los mercados e instrumentos más sofisticados del mundo,
            consolidados en una sola relación de asesoría con total transparencia y sin conflictos de interés.
          </p>

          {/* Access list - 2 columns */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {access.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#d7ead9' }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8">
                    <polyline points="1,4 4,7 9,1" fill="none" stroke="#45ac41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-montserrat" style={{ fontSize: '12px', color: '#2c2c2c', lineHeight: 1.4 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom highlight box */}
          <div
            className="p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #12331c, #224b2d)',
              border: '1px solid #45ac41',
            }}
          >
            <p className="font-montserrat font-bold text-center" style={{ fontSize: '14px', color: '#ffffff' }}>
              Todo consolidado dentro de una sola relación de asesoría.
            </p>
            <p className="font-montserrat font-light text-center mt-1" style={{ fontSize: '12px', color: '#d7ead9' }}>
              Sin complicaciones, sin fragmentación, con máxima eficiencia.
            </p>
          </div>
        </div>

        {/* Right image panel */}
        <div className="w-72 flex-shrink-0 relative" style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80"
            alt="Global network"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.9), transparent 40%), linear-gradient(to top, rgba(18,51,28,0.6), transparent)' }}
          />
          <div className="absolute bottom-6 right-6">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '40px', opacity: 0.5 }}>07</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
