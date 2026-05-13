import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { submitApplication } from '../services/api'
import toast from 'react-hot-toast'
import { CheckCircle } from 'lucide-react'

const domains = ['Frontend Developer','Backend Developer','Full Stack Developer','UI/UX Design','Data Science','DevOps']
const steps = ['Personal Info','Application Details','Review & Submit']

export default function Apply() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', domain: searchParams.get('domain') || '', message: '' })

  const update = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const validateStep = () => {
    if (step === 0) {
      if (!form.name || !form.email || !form.phone) { toast.error('Please fill all fields'); return false }
      if (!/\S+@\S+\.\S+/.test(form.email)) { toast.error('Invalid email'); return false }
    }
    if (step === 1) {
      if (!form.domain || !form.message) { toast.error('Please fill all fields'); return false }
      if (form.message.length < 30) { toast.error('Cover letter must be at least 30 characters'); return false }
    }
    return true
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await submitApplication(form)
      setSubmitted(true)
      toast.success('Application submitted!')
    } catch (err) { toast.error(err.response?.data?.detail || 'Failed to submit') }
    finally { setLoading(false) }
  }

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
        <p className="text-gray-400">Thank you {form.name}! We will review your application and get back to you at {form.email}.</p>
      </motion.div>
    </div>
  )

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Apply for <span className="text-green-400">Internship</span></h1>
          <p className="text-gray-400">Complete the form below to submit your application</p>
        </motion.div>
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute top-4 left-0 right-0 h-px bg-white/10 z-0" />
          <div className="absolute top-4 left-0 h-px bg-green-500 z-0 transition-all duration-500" style={{ width: (step / (steps.length - 1) * 100) + '%' }} />
          {steps.map((s, i) => (
            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
              <div className={i < step ? 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 bg-green-500 border-green-500 text-white' : i === step ? 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 bg-green-500/20 border-green-500 text-green-400' : 'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 bg-[#0a0a0f] border-white/20 text-gray-500'}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className="text-xs text-gray-400 hidden sm:block">{s}</span>
            </div>
          ))}
        </div>
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              {[{name:'name',label:'Full Name',type:'text',placeholder:'John Doe'},{name:'email',label:'Email',type:'email',placeholder:'john@example.com'},{name:'phone',label:'Phone',type:'tel',placeholder:'+92 300 1234567'}].map(f => (
                <div key={f.name}>
                  <label className="block text-sm text-gray-400 mb-2">{f.label}</label>
                  <input type={f.type} name={f.name} value={form[f.name]} onChange={update} placeholder={f.placeholder} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50" />
                </div>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-6">Application Details</h2>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Domain</label>
                <select name="domain" value={form.domain} onChange={update} className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50">
                  <option value="">Select a domain</option>
                  {domains.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Cover Letter</label>
                <textarea name="message" value={form.message} onChange={update} rows={5} placeholder="Tell us about yourself and why you want to join TEYZIX CORE..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 resize-none" />
                <p className="text-right text-xs text-gray-500 mt-1">{form.message.length} chars</p>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Review Your Application</h2>
              <div className="space-y-4">
                {[{label:'Full Name',value:form.name},{label:'Email',value:form.email},{label:'Phone',value:form.phone},{label:'Domain',value:form.domain}].map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
                <div className="pt-3">
                  <p className="text-gray-400 text-sm mb-2">Cover Letter</p>
                  <p className="text-white text-sm bg-white/5 rounded-xl p-4">{form.message}</p>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between mt-8">
            {step > 0 ? <button onClick={() => setStep(s => s-1)} className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition">Back</button> : <div />}
            {step < steps.length - 1
              ? <button onClick={() => { if(validateStep()) setStep(s => s+1) }} className="px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-medium">Continue</button>
              : <button onClick={handleSubmit} disabled={loading} className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium disabled:opacity-50">{loading ? 'Submitting...' : 'Submit Application'}</button>
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
}
