"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface ROVTab {
  value: string;
  label: string;
  title: string;
  description: string;
  specs: string[];
  imageSrc: string;
}

const rovs: ROVTab[] = [
  {
    value: "dtg2",
    label: "Deep Trekker DTG2",
    title: "Deep Trekker DTG2",
    description:
      "ROV compacto y versátil diseñado para inspecciones subacuáticas en entornos de la industria acuícola. Su diseño robusto permite operar en corrientes moderadas con estabilidad y precisión, capturando video HD en tiempo real para inspección de redes, fondeos y estructuras.",
    specs: ["Video HD en tiempo real", "Profundidad hasta 200 m", "Propulsores omnidireccionales", "Fácil despliegue desde embarcación"],
    imageSrc: "/dtg2.jpeg",
  },
  {
    value: "dtg3",
    label: "Deep Trekker DTG3",
    title: "Deep Trekker DTG3",
    description:
      "Versión mejorada del DTG2 con mayor potencia de empuje y capacidad de carga útil para herramientas especializadas. Ideal para tareas de intervención ligera, recuperación de objetos y operaciones en condiciones de mayor exigencia dentro de centros de cultivo.",
    specs: ["Mayor potencia de empuje", "Puerto para herramientas adicionales", "Cámara 4K con zoom óptico", "Operación en corrientes fuertes"],
    imageSrc: "/dtg3.jpeg",
  },
  {
    value: "m2",
    label: "Chasing M2",
    title: "Chasing M2",
    description:
      "ROV profesional de alta maniobrabilidad con seis propulsores vectorizados que permiten movimiento en los seis grados de libertad. Su cámara 4K UHD y sus potentes luces LED lo hacen ideal para inspecciones detalladas en ambientes con baja visibilidad.",
    specs: ["6 propulsores vectorizados", "Cámara 4K UHD", "Luces LED de alta potencia", "Profundidad hasta 100 m"],
    imageSrc: "/chasing m2s.jpeg",
  },
  {
    value: "m2promax",
    label: "Chasing M2 ProMax",
    title: "Chasing M2 ProMax",
    description:
      "La versión más avanzada de la línea Chasing, con mayor autonomía, sensores adicionales y capacidad para operar en profundidades extendidas. Diseñado para misiones de larga duración que requieren máxima calidad de imagen y datos precisos del entorno subacuático.",
    specs: ["Mayor autonomía de batería", "Sensores de profundidad avanzados", "Grabación simultánea 4K + datos", "Profundidad hasta 200 m"],
    imageSrc: "/chasing m2 pro max.jpeg",
  },
];

export function TechnologiesTabs() {
  return (
    <section style={{ background: "#ffffff", padding: "120px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

        {/* Encabezado */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            color: "#0ea5e9",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Nuestra Flota
          </p>
          <div style={{ width: 48, height: 3, background: "#0ea5e9", borderRadius: 2, margin: "0 auto 24px" }} />
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#0a1628",
            lineHeight: 1.1,
            margin: 0,
          }}>
            Tecnologías ROV
          </h2>
        </div>

        <Tabs.Root defaultValue="dtg2">

          {/* Tabs selector */}
          <Tabs.List style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginBottom: 40,
          }}>
            {rovs.map((rov) => (
              <Tabs.Trigger
                key={rov.value}
                value={rov.value}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <span
                  className="rov-tab-trigger"
                  data-value={rov.value}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "rgba(10,22,40,0.55)",
                    background: "transparent",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {rov.label}
                </span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <style>{`
            [data-radix-collection-item][data-state="active"] .rov-tab-trigger,
            [data-state="active"] .rov-tab-trigger {
              background: #1a5fa8 !important;
              border-color: #1a5fa8 !important;
              color: #ffffff !important;
            }
            .rov-tab-trigger:hover {
              border-color: #1a5fa8 !important;
              color: #0a1628 !important;
            }
            .rov-content-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 60px;
              align-items: center;
            }
            .rov-panel {
              background: #0d1b2e;
              border-radius: 20px;
              border: 1px solid rgba(255,255,255,0.08);
              padding: 48px;
            }
            @media (max-width: 768px) {
              .rov-content-grid {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
              }
              .rov-panel {
                padding: 28px 20px !important;
              }
              .rov-tab-trigger {
                padding: 8px 14px !important;
                font-size: 13px !important;
              }
            }
          `}</style>

          {/* Contenido */}
          <div className="rov-panel">
            {rovs.map((rov) => (
              <Tabs.Content key={rov.value} value={rov.value}>
                <div className="rov-content-grid">
                  {/* Texto */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: "clamp(24px, 3vw, 40px)",
                      fontWeight: 900,
                      color: "#ffffff",
                      lineHeight: 1.2,
                      margin: 0,
                    }}>
                      {rov.title}
                    </h3>
                    <p style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 15,
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {rov.description}
                    </p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0, listStyle: "none" }}>
                      {rov.specs.map((spec) => (
                        <li key={spec} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#0ea5e9",
                            flexShrink: 0,
                          }} />
                          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Imagen */}
                  <div style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    padding: 16,
                  }}>
                    <img
                      src={rov.imageSrc}
                      alt={rov.title}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </div>

        </Tabs.Root>
      </div>

    </section>
  );
}
