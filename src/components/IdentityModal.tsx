'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface IdentityModalProps {
  isOpen: boolean;
  onClose: (identity: string) => void;
}

export function IdentityModal({ isOpen, onClose }: IdentityModalProps) {
  const [selected, setSelected] = useState<string>('real')
  const [alterEgoName, setAlterEgoName] = useState('')

  const options = [
    { id: 'real', label: 'Real You', desc: 'Show up as yourself tonight', emoji: '🙋' },
    { id: 'lowkey', label: 'Lowkey', desc: 'Anonymous but authentic', emoji: '🕶️' },
    { id: 'alter', label: 'Alter Ego', desc: 'Create a persona for the night', emoji: '🎭' },
  ]

  const handleEnter = () => {
    const identity = selected === 'alter' && alterEgoName ? alterEgoName : options.find(o => o.id === selected)?.label || 'Lowkey'
    onClose(identity)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-md p-8 rounded-3xl glass-effect relative"
          >
            <button onClick={() => onClose('Lowkey')} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground gentle-animation">
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-display text-2xl font-black text-foreground mb-1 text-center">Choose how you show up tonight</h2>
            <p className="text-sm text-muted-foreground text-center mb-8">This identity follows you across Match, Rooms & Pulse</p>

            <div className="space-y-3 mb-6">
              {options.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border gentle-animation ${
                    selected === opt.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-muted-foreground/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selected === 'alter' && (
              <input
                type="text"
                placeholder="Enter your alter ego name..."
                value={alterEgoName}
                onChange={e => setAlterEgoName(e.target.value)}
                className="w-full mb-6 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary gentle-animation"
              />
            )}

            <button
              onClick={handleEnter}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 gentle-animation glow-purple"
            >
              Enter
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
