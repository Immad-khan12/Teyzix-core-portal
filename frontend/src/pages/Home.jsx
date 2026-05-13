import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, Briefcase, Users, Globe, Star, Code, Palette, Database, Shield, Smartphone, Brain, Mail, Phone, MapPin, Send, Zap, DollarSign } from 'lucide-react'
import logo from '../assets/logo.png'

const stats = [
  { label: 'Active Internships', value: '6+', icon: Briefcase },
  { label: 'Students Placed', value: '200+', icon: Users },
  { label: 'Partner Companies', value: '15+', icon: Globe },
  { label: 'Satisfaction Rate', value: '98%', icon: Star },
]

const tracks = [
  { icon: Code, title: 'Frontend Dev', desc: 'React, Tailwind CSS, JavaScript', color: 'from-blue-500 to-cyan-500' },
  { icon: Database, title: 'Backend Dev', desc: 'Python, FastAPI, MongoDB', color: 'from-purple-500 to-violet-500' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe XD', color: 'from-pink-500 to-rose-500' },
  { icon: Shield, title: 'DevOps', desc: 'Docker, AWS, CI/CD', color: 'from-red-500 to-orange-500' },
  { icon: Smartphone, title: 'Mobile Dev', desc: 'React Native, Flutter', color: 'from-green-500 to-emerald-500' },
  { icon: Brain, title: 'Data Science', desc: 'Python, ML, AI', color: 'from-orange-500 to-amber-500' },
]

const upcomingPositions = [
  { title: 'Frontend Developer Intern', skills: 'React, Tailwind', stipend: 'PKR 5,000/mo', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10 border-blue-500/20' },
  { title: 'Backend Developer Intern', skills: 'Python, FastAPI', stipend: 'PKR 5,000/mo', color: 'from-purple-500 to-violet-500', bg: 'bg-purple-500/10 border-purple-500/20' },
  { title: 'Full Stack Developer Intern', skills: 'React, Node.js', stipend: 'PKR 8,000/mo', color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10 border-green-500/20' },
  { title: 'UI/UX Design Intern', skills: 'Figma, Adobe XD', stipend: 'PKR 4,000/mo', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10 border-pink-500/20' },
  { title: 'Data Science Intern', skills: 'Python, ML, SQL', stipend: 'PKR 7,000/mo', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10 border-orange-500/20' },
  { title: 'DevOps Intern', skills: 'Docker, AWS, Linux', stipend: 'PKR 6,000/mo', color: 'from-red-500 to-rose-500', bg: 'bg-red-500/10 border-red-500/20' },
]

const budgetPlans = [
  { name: 'Starter', icon: Zap, price: 'Free', color: 'from-gray-500 to-gray-600', border: 'border-gray-700', features: ['Apply to internships', 'Basic profile', 'Email support'], popular: false },
  { name: 'Professional', icon: Star, price: 'PKR 999/mo', color: 'from-green-500 to-emerald-500', border: 'border-green-500/50', features: ['Priority review', 'Mock interviews', '1-on-1 mentorship', 'Certificate'], popular: true },
  { name: 'Enterprise', icon: DollarSign, price: 'Custom', color: 'from-purple-500 to-violet-500', border: 'border-purple-500/50', features: ['Hire interns', 'Talent pool access', 'Dedicated manager', 'Bulk hiring'], popular: false },
]

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleContact = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '', budget: '' })
  }

  return (
    <div className="bg-gray-950 text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl scale-125" />
                <img src={logo} alt="TEYZIX CORE" className="relative w-36 h-36 md:w-48 md:h-48 object-contain" />
              </div>
            </motion.div>
            <span className="inline-block mb-6 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">Applications Open for 2026</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Launch Your Career with
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> TEYZIX CORE</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join Pakistan's fastest growing tech internship program.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/internships" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl">Browse Internships <ArrowRight size={18} /></Link>
              <Link to="/apply" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20">Apply Now</Link>
              <Link to="/contact" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20">Contact Us <Mail size={18} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
              <stat.icon className="text-green-400 mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Positions */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">Now Hiring</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Positions</span></h2>
            <p className="text-gray-400">Apply now before seats fill up!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingPositions.map((pos, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={"border rounded-2xl p-6 hover:scale-105 transition-all duration-300 " + pos.bg}>
                <div className={"inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r " + pos.color + " text-white mb-4"}>{pos.stipend}</div>
                <h3 className="text-lg font-bold mb-2">{pos.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{pos.skills}</p>
                <Link to="/apply" className={"inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r " + pos.color + " bg-clip-text text-transparent"}>Apply Now <ArrowRight size={14} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Internship <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Tracks</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Choose your path and start building real-world experience</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-900 border border-gray-800 hover:border-green-500/40 rounded-2xl p-6 transition-all group">
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r " + track.color}>
                  <track.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{track.title}</h3>
                <p className="text-gray-400 text-sm">{track.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/internships" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-3.5 rounded-xl">View All Internships <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Budget Plans */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Plan</span></h2>
            <p className="text-gray-400">Flexible options for students and companies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetPlans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className={"relative bg-gray-900 border-2 rounded-2xl p-8 " + plan.border + (plan.popular ? " scale-105" : "")}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</div>
                )}
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-r " + plan.color}>
                  <plan.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className={"text-3xl font-bold mb-6 bg-gradient-to-r " + plan.color + " bg-clip-text text-transparent"}>{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className={"w-5 h-5 rounded-full bg-gradient-to-r " + plan.color + " flex items-center justify-center flex-shrink-0"}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={"w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl bg-gradient-to-r " + plan.color + " text-white hover:opacity-90 transition-opacity"}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">Limited Seats</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Apply?</span></h2>
            <p className="text-gray-400 text-xl mb-8">Do not miss out on Pakistan's best tech internship opportunity!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-10 py-4 rounded-xl text-lg">Apply Now <ArrowRight size={20} /></Link>
              <Link to="/internships" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl border border-white/20 text-lg">Browse Internships</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Touch</span></h2>
            <p className="text-gray-400">Have questions? We are here to help!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'info@teyzixcore.com' },
                { icon: Phone, label: 'Phone', value: '+92 300 1234567' },
                { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              {submitted && (
                <div className="mb-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-center font-semibold">Message sent!</div>
              )}
              <div className="space-y-4">
                <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your Name" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" />
                <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Your Email" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" />
                <select value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500">
                  <option value="">Select Plan / Budget...</option>
                  <option value="starter">Starter - Free</option>
                  <option value="professional">Professional - PKR 999/mo</option>
                  <option value="enterprise">Enterprise - Custom Budget</option>
                  <option value="project">Custom Project Build</option>
                </select>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Your Message..." className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none" />
                <button onClick={handleContact} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
                  <Send size={18} /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
