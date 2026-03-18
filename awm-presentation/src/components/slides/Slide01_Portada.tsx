import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide01_Portada() {
  return (
    <SlideLayout
      id="slide-1"
      background="linear-gradient(135deg, #0b1610 0%, #12331c 45%, #1a3e24 100%)"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.13,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Right side glow */}
      <div
        className="absolute top-0 right-0 w-80 h-full"
        style={{ background: 'linear-gradient(to left, rgba(69,172,65,0.06), transparent)' }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent 5%, #45ac41 40%, #69b32d 70%, transparent 95%)' }}
      />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent 5%, #2a6d2f 40%, #45ac41 70%, transparent 95%)' }}
      />
      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: 'linear-gradient(to bottom, transparent, #45ac41 40%, transparent)' }}
      />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16">

        {/* Logo */}
        <AWMLogo variant="onDark" size="xl" className="mb-7" />

        {/* Horizontal rule */}
        <div className="w-32 h-px mb-6"
          style={{ background: 'linear-gradient(to right, transparent, #45ac41, transparent)' }}
        />

        {/* Main title */}
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '22px',
            color: '#ffffff',
            letterSpacing: '0.06em',
            textAlign: 'center',
            lineHeight: 1.35,
            marginBottom: '8px',
            textTransform: 'uppercase',
          }}
        >
          Soluciones Integrales de Wealth Management
        </h1>

        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontSize: '12px',
            color: '#d7ead9',
            letterSpacing: '0.2em',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          International wealth management · Direct access to global markets
        </p>

        {/* Slogan box */}
        <div
          style={{
            border: '1px solid rgba(69,172,65,0.6)',
            borderRadius: '3px',
            padding: '10px 28px',
          }}
        >
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '14px',
              color: '#45ac41',
              letterSpacing: '0.06em',
              textAlign: 'center',
            }}
          >
            "Capital preservation as a source of continuity"
          </p>
        </div>

        {/* Footer row */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-12">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: '#459860', letterSpacing: '0.12em' }}>
            www.awmglobal.net
          </p>
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full" style={{ background: '#45ac41', opacity: 0.4 + i * 0.1 }} />
            ))}
          </div>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: '#459860', letterSpacing: '0.12em' }}>
            info@awmglobal.net
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
