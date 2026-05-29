"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { title: "Nosotros",    href: "/"    },
  { title: "Servicios",   href: "/servicios"   },
  { title: "Tecnologías", href: "/tecnologias" },
  { title: "Contacto",    href: "/contacto"    },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        display: "flex",
        alignItems: "center",
        background: "rgba(7,21,36,0.97)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "0 1px 0 rgba(255,255,255,0.05)",
        transition: "all 0.3s ease",
      }}>
        <div className="header-grid" style={{
          width: "100%",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <Image
              src="/Logo1.png"
              alt="Submarina Chiloé"
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
            />
            <span style={{ color: "#0ea5e9", fontWeight: 900, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              Submarina
            </span>
            <span style={{ color: "white", fontWeight: 900, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.02em", marginLeft: -4 }}>
              Chiloé
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hide-mobile">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 40,
                  padding: "0 20px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "white"
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Hamburger mobile */}
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="show-mobile"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              width: 40,
              height: 40,
              borderRadius: 6,
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.75)",
              cursor: "pointer",
            }}
          >
            <Menu size={20} />
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hide-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
            .header-grid {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              padding: 0 20px !important;
            }
          }
        `}</style>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "rgba(7,21,36,0.98)",
          display: "flex",
          flexDirection: "column",
          padding: "0 40px",
        }}>
          {/* Top bar */}
          <div style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}>
            <Link href="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Image src="/Logo1.png" alt="Submarina Chiloé" width={32} height={32} style={{ objectFit: "contain" }} />
              <span style={{ color: "#0ea5e9", fontWeight: 900, fontSize: 16, textTransform: "uppercase" }}>Submarina</span>
              <span style={{ color: "white", fontWeight: 900, fontSize: 16, textTransform: "uppercase", marginLeft: -4 }}>Chiloé</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Links */}
          <nav style={{ display: "flex", flexDirection: "column", paddingTop: 16 }}>
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  padding: "16px 0",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  transition: "color 0.15s",
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
