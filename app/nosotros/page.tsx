const CYAN = '#0ea5e9';

export default function NosotrosPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section style={{ background: '#ffffff', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 100 }}>

          {/* Fila 1: imagen + historia */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1551244072-5d12893278bc?w=900&q=80"
                alt="ROV Submarina Chiloé"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ color: CYAN, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', margin: 0 }}>
                ¿Quiénes somos?
              </p>
              <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, margin: 0 }}>
                Submarina Chiloé
              </h1>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                En el año 2016 nace la empresa Robótica Submarina Chiloé Spa fundada por José Luis Baez Abarca
                Ingeniero Acuícola, supervisor y buzo comercial, que con más de 15 años experiencia en el rubro
                acuícola, tanto en el ámbito de producción como en operaciones.
              </p>
              <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                En la actualidad contamos con un gran equipo humano calificado en la parte técnica y profesional,
                como también contamos con tecnología de punta a disposición de nuestros clientes, para poder
                brindar un servicio con los más altos cánones de calidad en la Robótica Submarina – Apoyo Mano
                de obra para generar soluciones a la industria Acuícola.
              </p>
            </div>
          </div>

          {/* Fila 2: visión/misión + imagen */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <div>
                <h2 style={{ fontSize: 14, fontWeight: 900, color: '#0f172a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                  Visión
                </h2>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Empresa especializada en servicios de Robótica submarina con altos estándares de calidad,
                  tecnología, con énfasis en la seguridad en apoyo personal, orientados a satisfacer las
                  necesidades de nuestros clientes bajo los principios de responsabilidad, respeto,
                  profesionalismo, puntualidad y concepto claro de servicio.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 14, fontWeight: 900, color: '#0f172a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                  Misión
                </h2>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Ser la empresa líder en desarrollo de servicios marítimos y robóticos en la industria acuícola
                  y ser reconocida por emplear el mejor equipo humano y tecnológico brindando servicios con los
                  más altos estándares en calidad – eficiencia – soluciones, enfocando nuestras acciones a la
                  sustentabilidad de la industria.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&q=80"
                alt="ROV operación"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
