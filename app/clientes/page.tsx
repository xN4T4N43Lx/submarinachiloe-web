'use client';

import Navbar from '@/components/layout/Navbar';
import { Users, Building2, Ship, Waves } from 'lucide-react';

export default function ClientesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <p className="text-[#1a5fa8] text-sm font-semibold tracking-wider uppercase mb-4">
              Próximamente
            </p>
            <h1 className="text-4xl lg:text-6xl font-black mb-6" style={{ color: 'hsl(var(--foreground))' }}>
              Nuestros Clientes
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Estamos trabajando en esta sección donde podrás conocer más sobre nuestros
              clientes y los proyectos que hemos desarrollado juntos en la industria acuícola.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Building2, title: "Industria Salmonera", desc: "Principales empresas del sector" },
              { icon: Ship, title: "Operaciones Marítimas", desc: "Flota comercial y técnica" },
              { icon: Users, title: "Equipos Especializados", desc: "Profesionales certificados" },
              { icon: Waves, title: "Proyectos Submarinos", desc: "Casos de éxito documentados" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-pro p-6 text-center group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1a5fa8]" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-pro p-8 lg:p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                ¿Quiere conocer nuestros casos de éxito?
              </h2>
              <p className="text-slate-600 mb-6">
                Contáctenos para conocer más sobre nuestros proyectos y referencias en la industria.
              </p>
              <a
                href="/contacto"
                className="btn btn-primary btn-lg inline-flex items-center justify-center px-6 py-3 bg-[#1a5fa8] text-white font-semibold rounded-lg hover:bg-[#155a9e] transition-colors duration-200"
              >
                Solicitar Referencias
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}