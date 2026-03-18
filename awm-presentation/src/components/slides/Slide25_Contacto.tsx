import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide25_Contacto() {
  const contacts = [
    { icon: '📧', label: 'Email Principal', value: 'info@awmglobal.net', sub: 'Respuesta en 24 horas hábiles' },
    { icon: '🌐', label: 'Website', value: 'www.awmglobal.net', sub: 'Información y formulario de contacto' },
    { icon: '💼', label: 'LinkedIn', value: 'AWM Global', sub: 'Síguenos para actualizaciones de mercado' },
  ];

  const hours = [
    { label: 'Lunes — Viernes', value: '9:00 AM – 6:00 PM (ET)' },
    { label: 'Clientes Internacionales', value: '24/7 vía email' },
    { label: 'Idiomas', value: 'English | Español | Português' },
  ];

  return (
    <SlideLayout id="slide-25" background="linear-gradient(135deg, #0b1610 0%, #12331c 100%)">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />

      {/* World map decorative */}
      <div
        className="absolute right-0 top-0 bottom-0 w-96 opacity-5"
        style={{
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-montserrat font-light uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: '#459860', letterSpacing: '0.2em' }}>
              Contáctanos
            </p>
            <h2 className="font-montserrat font-bold" style={{ fontSize: '30px', color: '#ffffff', lineHeight: 1.2 }}>
              Estamos Listos para{' '}
              <span style={{ color: '#45ac41' }}>Servirte</span>
            </h2>
          </div>
          <AWMLogo variant="onDark" size="md" />
        </div>

        <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(to right, #45ac41, transparent)' }} />

        <div className="flex gap-8 flex-1 items-center">
          {/* Contact info */}
          <div className="flex-1">
            <p className="font-montserrat font-semibold mb-4" style={{ fontSize: '12px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Información de Contacto
            </p>
            <div className="space-y-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(69,172,65,0.25)' }}
                >
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#459860', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {c.label}
                    </p>
                    <p className="font-montserrat font-bold" style={{ fontSize: '14px', color: '#ffffff' }}>{c.value}</p>
                    <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#d7ead9' }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-48" style={{ background: 'linear-gradient(to bottom, transparent, #45ac41, transparent)' }} />

          {/* Hours + tagline */}
          <div className="w-72 flex-shrink-0">
            <p className="font-montserrat font-semibold mb-4" style={{ fontSize: '12px', color: '#45ac41', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Horarios de Atención
            </p>
            <div className="space-y-3 mb-6">
              {hours.map((h, i) => (
                <div key={i} className="flex justify-between items-start">
                  <p className="font-montserrat font-light" style={{ fontSize: '12px', color: '#d7ead9' }}>{h.label}</p>
                  <p className="font-montserrat font-semibold" style={{ fontSize: '12px', color: '#ffffff', textAlign: 'right', marginLeft: '8px' }}>{h.value}</p>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(69,172,65,0.1)', border: '1px solid #45ac41' }}
            >
              <p className="font-montserrat font-bold text-center mb-2" style={{ fontSize: '16px', color: '#45ac41' }}>
                AWM Global
              </p>
              <p className="font-montserrat font-light italic text-center" style={{ fontSize: '12px', color: '#d7ead9', lineHeight: 1.6 }}>
                "Capital preservation as a source of continuity"
              </p>
              <div className="h-px w-16 mx-auto mt-3" style={{ background: '#45ac41' }} />
              <p className="font-montserrat font-light text-center mt-3" style={{ fontSize: '11px', color: '#459860' }}>
                © 2026 AWM Global. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #45ac41, #69b32d, transparent)' }} />
    </SlideLayout>
  );
}
