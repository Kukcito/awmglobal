import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide26_Cierre() {
  return (
    <SlideLayout id="slide-26" background="linear-gradient(135deg, #0b1610 0%, #12331c 40%, #224b2d 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(69,172,65,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #45ac41, #69b32d, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #45ac41, #69b32d, transparent)' }} />
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, transparent, #45ac41, transparent)' }} />
      <div className="absolute top-0 right-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, transparent, #45ac41, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
        <AWMLogo variant="dark" size="xl" className="mb-8" />

        <div className="w-32 h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #45ac41, transparent)' }} />

        <p
          className="font-montserrat font-light italic mb-8"
          style={{ fontSize: '22px', color: '#d7ead9', letterSpacing: '0.04em', lineHeight: 1.5, maxWidth: '700px' }}
        >
          "Capital preservation as a source of continuity"
        </p>

        <div className="w-32 h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, #45ac41, transparent)' }} />

        <p
          className="font-montserrat font-medium"
          style={{ fontSize: '16px', color: '#45ac41', letterSpacing: '0.15em' }}
        >
          www.awmglobal.net
        </p>
        <p
          className="font-montserrat font-light mt-2"
          style={{ fontSize: '12px', color: '#459860', letterSpacing: '0.1em' }}
        >
          info@awmglobal.net
        </p>

        <div className="mt-12">
          <p
            className="font-montserrat font-light"
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            © 2026 AWM Global. All Rights Reserved. International Wealth Management.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
