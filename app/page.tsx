'use client';
import { useEffect } from 'react';

const BLUE = '#1a5fa8';
const CYAN = '#0ea5e9';

// ──────────────────────────────────────────────
function QuienesSomos() {
  return (
    <section id="nosotros" style={{ background: '#ffffff', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 100 }}>

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
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, margin: 0 }}>
              Submarina Chiloé
            </h2>
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
              <h3 style={{ fontSize: 14, fontWeight: 900, color: '#0f172a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                Visión
              </h3>
              <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Empresa especializada en servicios de Robótica submarina con altos estándares de calidad,
                tecnología, con énfasis en la seguridad en apoyo personal, orientados a satisfacer las
                necesidades de nuestros clientes bajo los principios de responsabilidad, respeto,
                profesionalismo, puntualidad y concepto claro de servicio.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 900, color: '#0f172a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
                Misión
              </h3>
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
  );
}

// ──────────────────────────────────────────────
function Clientes() {
  const nombres = ['Mowi', 'Cermaq', 'AquaChile', 'Multiexport', 'Camanchaca', 'Los Fiordos', 'Salmones Aysén', 'Marine Harvest'];

  return (
    <section id="clientes" style={{ background: '#ffffff', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <p style={{ color: BLUE, fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
          Confían en nosotros
        </p>
        <div style={{ width: '48px', height: '3px', background: CYAN, borderRadius: '2px', marginBottom: '32px' }} />
        <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#0f172a', marginBottom: '16px' }}>
          Nuestros clientes
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '64px', maxWidth: '480px' }}>
          Trabajamos con las principales empresas de la industria salmonera y acuícola de Chile.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {nombres.map(n => (
            <div key={n} style={{ height: '88px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
              <span style={{ color: '#94a3b8', fontWeight: 600, fontSize: '14px' }}>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* ── Hero: video fijo de fondo ── */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        {/* Video de fondo */}
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Overlay oscuro */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />

        {/* Texto centrado */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
          gap: 16,
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}>
            Robótica Submarina Chiloé
          </p>
          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Profundidades<br />Submarinas
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
            marginTop: 8,
            letterSpacing: '0.05em',
          }}>
            Desplaza para explorar
          </p>
        </div>
      </section>

      <QuienesSomos />
      <Clientes />
    </>
  );
}
