import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div 
      className="relative w-screen h-screen bg-neutral-950 text-neutral-300 font-sans overflow-hidden selection:bg-red-900 selection:text-white"
      style={{ backgroundColor: '#050505' }}
    >
      {/* SCANLINE OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-50" 
        style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }} 
      />

      {/* STATIC GRAIN */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-50 mix-blend-overlay" 
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')`
        }} 
      />

      {/* Main Content */}
      <main className="relative z-10 w-full h-full flex flex-col">
        {children}
      </main>
    </div>
  );
}
