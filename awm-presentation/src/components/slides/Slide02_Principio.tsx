import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide02_Principio() {
  return (
    <SlideLayout id="slide-2" background="#ffffff">
      <div className="flex h-full">
        {/* Left accent column */}
        <div
          className="w-16 flex-shrink-0 flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(to bottom, #12331c, #224b2d)' }}
        >
          <div className="flex flex-col items-center gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: '#45ac41', opacity: 1 - i * 0.12 }} />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-16 py-10 relative">
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1541618077-8b726fd03657?w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              opacity: 0.06,
            }}
          />

          <div className="relative z-10 max-w-4xl w-full">
            {/* Small logo top */}
            <div className="flex items-center gap-3 mb-8">
              <AWMLogo variant="light" size="sm" />
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #d7ead9, transparent)' }} />
            </div>

            {/* Main quote */}
            <div
              className="p-10 rounded-lg mb-8 relative"
              style={{
                background: 'linear-gradient(135deg, #f8fdf8, #ffffff)',
                border: '1px solid #d7ead9',
                boxShadow: '0 8px 40px rgba(18, 51, 28, 0.08)',
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 left-6 font-montserrat font-bold"
                style={{ fontSize: '80px', color: '#d7ead9', lineHeight: 1, fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              <div className="relative z-10">
                <p
                  className="font-montserrat font-bold mb-4"
                  style={{ fontSize: '28px', color: '#12331c', lineHeight: 1.35 }}
                >
                  AWM fue fundada sobre un principio simple:
                </p>
                <p
                  className="font-montserrat font-light"
                  style={{ fontSize: '28px', color: '#2a6d2f', lineHeight: 1.35 }}
                >
                  la riqueza debe gestionarse con{' '}
                  <span className="font-bold" style={{ color: '#45ac41' }}>disciplina</span>
                  {' '}—{' '}
                  <span style={{ color: '#12331c' }}>no con especulación.</span>
                </p>
              </div>
            </div>

            {/* Two columns below */}
            <div className="grid grid-cols-2 gap-6">
              <div
                className="p-6 rounded-lg"
                style={{ background: '#f8fdf8', borderLeft: '4px solid #45ac41' }}
              >
                <p
                  className="font-montserrat font-semibold mb-2"
                  style={{ fontSize: '14px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  No vendemos productos aislados.
                </p>
                <p className="font-montserrat font-light" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.6 }}>
                  Diseñamos soluciones patrimoniales integradas, adaptadas a cada cliente y sus objetivos de largo plazo.
                </p>
              </div>
              <div
                className="p-6 rounded-lg"
                style={{ background: '#f8fdf8', borderLeft: '4px solid #69b32d' }}
              >
                <p
                  className="font-montserrat font-semibold mb-2"
                  style={{ fontSize: '14px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  Cada decisión parte de un principio.
                </p>
                <p className="font-montserrat font-light" style={{ fontSize: '13px', color: '#224b2d', lineHeight: 1.6 }}>
                  Preservar primero, crecer después. La disciplina como fundamento de la continuidad patrimonial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image panel */}
        <div
          className="w-72 flex-shrink-0 relative"
          style={{ overflow: 'hidden' }}
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
            alt="Discipline and precision"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent 40%), linear-gradient(to top, rgba(18,51,28,0.5), transparent)' }}
          />
          {/* Slide number */}
          <div className="absolute bottom-6 right-6">
            <span className="font-montserrat font-bold" style={{ color: '#45ac41', fontSize: '40px', opacity: 0.6 }}>02</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, #d7ead9)' }} />
    </SlideLayout>
  );
}
