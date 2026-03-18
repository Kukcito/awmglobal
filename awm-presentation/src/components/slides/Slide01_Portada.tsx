import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide01_Portada() {
  return (
    <SlideLayout
      id="slide-1"
      background="linear-gradient(135deg, #0b1610 0%, #12331c 40%, #1a3e24 100%)"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />

      {/* Decorative geometric elements */}
      <div
        className="absolute top-0 right-0 w-96 h-full opacity-10"
        style={{
          background: 'linear-gradient(to left, #45ac41, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }}
      />
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: 'linear-gradient(to right, transparent, #45ac41, #69b32d)' }}
      />

      {/* Vertical accent line left */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{ background: 'linear-gradient(to bottom, #45ac41, #2a6d2f, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 py-12">
        <AWMLogo variant="dark" size="xl" className="mb-8" />

        <div className="w-24 h-px mb-6" style={{ background: '#45ac41' }} />

        <h1
          className="font-montserrat font-bold text-center mb-3"
          style={{ color: '#ffffff', fontSize: '28px', letterSpacing: '0.05em', lineHeight: 1.2 }}
        >
          Soluciones Integrales de Wealth Management
        </h1>

        <p
          className="font-montserrat font-light text-center mb-8"
          style={{ color: '#d7ead9', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          International wealth management with direct access to global markets
        </p>

        <div
          className="px-8 py-3 rounded-sm"
          style={{ border: '1px solid #45ac41' }}
        >
          <p
            className="font-montserrat font-light italic text-center"
            style={{ color: '#45ac41', fontSize: '15px', letterSpacing: '0.08em' }}
          >
            "Capital preservation as a source of continuity"
          </p>
        </div>

        {/* Bottom info row */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-12">
          <p className="font-montserrat text-xs" style={{ color: '#459860', letterSpacing: '0.1em' }}>
            www.awmglobal.net
          </p>
          <p className="font-montserrat text-xs" style={{ color: '#459860', letterSpacing: '0.1em' }}>
            © 2026 AWM Global. All Rights Reserved.
          </p>
          <p className="font-montserrat text-xs" style={{ color: '#459860', letterSpacing: '0.1em' }}>
            info@awmglobal.net
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
