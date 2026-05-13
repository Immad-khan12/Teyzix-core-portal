import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Briefcase, DollarSign, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingPositions = [
  { title: 'Frontend Developer Intern', skills: 'React, Tailwind', stipend: 'PKR 5,000/mo', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10 border-blue-500/20' },
  { title: 'Backend Developer Intern', skills: 'Python, FastAPI', stipend: 'PKR 5,000/mo', color: 'from-purple-500 to-violet-500', bg: 'bg-purple-500/10 border-purple-500/20' },
  { title: 'Full Stack Developer Intern', skills: 'React, Node.js', stipend: 'PKR 8,000/mo', color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10 border-green-500/20' },
  { title: 'UI/UX Design Intern', skills: 'Figma, Adobe XD', stipend: 'PKR 4,000/mo', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10 border-pink-500/20' },
  { title: 'Data Science Intern', skills: 'Python, ML, SQL', stipend: 'PKR 7,000/mo', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10 border-orange-500/20' },
  { title: 'DevOps Intern', skills: 'Docker, AWS, Linux', stipend: 'PKR 6,000/mo', color: 'from-red-500 to-rose-500', bg: 'bg-red-500/10 border-red-500/20' },
];

const budgetPlans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Free',
    color: 'from-gray-500 to-gray-600',
    border: 'border-gray-700',
    features: ['Apply to internships', 'Basic profile', 'Email support', 'Community access'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Star,
    price: 'PKR 999/mo',
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-500/50',
    features: ['Priority application review', 'Resume building help', 'Mock interviews', '1-on-1 mentorship', 'Certificate on completion'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: DollarSign,
    price: 'Custom',
    color: 'from-purple-500 to-violet-500',
    border: 'border-purple-500/50',
    features: ['Hire interns for your company', 'Talent pool access', 'Custom requirements', 'Dedicated account manager', 'Bulk hiring support'],
    cta: 'Contact Us',
    popular: false,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', budget: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '', budget: '' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about our internship programs? We are here to help you launch your career.
          </p>
        </motion.div>

        {/* Upcoming Positions */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
              Now Hiring
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Upcoming <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-gray-400">Apply now before seats fill up!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingPositions.map((pos, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={"border rounded-2xl p-6 hover:scale-105 transition-all duration-300 " + pos.bg}>
                <div className={"inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r " + pos.color + " text-white mb-4"}>
                  {pos.stipend}
                </div>
                <h3 className="text-lg font-bold mb-2">{pos.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{pos.skills}</p>
                <Link to="/apply" className={"inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r " + pos.color + " bg-clip-text text-transparent"}>
                  Apply Now <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Budget / Pricing Plans */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-green-400 uppercase bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-gray-400">Flexible options for students and companies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetPlans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className={"relative bg-gray-900 border-2 rounded-2xl p-8 " + plan.border + (plan.popular ? " scale-105" : "")}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
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
                <Link to="/apply" className={"w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl bg-gradient-to-r " + plan.color + " text-white hover:opacity-90 transition-opacity"}>
                  {plan.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-400">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'info@teyzixcore.com' },
                  { icon: Phone, label: 'Phone', value: '+92 300 1234567' },
                  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon - Fri: 9AM - 6PM PKT' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
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
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="text-green-400" size={22} />
                <h3 className="text-lg font-bold">Quick Response</h3>
              </div>
              <p className="text-gray-400 text-sm">We typically respond within 24 hours. For urgent inquiries please call us directly.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {submitted && (
                <div className="mb-5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 text-center font-semibold">
                  Message sent successfully!
                </div>
              )}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Ali Hassan" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="ali@example.com" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input type="text" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} placeholder="Internship Inquiry" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Budget / Plan Interest</label>
                  <select value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500">
                    <option value="">Select a plan...</option>
                    <option value="starter">Starter - Free</option>
                    <option value="professional">Professional - PKR 999/mo</option>
                    <option value="enterprise">Enterprise - Custom Budget</option>
                    <option value="custom">I want to discuss custom project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Tell us how we can help you..." className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none" />
                </div>
                <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
                  <Send size={18} /> Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
