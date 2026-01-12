
import React from 'react';
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Review: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 2,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 3,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 4,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 5,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 6,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 7,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 8,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 9,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    },
    {
      id: 10,
      name: "Gibran",
      role: "Wapres",
      content: "SEF keren!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=doni"
    }
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
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
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
