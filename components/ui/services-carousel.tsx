"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "item-1",
    title: "Muestreo de Peces",
    summary:
      "Realizamos muestreos subacuáticos con equipos ROV y operarios calificados  para monitorear el estado sanitario, crecimiento y condición de los peces en los centros de cultivo.",
    image: "/FotosWeb/muestreo.jpeg",
  },
  {
    id: "item-2",
    title: "Cosecha",
    summary: "Apoyo en operaciones de cosecha mediante equipos ROV especializados, y operarios calificados facilitando el proceso y reduciendo tiempos operacionales en los centros salmoneros.",
    image: "/FotosWeb/cosecha.jpeg",
  },
  {
    id: "item-3",
    title: "Alimentación",
    summary: "Monitoreo y apoyo en sistemas de alimentación  subacuática con equipos rov y operarios calificados, asegurando una distribución eficiente del alimento y reduciendo el desperdicio en las jaulas.",
    image: "/FotosWeb/Alimentacion.jpeg",
  },
  {
    id: "item-4",
    title: "Apoyo a Centros de Cultivo",
    summary: "Servicio integral de operarios calificados para pre-armado, desarme y apoyo en diversas labores operacionales dentro de los centros de cultivo acuícola.",
    image: "/FotosWeb/apoyo.jpeg",
  },
  {
    id: "item-5",
    title: "Inspección de Sustrato",
    summary: "Inspección detallada del fondo marino y lacustre mediante ROV para evaluar el estado del sustrato, acumulación de residuos y condición ambiental del sector.",
    image: "/FotosWeb/inspeccion.jpeg",
  },
  {
    id: "item-6",
    title: "Inspección de Redes Peceras y Loberas",
    summary: "Inspección exhaustiva de redes con video HD en tiempo real, detectando roturas, desgaste y anomalías para prevenir fugas y garantizar la integridad estructural.",
    image: "/FotosWeb/inspeccionR.jpeg",
  },
  {
    id: "item-7",
    title: "Retiro de Redes con Embarcación",
    summary: "Operaciones de retiro y traslado de redes mediante embarcación especializada, con apoyo rov  y operarios calificados  para garantizar una maniobra segura y eficiente en todo momento.",
    image: "/FotosWeb/retiro.jpeg",
  },
];

export function ServicesCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => { carouselApi.off("select", update); };
  }, [carouselApi]);

  return (
    <section style={{ background: "#f0f6ff", padding: "120px 0" }}>
      {/* Cabecera */}
      <div style={{
        padding: "0 28px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 24,
        margin: "0 0 56px 0",
      }}>
        <div>
          <p style={{
            color: "#1a5fa8",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Lo que ofrecemos
          </p>
          <div style={{ width: 48, height: 3, background: "#0ea5e9", borderRadius: 2, marginBottom: 24 }} />
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#0f172a",
            lineHeight: 1.1,
            margin: 0,
          }}>
            Nuestros Servicios
          </h2>
        </div>

        {/* Botones prev/next */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            style={{
              borderColor: "#1a5fa8",
              color: "#1a5fa8",
              opacity: canScrollPrev ? 1 : 0.35,
            }}
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            style={{
              borderColor: "#1a5fa8",
              color: "#1a5fa8",
              opacity: canScrollNext ? 1 : 0.35,
            }}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      {/* Carrusel */}
      <div style={{ width: "100%", paddingLeft: 24 }}>
        <Carousel
          setApi={setCarouselApi}
          opts={{ containScroll: "trimSnaps", breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
        >
          <CarouselContent style={{ marginLeft: 0, paddingLeft: 0 }}>
            {services.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4"
                style={{ maxWidth: 420, minWidth: 300 }}
              >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}>
                  {/* Imagen */}
                  <div style={{
                    aspectRatio: "3/2",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>

                  {/* Texto */}
                  <div style={{ padding: "24px 28px 32px", flex: 1 }}>
                    <div style={{
                      width: 32,
                      height: 3,
                      background: "#0ea5e9",
                      borderRadius: 2,
                      marginBottom: 14,
                    }} />
                    <h3 style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 14,
                      color: "#64748b",
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {item.summary}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
