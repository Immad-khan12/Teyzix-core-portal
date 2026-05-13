import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isAdmin, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/internships', label: 'Internships' },
    { to: '/apply', label: 'Apply' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <Globe size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg">
              <span className="text-green-400">TEYZIX</span>{' '}
              <span className="text-white">CORE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
                    ? 'text-green-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link to="/admin/dashboard" className="text-sm text-gray-300 hover:text-white">Dashboard</Link>
                <button onClick={logout} className="text-sm bg-red-500/20 text-red-400 px-4 py-1.5 rounded-lg hover:bg-red-500/30 transition">Logout</button>
              </>
            ) : (
              <Link to="/admin" className="text-sm bg-green-500/20 text-green-400 px-4 py-1.5 rounded-lg hover:bg-green-500/30 transition border border-green-500/30">Admin</Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white transition">{link.label}</Link>
              ))}
              {isAdmin
                ? <button onClick={() => { logout(); setOpen(false) }} className="text-left text-red-400">Logout</button>
                : <Link to="/admin" onClick={() => setOpen(false)} className="text-green-400">Admin Login</Link>
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}