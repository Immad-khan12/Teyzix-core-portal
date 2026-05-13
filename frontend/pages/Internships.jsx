import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { getInternships } from '../services/api'
import InternshipCard from '../components/InternshipCard'

const domains = ['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX', 'Data Science', 'DevOps']

export default function Internships() {
  const [internships, setInternships] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getInternships()
      .then(res => { setInternships(res.data); setFiltered(res.data) })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    let result = internships
    if (activeFilter !== 'All') {
      result = result.filter(i => i.title.toLowerCase().includes(activeFilter.toLowerCase()))
    }
    if (search) {
      result = result.filter(i =>
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
      )
    }
    setFiltered(result)
  }, [search, activeFilter, internships])

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Available <span className="text-green-400">Internships</span>
          </h1>
          <p className="text-gray-400">Find the perfect internship that matches your skills and goals</p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or skill..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {domains.map(d => (
            <button
              key={d}
              onClick={() => setActiveFilter(d)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === d
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-2xl h-64 animate-pulse border border-white/10" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg">No internships found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((internship, i) => (
              <InternshipCard key={internship._id} internship={internship} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}