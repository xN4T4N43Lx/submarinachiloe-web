"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { title: "Nosotros",    href: "/nosotros"    },
  { title: "Servicios",   href: "/servicios"   },
  { title: "Tecnologías", href: "/tecnologias" },
  { title: "Contacto",    href: "/contacto"    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span className="text-[#1a5fa8] font-black text-lg tracking-tight uppercase">Submarina</span>
            <span className="text-gray-800 font-black text-lg tracking-tight uppercase ml-1">Chiloé</span>
          </Link>

          <nav className="flex items-center gap-6">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="inline-flex h-10 items-center rounded-md px-5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#1a5fa8]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-[#1a5fa8] font-black text-base tracking-tight uppercase">Submarina</span>
            <span className="text-gray-800 font-black text-base tracking-tight uppercase ml-1">Chiloé</span>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-gray-200">
                <Menu className="h-5 w-5 text-gray-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader className="mb-6">
                <SheetTitle>
                  <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-1">
                    <span className="text-[#1a5fa8] font-black text-base uppercase">Submarina</span>
                    <span className="text-gray-800 font-black text-base uppercase ml-1">Chiloé</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-md px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-[#1a5fa8] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
