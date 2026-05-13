import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Globe } from 'lucide-react'
import toast from 'react-hot-toast'

const faqs = [
  { q: 'Is the internship paid?', a: 'Yes! All our internships offer a monthly stipend ranging from PKR 4,000 to 8,000.' },
  { q: 'Can I apply for multiple domains?', a: 'You can apply for one domain per cycle. Choose the one that best matches your skills.' },
  { q: 'What is the duration?', a: 'Internships range from 2 to 3 months depending on the domain.' },
  { q: 'Is it fully remote?', a: 'Most internships are remote. Some may require occasional onsite visits depending on the role.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent! We\'ll get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-green-400">Touch</span></h1>
          <p className="text-gray-400">Have questions? We're here to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@teyzixcore.com' },
                { icon: Globe, label: 'Website', value: 'teyzixcore.com' },
                { icon: MapPin, label: 'Location', value: 'Pakistan (Remote-First)' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium py-3 rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked <span className="text-green-400">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-gray-400 text-sm">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}