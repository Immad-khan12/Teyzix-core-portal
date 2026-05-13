import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-9xl font-bold text-green-500/30 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-medium">Go Home</Link>
      </motion.div>
    </div>
  )
}
