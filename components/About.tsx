
import React from 'react';
import { Target, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Misi Utama",
      description: "Menjembatani kesenjangan informasi antara siswa SMA dengan dunia perkuliahan dan profesional."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Kredibilitas",
      description: "Menghadirkan narasumber dari universitas ternama dan alumni berprestasi untuk info akurat."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Inspirasi",
      description: "Mendorong semangat belajar dan eksplorasi minat bakat melalui berbagai talkshow inspiratif."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Visi Masa Depan",
      description: "Mencetak generasi yang siap memimpin dan berkontribusi bagi bangsa melalui pendidikan."
    }
  ];

  return (
    <div className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs">Tentang Event</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-montserrat">Apa itu Smansa Edu Fair?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Smansa Edu Fair (SEF) adalah agenda tahunan unggulan yang dirancang untuk memberikan wawasan mendalam 
              kepada para pelajar tentang jenjang pendidikan tinggi.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal animation="slide-left">
            <div className="space-y-8">
              <h4 className="text-3xl font-bold">Pusat Informasi Pendidikan</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                Diselenggarakan oleh OSIS & Komite Sekolah, SEF 2026 bertujuan untuk membantu siswa menentukan 
                langkah strategis dalam memilih program studi dan universitas. Kami mengumpulkan puluhan institusi 
                pendidikan dalam satu atap untuk memberikan kemudahan akses informasi bagi semua.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="bg-blue-500/20 p-3 rounded-xl mt-1">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Orientasi Karir & Akademik</p>
                    <p className="text-slate-400">Konsultasi langsung dengan konselor pendidikan berpengalaman.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="bg-emerald-500/20 p-3 rounded-xl mt-1">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Networking Alumni</p>
                    <p className="text-slate-400">Berbagi pengalaman suka duka kehidupan kampus dengan para senior.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-right">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students" className="rounded-[2.5rem] w-full h-[400px] object-cover shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop" alt="Learning" className="rounded-[2.5rem] w-full h-[400px] object-cover mt-12 shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
              <div className="bg-slate-950/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 group h-full">
                <div className="bg-slate-900 p-5 rounded-2xl inline-block mb-8 group-hover:scale-110 group-hover:bg-blue-600/10 transition-all">
                  {item.icon}
                </div>
                <h5 className="text-xl font-bold mb-4 text-white">{item.title}</h5>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
