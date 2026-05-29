import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(to bottom, #0f172a, #1e3a5f)",
      color: "white",
      width: "100%",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "64px 40px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>

        {/* Logo + nombre */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <Image
            src="/Logo1.png"
            alt="Submarina Chiloé"
            width={72}
            height={72}
            style={{ objectFit: "contain" }}
          />
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <span style={{ color: "#1a5fa8", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              Submarina
            </span>
            <span style={{ color: "white", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", marginLeft: 6 }}>
              Chiloé
            </span>
          </Link>
        </div>

        {/* Misión */}
        <p style={{
          maxWidth: 520,
          color: "#94a3b8",
          fontSize: 14,
          lineHeight: 1.75,
          marginBottom: 48,
        }}>
          Ser la empresa líder en desarrollo de servicios marítimos y robóticos en la industria
          acuícola y ser reconocida por emplear el mejor equipo humano y tecnológico brindando
          servicios con los más altos estándares en calidad – eficiencia – soluciones, enfocando
          nuestras acciones a la sustentabilidad de la industria.
        </p>

        {/* Divisor */}
        <div style={{ width: "100%", borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 24 }} />

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "#64748b", textAlign: "center" }}>
          Submarina Chiloé © 2026. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}
