'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mic, MicOff, Video, LogOut, ArrowLeft, RefreshCw } from 'lucide-react'
import GlassCard from '@/components/GlassCard'

const PARTICIPANTS = [
  { name: 'AddisSoul', speaking: true, color: 'var(--accent-purple)' },
  { name: 'DiasporaLink', speaking: false, color: 'var(--accent-emerald)' },
  { name: 'Lowkey', speaking: false, color: 'var(--accent-amber)' },
  { name: 'NightOwl', speaking: false, color: 'var(--accent-blue)' },
  { name: 'You', speaking: false, color: 'var(--accent-rose)' },
]

export default function RoomPage() {
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(false)
  const [prompt, setPrompt] = useState('Rank your group by extroversion')

  const prompts = [
    'Rank your group by extroversion',
    'Who here would survive a zombie apocalypse?',
    'Most likely to ghost someone after a great date?',
    'Who has the best taste in music?',
  ]

  const nextPrompt = () => {
    const current = prompts.indexOf(prompt)
    setPrompt(prompts[(current + 1) % prompts.length])
  }

  return (
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,6%)] to-background" />
      </div>

      {/* Top Bar */}
      <div className="relative z-20 p-4 flex items-center justify-between">
        <button onClick={() => navigate('/lobby')} className="p-2 rounded-full glass-effect">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-sm font-bold text-foreground text-center">Late Night Vibes</h1>
          <p className="text-xs text-muted-foreground text-center">{PARTICIPANTS.length} participants</p>
        </div>
        <div className="w-9" />
      </div>

      {/* Participants Grid */}
      <div className="flex-1 relative z-10 flex items-center justify-center px-6">
        <div className="grid grid-cols-3 gap-6 max-w-sm">
          {PARTICIPANTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-2">
                {/* Speaker glow ring */}
                {p.speaking && (
                  <div className="absolute -inset-1 rounded-full border-2 border-primary animate-pulse" />
                )}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gentle-animation"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${p.color} 40%, hsl(240,6%,10%)), color-mix(in srgb, ${p.color} 15%, hsl(240,6%,10%)))`,
                    boxShadow: p.speaking ? `0 0 25px color-mix(in srgb, ${p.color} 30%, transparent)` : 'none',
                  }}
                />
                {p.speaking && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                    {[0, 1, 2].map(j => (
                      <motion.div
                        key={j}
                        className="w-1 rounded-full bg-primary"
                        animate={{ height: [3, 8, 3] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: j * 0.15 }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xs font-medium text-foreground">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Center Prompt */}
      <div className="relative z-10 px-6 mb-6">
        <GlassCard className="p-6 text-center" glowColor="var(--accent-purple)">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Group Prompt</p>
          <h3 className="font-display text-lg font-bold text-foreground mb-4">{prompt}</h3>
          <button
            onClick={nextPrompt}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-primary/15 text-primary hover:bg-primary/25 gentle-animation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Next Prompt
          </button>
        </GlassCard>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-20 p-4 pb-8">
        <div className="max-w-sm mx-auto flex items-center justify-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center gentle-animation ${
              isMuted ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'
            }`}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground gentle-animation">
            <Video className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate('/lobby')}
            className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-destructive hover:bg-destructive/30 gentle-animation"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
