
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop" 
          alt="Audience" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/40" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <ScrollReveal animation="fade-up" duration={1000}>
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="mt-11 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              SMA Negeri 1 Majenang
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-bold font-montserrat tracking-tight leading-[1.1] text-white">
                Smansa <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Edu Fair</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-small italic max-w-2xl mx-auto opacity-90">
                Ready to Learn, Ready to Lead, Ready to Campus Life
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Eksplorasi dunia kampus bersama SEF 2026, mulai dari info universitas hingga strategi UTBK. Join sebagai volunteer dan bangun jaringan luas bersama kami!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#volunteer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/30 group text-xl"
              >
                Join as Volunteer
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-white">20+</p>
                <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wider">Universitas</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-white">2000+</p>
                <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wider">Peserta</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
                <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wider">Talkshows</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
