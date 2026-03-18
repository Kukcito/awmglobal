import { useState, useRef, useCallback } from 'react';
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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState(0);
  const [showThumbsPanel, setShowThumbsPanel] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const CurrentSlideComponent = slides[currentSlide].component;

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 0));
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      goNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goPrev();
    }
  }, [goNext, goPrev]);

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    setPdfProgress(0);

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // A4 landscape dimensions in mm: 297 x 210
      const pdfW = 297;
      const pdfH = 210;

      // Create a hidden container for rendering all slides
      const hiddenContainer = document.createElement('div');
      hiddenContainer.style.position = 'fixed';
      hiddenContainer.style.top = '-10000px';
      hiddenContainer.style.left = '-10000px';
      hiddenContainer.style.width = `${SLIDE_W}px`;
      hiddenContainer.style.zIndex = '-1';
      hiddenContainer.style.fontFamily = "'Montserrat', sans-serif";
      document.body.appendChild(hiddenContainer);

      for (let i = 0; i < slides.length; i++) {
        setPdfProgress(Math.round((i / slides.length) * 100));

        // Render slide to a temporary div
        const slideDiv = document.createElement('div');
        slideDiv.style.width = `${SLIDE_W}px`;
        slideDiv.style.height = `${SLIDE_H}px`;
        slideDiv.style.overflow = 'hidden';
        slideDiv.style.position = 'relative';
        hiddenContainer.innerHTML = '';
        hiddenContainer.appendChild(slideDiv);

        // Use React's rendering via a temporary root
        const root = createRoot(slideDiv);
        const SlideComp = slides[i].component;

        await new Promise<void>((resolve) => {
          root.render(<SlideComp />);
          // Wait for render + images
          setTimeout(resolve, 800);
        });

        const canvas = await html2canvas(slideDiv, {
          width: SLIDE_W,
          height: SLIDE_H,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);

        if (i > 0) {
          pdf.addPage('a4', 'landscape');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH, undefined, 'FAST');

        root.unmount();
      }

      document.body.removeChild(hiddenContainer);

      setPdfProgress(100);
      pdf.save('AWM_Global_Presentation_2026.pdf');

      setTimeout(() => {
        setIsGeneratingPDF(false);
        setPdfProgress(0);
      }, 1500);
    } catch (error) {
      console.error('PDF generation error:', error);
      setIsGeneratingPDF(false);
      setPdfProgress(0);
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-gray-900 select-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      {/* Top toolbar */}
      <div
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{ background: '#0b1610', borderBottom: '1px solid rgba(69,172,65,0.2)' }}
      >
        {/* Left: branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
              <polygon points="50,8 90,92 68,92 50,52 32,92 10,92" fill="#45ac41" />
              <rect x="30" y="66" width="40" height="7" fill="#12331c" />
            </svg>
            <span className="font-montserrat font-bold text-white text-sm tracking-widest">AWM</span>
          </div>
          <span className="font-montserrat font-light text-xs" style={{ color: '#459860' }}>
            Corporate Presentation 2026
          </span>
        </div>

        {/* Center: slide counter + navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{
              background: currentSlide === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(69,172,65,0.2)',
              border: '1px solid rgba(69,172,65,0.3)',
              color: currentSlide === 0 ? '#555' : '#45ac41',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polyline points="8,2 4,6 8,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className="font-montserrat font-medium text-sm" style={{ color: '#d7ead9', minWidth: '80px', textAlign: 'center' }}>
            <span style={{ color: '#45ac41', fontWeight: 700 }}>{currentSlide + 1}</span>
            <span style={{ color: '#459860' }}> / {totalSlides}</span>
          </span>

          <button
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{
              background: currentSlide === totalSlides - 1 ? 'rgba(255,255,255,0.05)' : 'rgba(69,172,65,0.2)',
              border: '1px solid rgba(69,172,65,0.3)',
              color: currentSlide === totalSlides - 1 ? '#555' : '#45ac41',
              cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polyline points="4,2 8,6 4,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowThumbsPanel(!showThumbsPanel)}
            className="px-3 py-1.5 rounded text-xs font-montserrat font-medium transition-all"
            style={{
              background: showThumbsPanel ? 'rgba(69,172,65,0.2)' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(69,172,65,0.3)',
              color: showThumbsPanel ? '#45ac41' : '#d7ead9',
            }}
          >
            ☰ Diapositivas
          </button>

          <button
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-montserrat font-semibold text-sm transition-all"
            style={{
              background: isGeneratingPDF ? '#2a6d2f' : '#45ac41',
              color: '#ffffff',
              cursor: isGeneratingPDF ? 'wait' : 'pointer',
              boxShadow: '0 2px 8px rgba(69,172,65,0.3)',
            }}
          >
            {isGeneratingPDF ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {pdfProgress > 0 ? `Generando ${pdfProgress}%` : 'Preparando...'}
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v7M4 6l3 3 3-3M2 10v2h10v-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Descargar PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Thumbnails sidebar */}
        {showThumbsPanel && (
          <div
            className="w-52 flex-shrink-0 overflow-y-auto py-4 px-3"
            style={{ background: '#0f1f12', borderRight: '1px solid rgba(69,172,65,0.15)' }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="w-full mb-2 text-left rounded-lg overflow-hidden transition-all"
                style={{
                  border: i === currentSlide ? '2px solid #45ac41' : '2px solid transparent',
                  boxShadow: i === currentSlide ? '0 0 8px rgba(69,172,65,0.4)' : 'none',
                }}
              >
                <div
                  className="flex items-center gap-2 px-2 py-2"
                  style={{ background: i === currentSlide ? 'rgba(69,172,65,0.15)' : 'rgba(255,255,255,0.03)' }}
                >
                  <span
                    className="font-montserrat font-bold flex-shrink-0"
                    style={{ fontSize: '10px', color: i === currentSlide ? '#45ac41' : '#459860', width: '20px' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-montserrat text-xs truncate"
                    style={{ color: i === currentSlide ? '#ffffff' : '#9ca3af' }}
                  >
                    {slide.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Slide viewer */}
        <div
          className="flex-1 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#111827' }}
        >
          {/* Slide title */}
          <div className="mb-3">
            <span
              className="font-montserrat font-medium text-xs tracking-widest uppercase"
              style={{ color: '#459860' }}
            >
              {slides[currentSlide].title}
            </span>
          </div>

          {/* Slide */}
          <div
            ref={containerRef}
            className="shadow-2xl"
            style={{
              width: `${SLIDE_W}px`,
              height: `${SLIDE_H}px`,
              transform: `scale(${Math.min(
                (typeof window !== 'undefined' ? (window.innerWidth - (showThumbsPanel ? 208 : 0) - 60) : 1000) / SLIDE_W,
                (typeof window !== 'undefined' ? (window.innerHeight - 120) : 600) / SLIDE_H,
                1
              )})`,
              transformOrigin: 'center center',
              borderRadius: '4px',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <CurrentSlideComponent />
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === currentSlide ? '20px' : '6px',
                  height: '6px',
                  background: i === currentSlide ? '#45ac41' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          {/* Keyboard hint */}
          <p className="mt-3 font-montserrat text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Usa ← → para navegar · Espacio para avanzar
          </p>
        </div>
      </div>

      {/* PDF generation overlay */}
      {isGeneratingPDF && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: 'rgba(11, 22, 16, 0.96)' }}
        >
          <div className="flex flex-col items-center gap-6" style={{ maxWidth: '400px', width: '100%', padding: '0 32px' }}>
            {/* AWM Logo */}
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <polygon points="50,8 90,92 68,92 50,52 32,92 10,92" fill="#45ac41" />
              <rect x="30" y="66" width="40" height="7" fill="#12331c" />
            </svg>

            <div className="text-center">
              <p className="font-montserrat font-bold text-white text-xl mb-1">Generando PDF</p>
              <p className="font-montserrat font-light text-sm" style={{ color: '#459860' }}>
                AWM Global Presentation 2026
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="font-montserrat text-xs" style={{ color: '#459860' }}>Procesando diapositivas...</span>
                <span className="font-montserrat font-bold text-xs" style={{ color: '#45ac41' }}>{pdfProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${pdfProgress}%`, background: 'linear-gradient(to right, #2a6d2f, #45ac41)' }}
                />
              </div>
            </div>

            <p className="font-montserrat font-light text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Este proceso puede tomar 1-2 minutos.<br />Por favor no cierre esta ventana.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
