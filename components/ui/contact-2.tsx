"use client"

import React, { useState } from "react"
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react"

interface Contact2Props {
  title?: string
  description?: string
  phone?: string
  email?: string
  location?: string
}

export const Contact2 = ({
  title = "Contáctenos",
  description = "Cuéntanos tus dudas o necesidades y nos pondremos en contacto contigo personalmente.",
  phone = "+56 9 7899 6819",
  email = "jose.baez@submarinachiloe.com",
  location = "Chiloé, Región de Los Lagos",
}: Contact2Props) => {
  const [submitted, setSubmitted] = useState(false)

  const wpNumber = phone.replace(/[\s+]/g, "").replace(/^0/, "")
  const contactItems = [
    {
      icon: Phone,
      label: "Escríbenos por WhatsApp",
      value: phone,
      href: `https://wa.me/${wpNumber}`,
      target: "_blank",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: location,
      href: null,
      target: undefined,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: email,
      href: `https://mail.google.com/mail/?view=cm&to=${email}`,
      target: "_blank",
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "120px 0",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <style>{`
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
              padding: 0 20px !important;
            }
          }
        `}</style>

        {/* ── Columna izquierda ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

          {/* Badge */}
          <span style={{
            display: "inline-block",
            alignSelf: "flex-start",
            padding: "5px 14px",
            borderRadius: 999,
            background: "#e6f0fa",
            color: "#1a5fa8",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}>
            Contáctanos
          </span>

          {/* Título */}
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 900,
            color: "#0d1b5e",
            lineHeight: 1.15,
            margin: 0,
          }}>
            {title}
          </h1>

          {/* Descripción */}
          <p style={{
            fontSize: 16,
            color: "#687799",
            lineHeight: 1.7,
            maxWidth: 420,
            margin: 0,
          }}>
            {description}
          </p>

          {/* Items de contacto */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 8 }}>
            {contactItems.map(({ icon: Icon, label, value, href, target }) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <Icon
                  style={{ width: 20, height: 20, color: "#1a5fa8", flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <p style={{ fontSize: 13, color: "#9eaabf", marginBottom: 3, margin: "0 0 3px" }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      style={{
                        fontWeight: 700,
                        color: "#0d1b5e",
                        textDecoration: "none",
                        fontSize: 15,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#e8533a")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#0d1b5e")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontWeight: 700, color: "#0d1b5e", fontSize: 15, margin: 0 }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha — formulario ── */}
        <div style={{
          background: "#ffffff",
          borderRadius: 16,
          boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
          padding: "48px 44px",
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#0d1b5e",
            textAlign: "center",
            marginBottom: 32,
            marginTop: 0,
          }}>
            Envíanos un mensaje
          </h2>

          {submitted && (
            <div style={{
              marginBottom: 24,
              borderRadius: 8,
              background: "#f0f7ff",
              border: "1px solid #bfdbfe",
              padding: "12px 16px",
              fontSize: 14,
              color: "#1e40af",
              fontWeight: 500,
            }}>
              ¡Mensaje enviado! Nos pondremos en contacto pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Fila 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input
                type="text"
                placeholder="Nombre y Apellido"
                required
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.outline = "2px solid #0d1b5e")}
                onBlur={e => (e.currentTarget.style.outline = "none")}
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.outline = "2px solid #0d1b5e")}
                onBlur={e => (e.currentTarget.style.outline = "none")}
              />
            </div>

            {/* Fila 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input
                type="tel"
                placeholder="Teléfono"
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.outline = "2px solid #0d1b5e")}
                onBlur={e => (e.currentTarget.style.outline = "none")}
              />
              <input
                type="text"
                placeholder="Asunto"
                required
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.outline = "2px solid #0d1b5e")}
                onBlur={e => (e.currentTarget.style.outline = "none")}
              />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Mensaje"
              required
              rows={9}
              style={{
                ...inputStyle,
                height: "auto",
                resize: "none",
                fontFamily: "inherit",
                lineHeight: 1.6,
              }}
              onFocus={e => (e.currentTarget.style.outline = "2px solid #0d1b5e")}
              onBlur={e => (e.currentTarget.style.outline = "none")}
            />

            {/* Botón */}
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginTop: 8,
                padding: "0 32px",
                height: 56,
                background: "#0d1b5e",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                border: "none",
                borderRadius: 999,
                cursor: "pointer",
                transition: "background 0.2s",
                alignSelf: "flex-start",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1a2e7a")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0d1b5e")}
            >
              Enviar
              <span style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
              }}>
                <ArrowRight size={15} />
              </span>
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 52,
  padding: "0 16px",
  background: "#f2f3f5",
  border: "none",
  borderRadius: 8,
  fontSize: 15,
  color: "#0d1b5e",
  outline: "none",
  fontFamily: "inherit",
}
