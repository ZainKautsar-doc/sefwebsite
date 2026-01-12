
import React, { useState } from 'react';
import { Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Documentation: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const items = [
    { id: 1, type: 'photo', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Talkshow Sesi 1' },
    { id: 2, type: 'video', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Aftermovie 2025' },
    { id: 3, type: 'photo', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Campus Expo Hall' },
    { id: 4, type: 'photo', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Registrasi Peserta' },
    { id: 5, type: 'video', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Highlights Day 2' },
    { id: 6, type: 'photo', url: 'https://i.ibb.co/9mrWmq8J/IMG-3799.webp', title: 'Awarding Night' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <div className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs">Dokumentasi</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-montserrat tracking-tight">Momen Berharga Kami</h3>
            </div>
            
            <div className="flex p-1.5 bg-slate-950/50 rounded-2xl border border-white/5 backdrop-blur-md">
              {(['all', 'photo', 'video'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-8 py-2.5 rounded-xl text-sm font-bold capitalize transition-all duration-300 ${
                    filter === t 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                      : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={idx * 100}>
              <div 
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-slate-950 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2 block">
                        {item.type}
                      </span>
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full hover:bg-white/20 transition-colors">
                      {item.type === 'video' ? <Play className="w-5 h-5 fill-white" /> : <ImageIcon className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
                
                {item.type === 'video' && (
                  <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest border border-white/5">
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" /> Video
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-20 text-center">
            <a
              href="https://www.instagram.com/smansaedufair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-all group px-8 py-4 rounded-full border border-white/5 hover:border-white/10 hover:bg-white/5"
              >Lihat Seluruh Album di Instagram
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Documentation;
