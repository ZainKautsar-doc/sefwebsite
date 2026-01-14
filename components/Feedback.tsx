
import React from 'react';
import { MessageSquarePlus, Heart, Send, Sparkle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Feedback: React.FC = () => {
  return (
    <div className="py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 rounded-[4rem] overflow-hidden relative group shadow-xl dark:shadow-2xl">
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-20 text-center">
              <div className="max-w-3xl mx-auto space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-black uppercase tracking-widest">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    Pesan & Kesan
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-slate-900 dark:text-white leading-tight">
                    Suara Anda Adalah <span className="text-rose-500">Inspirasi Kami</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
                    Bagikan momen berhargamu, masukan membangun, atau sekadar cerita seru selama mengikuti Smansa Edu Fair. Feedback Anda sangat berarti untuk masa depan SEF yang lebih baik.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
                      <MessageSquarePlus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Mudah Diisi</p>
                    <p className="text-xs text-slate-500">Hanya perlu beberapa menit.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Sparkle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Apresiasi</p>
                    <p className="text-xs text-slate-500">Masukan Anda kami hargai.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Send className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Terintegrasi</p>
                    <p className="text-xs text-slate-500">Langsung ke tim panitia.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="https://google.com/forms" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-rose-600/30 group text-xl"
                  >
                    Isi Pesan & Kesan
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Feedback;
