
import React from 'react';
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Review: React.FC = () => {
  const testimonials = [
 {
    id: 1,
    name: "Aulia Rahman",
    role: "UNDIP - Teknik Komputer",
    content: "Sebagai tamu di SEF, saya melihat acara ini sangat terorganisir. Interaksi antar peserta dan booth kampus berjalan aktif dan edukatif.",
    rating: 5,
  },
  {
    id: 2,
    name: "Muhammad Rizky",
    role: "UGM - Teknik Informatika",
    content: "Saya berperan sebagai mentor singkat dan sangat mengapresiasi antusiasme peserta. Konsep acaranya matang dan relevan.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dinda Maharani",
    role: "ITS - Sistem Informasi",
    content: "SEF menjadi wadah yang baik untuk berbagi pengalaman kuliah. Peserta sangat aktif bertanya dan panitia responsif.",
    rating: 4,
  },
  {
    id: 4,
    name: "Raka Pradipta",
    role: "UI - Ilmu Komputer",
    content: "Sebagai tamu undangan, saya kagum dengan profesionalisme panitia dan konsep booth yang interaktif.",
    rating: 5,
  },
  {
    id: 5,
    name: "Nabila Putri",
    role: "Peserta Kelas 12",
    content: "Acaranya seru dan membuka wawasan tentang jurusan kuliah. Saya jadi lebih yakin menentukan pilihan kampus.",
    rating: 5,
  },
  {
    id: 6,
    name: "Rafi Alamsyah",
    role: "Peserta Kelas 11",
    content: "Penjelasan dari tiap booth mudah dipahami. Saya jadi tahu banyak jurusan yang sebelumnya belum saya kenal.",
    rating: 4,
  },
  {
    id: 7,
    name: "Siti Khadijah",
    role: "Peserta Kelas 10",
    content: "Pengalaman pertama ikut edu fair dan sangat berkesan. Kakak-kakaknya ramah dan informatif.",
    rating: 4,
  },
  {
    id: 8,
    name: "Fajar Nugroho",
    role: "Peserta Kelas 12",
    content: "SEF membantu saya memahami prospek jurusan dan dunia perkuliahan dengan lebih jelas.",
    rating: 5,
  },
  {
    id: 9,
    name: "Aisyah Ramadhani",
    role: "Peserta Kelas 11",
    content: "Acaranya tidak membosankan dan penuh insight. Sangat direkomendasikan untuk siswa SMA.",
    rating: 5,
  },
  {
    id: 10,
    name: "Bagas Prasetyo",
    role: "Peserta Kelas 10",
    content: "Saya jadi lebih termotivasi untuk belajar dan merencanakan masa depan sejak dini.",
    rating: 4,
  },
  {
    id: 11,
    name: "Gibran Pratama",
    role: "Volunteer - UNNES",
    content: "Menjadi volunteer di SEF memberi saya pengalaman kerja tim dan komunikasi yang sangat berharga.",
    rating: 5,
  },
  {
    id: 12,
    name: "Dewi Lestari",
    role: "Volunteer - UI",
    content: "Saya belajar manajemen acara dan koordinasi panitia. Relasi yang didapat juga sangat luas.",
    rating: 5,
  },
  {
    id: 13,
    name: "Ahmad Fauzan",
    role: "Volunteer - ITS",
    content: "Pengalaman kepanitiaan yang sangat berkesan. Saya belajar tanggung jawab dan problem solving.",
    rating: 4,
  },
  {
    id: 14,
    name: "Intan Permata",
    role: "Volunteer - UNDIP",
    content: "SEF menjadi tempat belajar langsung tentang dunia event. Panitia saling support satu sama lain.",
    rating: 5,
  },
  {
    id: 15,
    name: "Yoga Pratama",
    role: "Volunteer - UNPAD",
    content: "Banyak pelajaran yang saya ambil, terutama dalam hal koordinasi dan komunikasi antar divisi.",
    rating: 4,
  },
  {
    id: 16,
    name: "Kevin Adrian",
    role: "BINUS - Computer Science",
    content: "Sebagai mentor, saya senang bisa berbagi pengalaman kuliah dan melihat antusiasme peserta.",
    rating: 5,
  },
  ];

  return (
    <div id="review" className="py-32 bg-slate-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-montserrat">Review Acara</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Dengarkan apa kata mereka yang telah bergabung di Smansa Edu Fair sebelumnya, baik peserta maupun volunteer.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee py-4 whitespace-nowrap gap-8 group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="flex-shrink-0 w-[350px] bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 flex flex-col hover:bg-slate-900 transition-colors">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-slate-700" />
                ))}
              </div>
              
              <div className="relative mb-8 min-h-[80px]">
                <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white/5" />
                <p className="text-slate-300 italic relative z-10 leading-relaxed whitespace-normal line-clamp-3">"{review.content}"</p>
              </div>

              <div className="mt-auto flex items-center gap-4">
                <div>
                  <h5 className="font-bold text-white whitespace-nowrap">{review.name}</h5>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Review;
