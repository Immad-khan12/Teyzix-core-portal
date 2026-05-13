import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/logo.png'

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
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }}
      className={['fixed top-0 w-full z-50 transition-all duration-300', scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-black/30' : 'bg-transparent'].join(' ')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/40 transition-all duration-300 scale-110" />
              <img src={logo} alt="TEYZIX CORE" className="relative w-14 h-14 object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(74,222,128,0.8)] transition-all duration-300" />
            </div>
            <div className="flex flex-col leading-none ml-1">
              <span className="text-lg font-extrabold tracking-wider">
                <span className="text-green-400">TEYZIX</span>
                <span className="text-white"> CORE</span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.2em] uppercase font-medium">Core of Innovation</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link key={link.to} to={link.to}
                className={location.pathname === link.to ? 'text-sm text-green-400 font-semibold' : 'text-sm text-gray-300 hover:text-white transition-colors duration-200'}>
                {link.label}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link to="/admin/dashboard" className="text-sm text-gray-300 hover:text-white">Dashboard</Link>
                <button onClick={logout} className="text-sm bg-red-500/20 text-red-400 px-4 py-2 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition">Logout</button>
              </>
            ) : (
              <Link to="/admin" className="text-sm bg-green-500/10 text-green-400 px-4 py-2 rounded-lg border border-green-500/30 hover:bg-green-500/20 transition">Admin</Link>
            )}
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className={location.pathname === link.to ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-white'}>
                  {link.label}
                </Link>
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
