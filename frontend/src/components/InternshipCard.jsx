import { motion } from 'framer-motion'
import { Clock, MapPin, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function InternshipCard({ internship, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
    >
      <span className={internship.location === 'Remote' ? 'absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400' : internship.location === 'Onsite' ? 'absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400' : 'absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400'}>
        {internship.location}
      </span>
      <h3 className="text-lg font-semibold text-white mb-3 pr-20">{internship.title}</h3>
      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
        <span className="flex items-center gap-1"><Clock size={14} />{internship.duration}</span>
        <span className="flex items-center gap-1"><DollarSign size={14} />{internship.stipend}</span>
        <span className="flex items-center gap-1"><MapPin size={14} />{internship.location}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{internship.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {internship.skills.map((skill) => (
          <span key={skill} className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full">{skill}</span>
        ))}
      </div>
      <Link to={'/apply?domain=' + internship.title} className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-300">
        Apply Now
      </Link>
    </motion.div>
  )
}
