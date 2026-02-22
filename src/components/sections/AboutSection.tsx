'use client';
import { useEffect, useRef } from 'react';

export default function WhoWeAre() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section style={{
        minHeight: '100vh',
        background: '#1c1c1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        overflow: 'hidden',
        position: 'relative',
      }}>

        {}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {}
          <div style={{
            position: 'absolute', width: 380, height: 380, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(80,40,190,0.28) 0%, transparent 70%)',
            top: '15%', left: '8%', filter: 'blur(55px)',
          }} />
          {}
          <div style={{
            position: 'absolute', width: 340, height: 340, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(15,100,60,0.22) 0%, transparent 70%)',
            top: '42%', left: '14%', filter: 'blur(55px)',
          }} />
          {}
          <div style={{
            position: 'absolute', width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(190,100,10,0.22) 0%, transparent 70%)',
            bottom: '15%', left: '10%', filter: 'blur(50px)',
          }} />
          {}
          <div style={{
            position: 'absolute', width: 460, height: 120, borderRadius: '50%',
            background: 'linear-gradient(90deg, rgba(220,50,50,0.1), rgba(220,160,0,0.1), rgba(0,180,80,0.09), rgba(0,100,220,0.08), rgba(140,0,220,0.09))',
            bottom: '20%', left: '6%', filter: 'blur(28px)',
          }} />
        </div>

        {}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 180, height: '100%', pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(255,255,255,0.04) 0%, transparent 100%)',
          zIndex: 2,
        }} />
        {}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 180, height: '100%', pointerEvents: 'none',
          background: 'linear-gradient(to left, rgba(255,255,255,0.04) 0%, transparent 100%)',
          zIndex: 2,
        }} />

        {}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5rem',
          maxWidth: 960,
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
        }}>

          {}
          <div style={{ flexShrink: 0, position: 'relative' }}>
            {}
            <div style={{
              position: 'absolute', inset: -4, borderRadius: 30,
              background: 'linear-gradient(135deg, rgba(100,60,220,0.45), rgba(30,140,80,0.25), rgba(200,110,20,0.35))',
              filter: 'blur(12px)',
              zIndex: 0,
            }} />
            {}
            <div style={{
              position: 'relative', zIndex: 1,
              padding: 2,
              borderRadius: 28,
              background: 'linear-gradient(135deg, rgba(130,90,240,0.55), rgba(40,160,90,0.3), rgba(220,120,30,0.4))',
            }}>
              <div
                ref={cardRef}
                style={{
                  width: 320,
                  height: 340,
                  borderRadius: 26,
                  background: '#bdbdbd',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.14) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
              </div>
            </div>
          </div>

          {}
          <div style={{ flex: 1, maxWidth: 420 }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 500,
              margin: '0 0 1.25rem 0',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              color: 'transparent',
              background: 'linear-gradient(180deg, #7a7a8a 0%, #b0b0c0 35%, #6a6a78 70%, #404048 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: 'transparent',
                background: 'linear-gradient(180deg, #606070 0%, #9090a0 50%, #505058 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>W</span>ho we are...
            </h2>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#525260',
              margin: 0,
              textAlign: 'center',
            }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
              tempor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
