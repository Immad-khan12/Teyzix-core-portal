import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getApplications, deleteApplication } from '../services/api'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Users, Trash2, Search, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const [applications, setApplications] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [domainFilter, setDomainFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => { fetchApplications() }, [])

  useEffect(() => {
    let result = applications
    if (domainFilter !== 'All') result = result.filter(a => a.domain === domainFilter)
    if (search) result = result.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase()))
    setFiltered(result)
  }, [search, domainFilter, applications])

  const fetchApplications = async () => {
    try {
      const res = await getApplications()
      setApplications(res.data)
      setFiltered(res.data)
    } catch { toast.error('Failed to fetch applications') }
    finally { setLoading(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this application?')) return
    try {
      await deleteApplication(id)
      setApplications(prev => prev.filter(a => a._id !== id))
      toast.success('Deleted!')
    } catch { toast.error('Failed to delete') }
  }

  const domains = ['All', ...new Set(applications.map(a => a.domain))]

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin <span className="text-green-400">Dashboard</span></h1>
            <p className="text-gray-400 text-sm mt-1">Manage all internship applications</p>
          </div>
          <button onClick={() => { logout(); navigate('/') }} className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-xl border border-red-500/20">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Applications', value: applications.length },
            { label: 'This Week', value: applications.filter(a => (new Date() - new Date(a.createdAt)) < 7*24*60*60*1000).length },
            { label: 'Domains', value: new Set(applications.map(a => a.domain)).size },
            { label: 'Showing', value: filtered.length },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{value}</div>
              <div className="text-gray-400 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or email..." className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 text-sm" />
          </div>
          <select value={domainFilter} onChange={e => setDomainFilter(e.target.value)} className="bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm">
            {domains.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {loading ? (
          <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-16 bg-white/5 rounded-xl animate-pulse" />)}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Users size={48} className="mx-auto mb-4 opacity-30" />
            <p>No applications found</p>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {['Name','Email','Phone','Domain','Date','Actions'].map(h => (
                      <th key={h} className="text-left text-gray-400 font-medium px-6 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((app, i) => (
                    <motion.tr key={app._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="px-6 py-4 text-white font-medium">{app.name}</td>
                      <td className="px-6 py-4 text-gray-400">{app.email}</td>
                      <td className="px-6 py-4 text-gray-400">{app.phone}</td>
                      <td className="px-6 py-4"><span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/20">{app.domain}</span></td>
                      <td className="px-6 py-4 text-gray-400">{new Date(app.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleDelete(app._id)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"><Trash2 size={16} /></button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
