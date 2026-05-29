import { Contact2 } from "@/components/ui/contact-2"

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-16">
      <Contact2
        title="¿Requieres más información? Ponte en contacto con nosotros"
        description="Estamos disponibles para responder consultas y cotizaciones. Nuestro equipo técnico le contactará dentro de las próximas 24 horas hábiles."
        phone="+56 9 7899 6819"
        email="jose.baez@submarinachiloe.com"
        location="Chiloé, Región de Los Lagos"
      />
    </main>
  )
}
