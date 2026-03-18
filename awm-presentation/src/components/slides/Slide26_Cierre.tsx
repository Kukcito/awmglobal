import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide26_Cierre() {
  return (
    <SlideLayout id="slide-26" background="linear-gradient(135deg, #0b1610 0%, #12331c 45%, #1a3e24 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.09,
          mixBlendMode: 'luminosity',
        }}
      />
      {/* Radial glow center */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(69,172,65,0.07) 0%, transparent 60%)' }}
      />
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent 5%, #45ac41 40%, #69b32d 70%, transparent 95%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(to right, transparent 5%, #2a6d2f 40%, #45ac41 70%, transparent 95%)' }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: 'linear-gradient(to bottom, transparent, #45ac41, transparent)' }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-0.5"
        style={{ background: 'linear-gradient(to bottom, transparent, #45ac41, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
        <AWMLogo variant="onDark" size="xl" className="mb-7" />

        <div className="w-28 h-px mb-6"
          style={{ background: 'linear-gradient(to right, transparent, #45ac41, transparent)' }}
        />

        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#d7ead9',
            letterSpacing: '0.05em',
            lineHeight: 1.5,
            maxWidth: '680px',
          }}
        >
          "Capital preservation as a source of continuity"
        </p>

        <div className="w-28 h-px mt-6 mb-8"
          style={{ background: 'linear-gradient(to right, transparent, #45ac41, transparent)' }}
        />

        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '15px', color: '#45ac41', letterSpacing: '0.15em' }}>
          www.awmglobal.net
        </p>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '11px', color: '#459860', marginTop: '4px', letterSpacing: '0.1em' }}>
          info@awmglobal.net
        </p>

        <p
          className="absolute bottom-6"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
        >
          © 2026 AWM Global · All Rights Reserved · International Wealth Management
        </p>
      </div>
    </SlideLayout>
  );
}
