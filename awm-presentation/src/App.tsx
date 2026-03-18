import { useState, useRef, useCallback, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Slide01_Portada from './components/slides/Slide01_Portada';
import Slide02_Principio from './components/slides/Slide02_Principio';
import Slide03_Problematica from './components/slides/Slide03_Problematica';
import Slide04_Solucion from './components/slides/Slide04_Solucion';
import Slide05_Principios from './components/slides/Slide05_Principios';
import Slide06_Diferenciadores from './components/slides/Slide06_Diferenciadores';
import Slide07_AccesoInstitucional from './components/slides/Slide07_AccesoInstitucional';
import Slide08_PortadaProductos from './components/slides/Slide08_PortadaProductos';
import Slide09_GlobalMarkets from './components/slides/Slide09_GlobalMarkets';
import Slide10_StructuredSolutions from './components/slides/Slide10_StructuredSolutions';
import Slide11_NotasEstructuradas from './components/slides/Slide11_NotasEstructuradas';
import Slide12_LifeShield from './components/slides/Slide12_LifeShield';
import Slide13_TrustFiduciary from './components/slides/Slide13_TrustFiduciary';
import Slide14_DigitalAssets from './components/slides/Slide14_DigitalAssets';
import Slide15_PrivateMandates from './components/slides/Slide15_PrivateMandates';
import Slide16_Comparativa from './components/slides/Slide16_Comparativa';
import Slide17_Implementacion from './components/slides/Slide17_Implementacion';
import Slide18_Custodios from './components/slides/Slide18_Custodios';
import Slide19_Tecnologia from './components/slides/Slide19_Tecnologia';
import Slide20_Compliance from './components/slides/Slide20_Compliance';
import Slide21_Seguridad from './components/slides/Slide21_Seguridad';
import Slide22_PerfilClientes from './components/slides/Slide22_PerfilClientes';
import Slide23_VentajasCompetitivas from './components/slides/Slide23_VentajasCompetitivas';
import Slide24_CTA from './components/slides/Slide24_CTA';
import Slide25_Contacto from './components/slides/Slide25_Contacto';
import Slide26_Cierre from './components/slides/Slide26_Cierre';
import Slide27_Disclaimer from './components/slides/Slide27_Disclaimer';

const slides = [
  { component: Slide01_Portada, title: 'Portada' },
  { component: Slide02_Principio, title: 'Principio Fundacional' },
  { component: Slide03_Problematica, title: 'La Problemática' },
  { component: Slide04_Solucion, title: 'La Solución AWM' },
  { component: Slide05_Principios, title: '3 Principios' },
  { component: Slide06_Diferenciadores, title: '¿Por Qué AWM?' },
  { component: Slide07_AccesoInstitucional, title: 'Acceso Institucional' },
  { component: Slide08_PortadaProductos, title: 'Nuestras Soluciones' },
  { component: Slide09_GlobalMarkets, title: 'AWM Global Markets™' },
  { component: Slide10_StructuredSolutions, title: 'AWM Structured Solutions™' },
  { component: Slide11_NotasEstructuradas, title: 'Tipos de Notas' },
  { component: Slide12_LifeShield, title: 'AWM Life & Investment Shield™' },
  { component: Slide13_TrustFiduciary, title: 'AWM Trust & Fiduciary™' },
  { component: Slide14_DigitalAssets, title: 'AWM Digital Assets Desk™' },
  { component: Slide15_PrivateMandates, title: 'AWM Private Mandates™' },
  { component: Slide16_Comparativa, title: 'Comparativa de Soluciones' },
  { component: Slide17_Implementacion, title: 'Proceso de Implementación' },
  { component: Slide18_Custodios, title: 'Custodios Globales' },
  { component: Slide19_Tecnologia, title: 'Tecnología & Transparencia' },
  { component: Slide20_Compliance, title: 'Compliance Internacional' },
  { component: Slide21_Seguridad, title: 'Seguridad de Activos' },
  { component: Slide22_PerfilClientes, title: 'Perfil de Clientes' },
  { component: Slide23_VentajasCompetitivas, title: 'Ventajas Competitivas' },
  { component: Slide24_CTA, title: 'Comienza con AWM' },
  { component: Slide25_Contacto, title: 'Contacto' },
  { component: Slide26_Cierre, title: 'Cierre' },
  { component: Slide27_Disclaimer, title: 'Aviso Legal' },
];

const SLIDE_W = 1122;
const SLIDE_H = 794;
const TOOLBAR_H = 52;
const BOTTOM_BAR_H = 52;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const [showThumbsPanel, setShowThumbsPanel] = useState(false);
  const [scale, setScale] = useState(0.7);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const CurrentSlideComponent = slides[currentSlide].component;

  // Responsive scale calculation
  useEffect(() => {
    const calcScale = () => {
      const sidebarW = showThumbsPanel ? 208 : 0;
      const availW = window.innerWidth - sidebarW - 48;
      const availH = window.innerHeight - TOOLBAR_H - BOTTOM_BAR_H - 40;
      const s = Math.min(availW / SLIDE_W, availH / SLIDE_H, 1);
      setScale(Math.max(s, 0.25));
    };
    calcScale();
    window.addEventListener('resize', calcScale);
    return () => window.removeEventListener('resize', calcScale);
  }, [showThumbsPanel]);

  const goNext = useCallback(() => setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1)), [totalSlides]);
  const goPrev = useCallback(() => setCurrentSlide((s) => Math.max(s - 1, 0)), []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault(); goNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault(); goPrev();
    }
  }, [goNext, goPrev]);

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    setPdfProgress(0);

    try {
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4', compress: true });
      const pdfW = 297;
      const pdfH = 210;

      const hiddenContainer = document.createElement('div');
      hiddenContainer.style.cssText = `position:fixed;top:-9999px;left:-9999px;width:${SLIDE_W}px;z-index:-1;font-family:'Montserrat',sans-serif;`;
      document.body.appendChild(hiddenContainer);

      for (let i = 0; i < slides.length; i++) {
        setPdfProgress(Math.round((i / slides.length) * 100));

        const slideDiv = document.createElement('div');
        slideDiv.style.cssText = `width:${SLIDE_W}px;height:${SLIDE_H}px;overflow:hidden;position:relative;`;
        hiddenContainer.innerHTML = '';
        hiddenContainer.appendChild(slideDiv);

        const root = createRoot(slideDiv);
        const SlideComp = slides[i].component;

        await new Promise<void>((resolve) => {
          root.render(<SlideComp />);
          setTimeout(resolve, 900);
        });

        const canvas = await html2canvas(slideDiv, {
          width: SLIDE_W, height: SLIDE_H, scale: 2,
          useCORS: true, allowTaint: true, backgroundColor: '#ffffff', logging: false,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.93);
        if (i > 0) pdf.addPage('a4', 'landscape');
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH, undefined, 'FAST');
        root.unmount();
      }

      document.body.removeChild(hiddenContainer);
      setPdfProgress(100);
      pdf.save('AWM_Global_Presentation_2026.pdf');
      setTimeout(() => { setIsGeneratingPDF(false); setPdfProgress(0); }, 1500);
    } catch (err) {
      console.error('PDF error:', err);
      setIsGeneratingPDF(false);
      setPdfProgress(0);
    }
  };

  return (
    <div
      className="flex flex-col h-screen"
      style={{ background: '#080f09', outline: 'none', fontFamily: 'Montserrat, sans-serif' }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ── Toolbar ─────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-5 flex-shrink-0"
        style={{ height: TOOLBAR_H, background: '#0b1610', borderBottom: '1px solid rgba(69,172,65,0.18)' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 520 135" fill="none">
            <path d="M 13,127 L 65,8 L 117,127" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
            <polygon points="26,73 48,95 26,117 4,95" fill="#45ac41" />
            <path d="M 143,8 L 170,127 L 212,46 L 254,127 L 310,8" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
            <path d="M 340,127 L 350,8 L 415,73 L 480,8 L 490,127" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
          </svg>
          <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '11px', color: '#459860', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Corporate Presentation 2026
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={goPrev} disabled={currentSlide === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: currentSlide === 0 ? 'transparent' : 'rgba(69,172,65,0.15)', border: '1px solid rgba(69,172,65,0.3)', color: currentSlide === 0 ? '#333' : '#45ac41', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer' }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10"><polyline points="7,2 3,5 7,8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '13px', color: '#d7ead9', minWidth: '72px', textAlign: 'center' }}>
            <strong style={{ color: '#45ac41' }}>{currentSlide + 1}</strong>
            <span style={{ color: '#3a5a3e' }}> / {totalSlides}</span>
          </span>

          <button
            onClick={goNext} disabled={currentSlide === totalSlides - 1}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: currentSlide === totalSlides - 1 ? 'transparent' : 'rgba(69,172,65,0.15)', border: '1px solid rgba(69,172,65,0.3)', color: currentSlide === totalSlides - 1 ? '#333' : '#45ac41', cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer' }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowThumbsPanel(!showThumbsPanel)}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '11px', padding: '6px 12px', borderRadius: '5px', background: showThumbsPanel ? 'rgba(69,172,65,0.2)' : 'rgba(255,255,255,0.04)', border: '1px solid rgba(69,172,65,0.25)', color: showThumbsPanel ? '#45ac41' : '#9ca3af', cursor: 'pointer', letterSpacing: '0.05em' }}
          >
            ☰ Diapositivas
          </button>

          <button
            onClick={generatePDF} disabled={isGeneratingPDF}
            className="flex items-center gap-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '12px', padding: '7px 16px', borderRadius: '6px', background: isGeneratingPDF ? '#2a6d2f' : '#45ac41', color: '#fff', cursor: isGeneratingPDF ? 'wait' : 'pointer', border: 'none', boxShadow: '0 2px 10px rgba(69,172,65,0.35)', letterSpacing: '0.04em' }}
          >
            {isGeneratingPDF ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {pdfProgress > 0 ? `${pdfProgress}%` : 'Iniciando…'}
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M4 6l2.5 3 2.5-3M1.5 10v2h10v-2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Descargar PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Main area ───────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Thumbnail sidebar */}
        {showThumbsPanel && (
          <div
            className="flex-shrink-0 overflow-y-auto py-3 px-2.5"
            style={{ width: '208px', background: '#0a160b', borderRight: '1px solid rgba(69,172,65,0.12)' }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="w-full mb-1.5 text-left rounded-lg overflow-hidden"
                style={{ border: i === currentSlide ? '1.5px solid #45ac41' : '1.5px solid transparent', outline: 'none', cursor: 'pointer' }}
              >
                <div
                  className="flex items-center gap-2 px-2.5 py-2"
                  style={{ background: i === currentSlide ? 'rgba(69,172,65,0.12)' : 'rgba(255,255,255,0.02)' }}
                >
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '9px', color: i === currentSlide ? '#45ac41' : '#3a5a3e', width: '18px', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: i === currentSlide ? '#ffffff' : '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {slide.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Slide viewer */}
        <div
          ref={wrapperRef}
          className="flex-1 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#0d1a0f' }}
        >
          {/* Slide title label */}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '10px', color: '#2a6d2f', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px' }}>
            {slides[currentSlide].title}
          </p>

          {/* Slide */}
          <div
            style={{
              width: `${SLIDE_W}px`,
              height: `${SLIDE_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              borderRadius: '3px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 8px 48px rgba(0,0,0,0.7)',
            }}
          >
            <CurrentSlideComponent />
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1 mt-5 flex-wrap justify-center" style={{ maxWidth: '600px', padding: '0 24px' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? '18px' : '5px',
                  height: '5px',
                  borderRadius: '3px',
                  background: i === currentSlide ? '#45ac41' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.2s ease, background 0.2s ease',
                }}
              />
            ))}
          </div>

          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.18)', marginTop: '8px', letterSpacing: '0.1em' }}>
            ← → para navegar · Espacio para avanzar
          </p>
        </div>
      </div>

      {/* ── PDF overlay ─────────────────────────────────────────────── */}
      {isGeneratingPDF && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: 'rgba(8, 15, 9, 0.96)' }}
        >
          <div style={{ maxWidth: '380px', width: '100%', padding: '0 32px' }} className="flex flex-col items-center gap-6">
            <svg width="56" height="56" viewBox="0 0 520 135" fill="none">
              <path d="M 13,127 L 65,8 L 117,127" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
              <polygon points="26,73 48,95 26,117 4,95" fill="#45ac41" />
              <path d="M 143,8 L 170,127 L 212,46 L 254,127 L 310,8" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
              <path d="M 340,127 L 350,8 L 415,73 L 480,8 L 490,127" stroke="#ffffff" strokeWidth="22" strokeLinejoin="miter" strokeMiterlimit="20" strokeLinecap="butt" />
            </svg>

            <div className="text-center">
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', marginBottom: '4px' }}>
                Generando PDF
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '12px', color: '#459860' }}>
                AWM Global Presentation 2026
              </p>
            </div>

            <div style={{ width: '100%' }}>
              <div className="flex justify-between mb-2">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', color: '#459860' }}>
                  Procesando diapositivas…
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '10px', color: '#45ac41' }}>
                  {pdfProgress}%
                </span>
              </div>
              <div style={{ width: '100%', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.08)' }}>
                <div
                  style={{
                    width: `${pdfProgress}%`, height: '100%', borderRadius: '3px',
                    background: 'linear-gradient(to right, #2a6d2f, #45ac41)',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>

            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '11px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', lineHeight: 1.6 }}>
              Este proceso toma 1–2 minutos.<br />No cierre esta ventana.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
