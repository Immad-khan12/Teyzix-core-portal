import { Link as RouterLink } from 'react-router-dom'
import { MessageCircle, Camera, Mail, Globe, MapPin, Link2 } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo Section */}
          <div className="md:col-span-1">
            <RouterLink to="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/40 transition-all duration-300" />
                <img src={logo} alt="TEYZIX CORE" className="relative w-14 h-14 object-contain" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold">
                  <span className="text-green-400">TEYZIX</span>
                  <span className="text-white"> CORE</span>
                </span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                  Core of Innovation
                </span>
              </div>
            </RouterLink>

            <p className="text-gray-400 text-sm">
              Empowering the next generation of tech leaders through real-world internships.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Quick Links</h4>

            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/internships', label: 'Internships' },
                { to: '/apply', label: 'Apply Now' },
                { to: '/contact', label: 'Contact' },
                { to: '/contact?project=true', label: 'Build a Project' },
              ].map(({ to, label }) => (
                <RouterLink
                  key={label}
                  to={to}
                  className="text-gray-400 hover:text-green-400 transition text-sm"
                >
                  {label}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Contact</h4>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-green-400" />
                info@teyzixcore.com
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Globe size={14} className="text-green-400" />
                teyzixcore.com
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="text-green-400" />
                Pakistan (Remote-First)
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-5 text-white">Follow Us</h4>

            <div className="flex flex-col gap-3">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/teyzixcore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition"
              >
                <div className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <Link2 size={15} className="text-blue-500" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <div className="w-9 h-9 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle size={15} className="text-green-400" />
                </div>
                <span className="text-sm">WhatsApp</span>
              </a>

              {/* Camera (fake social) */}
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition"
              >
                <div className="w-9 h-9 bg-pink-500/10 border border-pink-500/20 rounded-lg flex items-center justify-center">
                  <Camera size={15} className="text-pink-400" />
                </div>
                <span className="text-sm">Camera</span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-sm text-gray-500">
            © 2026 <span className="text-green-400 font-semibold">TEYZIX CORE</span>. All rights reserved.
          </p>

          <p className="text-sm text-gray-600">
            Designed & Developed by <span className="text-gray-400 font-semibold">Immad Shahzad</span>
          </p>
        </div>

      </div>
    </footer>
  )
}