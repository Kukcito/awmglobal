import SlideLayout from '../shared/SlideLayout';
import AWMLogo from '../shared/AWMLogo';

export default function Slide27_Disclaimer() {
  return (
    <SlideLayout id="slide-27" background="#ffffff">
      <div className="flex flex-col h-full px-16 py-8">
        <div className="flex items-center gap-4 mb-6">
          <AWMLogo variant="onLight" size="sm" />
          <div className="flex-1 h-px" style={{ background: '#d7ead9' }} />
          <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#9ca3af' }}>
            Aviso Legal y Divulgaciones
          </p>
        </div>

        <div
          className="flex-1 p-8 rounded-xl"
          style={{ background: '#f8f9fa', border: '1px solid #e2e8f0' }}
        >
          <h3
            className="font-montserrat font-bold mb-4"
            style={{ fontSize: '16px', color: '#12331c', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          >
            Aviso Legal — Disclaimer
          </h3>

          <div className="space-y-4">
            <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#374151', lineHeight: 1.7 }}>
              Esta presentación es solo para fines informativos y de presentación comercial. No constituye una oferta
              de venta ni una solicitud de compra de valores, productos de inversión o servicios financieros de ningún tipo.
              La información contenida en este documento está sujeta a cambios sin previo aviso y puede no ser actualizada
              a la fecha de su revisión.
            </p>

            <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#374151', lineHeight: 1.7 }}>
              Las inversiones en cualquier producto financiero implican riesgos, incluida la posible pérdida parcial o total
              del capital invertido. El rendimiento histórico de cualquier instrumento o estrategia no garantiza resultados
              futuros similares. Los inversionistas deben evaluar cuidadosamente su tolerancia al riesgo y horizonte de inversión
              antes de tomar cualquier decisión.
            </p>

            <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#374151', lineHeight: 1.7 }}>
              AWM Global opera bajo marcos regulatorios reconocidos y mantiene relaciones con custodios institucionales
              debidamente registrados. Los servicios descritos en esta presentación pueden no estar disponibles en todas las
              jurisdicciones. Los términos, condiciones y disponibilidad de productos pueden variar según la residencia fiscal
              y perfil del inversionista.
            </p>

            <p className="font-montserrat font-light" style={{ fontSize: '11px', color: '#374151', lineHeight: 1.7 }}>
              Para información completa sobre servicios, estructura de fees, riesgos materiales y restricciones aplicables,
              los inversores deben revisar toda la documentación de cliente disponible a través de nuestro equipo de asesores
              o en <span style={{ color: '#45ac41', fontWeight: 600 }}>www.awmglobal.net</span>. Se recomienda consultar con
              asesores legales, fiscales y financieros independientes antes de tomar decisiones patrimoniales de importancia.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#9ca3af' }}>
            © 2026 AWM Global. Todos los derechos reservados.
          </p>
          <p className="font-montserrat font-light italic" style={{ fontSize: '10px', color: '#45ac41' }}>
            "Capital preservation as a source of continuity"® — AWM Global
          </p>
          <p className="font-montserrat font-light" style={{ fontSize: '10px', color: '#9ca3af' }}>
            www.awmglobal.net | info@awmglobal.net
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
