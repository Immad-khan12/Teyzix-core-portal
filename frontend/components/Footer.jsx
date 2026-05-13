import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-green-400">TEYZIX</span>{' '}
                <span className="text-white">CORE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">Core of Innovation. Empowering the next generation of tech leaders.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/internships', 'Internships'], ['/apply', 'Apply Now'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="text-gray-400 hover:text-green-400 transition text-sm">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span>📧 info@teyzixcore.com</span>
              <span>🌍 teyzixcore.com</span>
              <span>📍 Pakistan</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-500">
          © 2026 TEYZIX CORE. All rights reserved.
        </div>
      </div>
    </footer>
  )
}