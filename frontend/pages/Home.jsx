import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Users, Globe, Star } from 'lucide-react'

const stats = [
  { label: 'Active Internships', value: '6+', icon: Briefcase },
  { label: 'Students Placed', value: '200+', icon: Users },
  { label: 'Partner Companies', value: '15+', icon: Globe },
  { label: 'Satisfaction Rate', value: '98%', icon: Star },
]

const reasons = [
  { title: 'Real-World Experience', desc: 'Work on actual production projects, not toy examples.' },
  { title: 'Mentorship', desc: 'Get guided by industry professionals throughout your journey.' },
  { title: 'Certificate', desc: 'Earn a verified certificate upon successful completion.' },
  { title: 'Remote Friendly', desc: 'Work from anywhere in Pakistan with flexible hours.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
              🚀 Applications Open for 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Launch Your Career with{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                TEYZIX CORE
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join Pakistan's fastest growing tech internship program. Build real skills, work on real projects, and kickstart your tech career.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/internships"
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Browse Internships <ArrowRight size={18} />
              </Link>
              <Link
                to="/apply"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <Icon size={28} className="text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4"
          >
            Why Join <span className="text-green-400">TEYZIX CORE</span>?
          </motion.h2>
          <p className="text-gray-400 text-center mb-12">Everything you need to grow as a developer</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-green-400 text-lg">✦</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12 text-center backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 mb-8">Applications are open. Don't miss this opportunity to grow.</p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}