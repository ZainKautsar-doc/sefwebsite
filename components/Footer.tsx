
import React from 'react';
import { Instagram, Mail, MessageCircle, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-montserrat tracking-tighter">SEF 2026</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Event edukasi terbesar yang menghubungkan siswa dengan masa depan impian mereka. 
              Bersama Smansa Edu Fair, wujudkan ambisi akademis Anda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-blue-600 transition-all border border-white/5 hover:border-blue-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-emerald-600 transition-all border border-white/5 hover:border-emerald-500">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-rose-600 transition-all border border-white/5 hover:border-rose-500">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About SEF</a></li>
              <li><a href="#documentation" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#review" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#volunteer" className="hover:text-blue-400 transition-colors">Join Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Informasi</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Siswa & Mahasiswa</li>
              <li>Sponsor & Media Partner</li>
              <li>Volunteer Guidelines</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Sekretariat</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              SMA Negeri 1 <br />
              Jl. Pendidikan No. 45, <br />
              Kota Belajar, Indonesia 12345
            </p>
            <p className="mt-4 text-sm text-blue-400 font-medium">info@smansafair.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-medium tracking-wider uppercase">
          <p>© 2026 Smansa Edu Fair. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
