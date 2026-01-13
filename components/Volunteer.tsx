
import React from 'react';
import { ClipboardCheck, Users, Zap, ExternalLink, ArrowRight, QrCode } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Volunteer: React.FC = () => {
  return (
    <div id="volunteer" className="py-32 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Refined subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="bg-slate-950/50 border border-white/5 rounded-[4rem] p-8 md:p-20 overflow-hidden relative group shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-blue-500 font-black uppercase tracking-[0.3em] text-[13px]">Open Recruitment</h2>
                  <h3 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-white leading-tight">Be Part of the <span className="text-blue-500">Journey!</span></h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                    Kami mencari individu yang bersemangat untuk bergabung sebagai volunteer di Event SEF. 
                    Ini kesempatanmu untuk terlibat langsung dalam penyelenggaraan Smansa Edu Fair, mengasah kemampuan organisasi, memperluas relasi, dan berkontribusi nyata bagi masa depan siswa SMA Negeri 1 Majenang.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: <Users className="text-blue-400" />, title: "Networking", desc: "Berinteraksi dengan perwakilan kampus dan peserta." },
                    { icon: <Zap className="text-emerald-400" />, title: "Experience", desc: "Bangun portfolio melalui pengalaman mengelola event edukasi.​" },
                    { icon: <ClipboardCheck className="text-rose-400" />, title: "Certificate", desc: "Mendapatkan sertifikat resmi sebagai bukti partisipasi.​" },
                    { icon: <ArrowRight className="text-amber-400" />, title: "Growth", desc: "Mengasah soft skill dan kemampuan kepemimpinan.​" }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-5 group/item">
                      <div className="bg-white/5 p-4 h-fit rounded-2xl group-hover/item:bg-white/10 transition-colors">
                        {React.cloneElement(benefit.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">{benefit.title}</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <a 
                    href="https://bit.ly/pendaftaranpanitiasef2026" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-blue-600/30 group/btn"
                  >
                    Join as Volunteer
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Glowing background for QR */}
                  <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-75 animate-pulse" />
                  
                  <div className="relative p-12 bg-slate-900 rounded-[3rem] border border-white/10 shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] space-y-8 flex flex-col items-center">
                    <div className="bg-white p-6 rounded-[2rem] shadow-2xl">
                      {/* Static Image Replacement for QR Code */}
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://google.com/forms" 
                        alt="Volunteer Registration QR Code" 
                        className="w-48 h-48 block"
                      />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <p className="text-lg font-bold text-white tracking-tight">Scan for Registration</p>
                      <p className="text-sm text-slate-500 max-w-[200px] mx-auto leading-relaxed">Arahkan kamera ponsel Anda untuk mulai mendaftar.</p>
                    </div>
                    
                    <div className="flex items-center gap-3 px-6 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <QrCode className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Live Recruitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Volunteer;
