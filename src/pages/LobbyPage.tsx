'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Headphones, Calendar, MessageCircle } from 'lucide-react'
import GlassCard from '@/components/GlassCard'
import { PulseFeed } from '@/components/PulseFeed'
import { IdentityModal } from '@/components/IdentityModal'

export default function LobbyPage() {
  const navigate = useNavigate()
  const [identity, setIdentity] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(true)
  const [countdown, setCountdown] = useState(134) // 2:14
  const [liveCount] = useState(86)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(c => (c > 0 ? c - 1 : 134))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const rooms = [
    { name: 'Late Night Vibes', participants: '3/5', tags: ['Chill', 'Diaspora'], color: 'var(--accent-purple)' },
    { name: 'Habesha Hot Takes', participants: '5/5', tags: ['Debate'], color: 'var(--accent-amber)' },
    { name: 'Addis After Dark', participants: '2/5', tags: ['Chill'], color: 'var(--accent-emerald)' },
    { name: 'Culture Clash', participants: '4/5', tags: ['Debate', 'Fun'], color: 'var(--accent-blue)' },
  ]

  const events = [
    { title: 'Blind Date Night', time: '9:00 PM', countdown: '2h 45m' },
    { title: 'Diaspora Debate', time: '10:30 PM', countdown: '4h 15m' },
    { title: 'Late Night Confessions', time: '11:00 PM', countdown: '4h 45m' },
  ]

  if (showModal) {
    return (
      <IdentityModal
        isOpen={showModal}
        onClose={(id) => {
          setIdentity(id)
          setShowModal(false)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-navbar px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">Qisbet</span>
            <span className="text-xs text-muted-foreground">| Live now</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-primary">{identity}</span>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-20 pt-6 space-y-6">
        {/* Live Energy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber" /></span>
            🔥 {liveCount} people live now
          </span>
          <span className="flex items-center gap-1.5">🎧 {rooms.length} rooms active</span>
          <span className="flex items-center gap-1.5">💬 Match queue forming</span>
        </motion.div>

        {/* QISBET MATCH — Primary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <GlassCard className="p-8" glowColor="var(--accent-purple)">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Qisbet Match</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground mb-2">
              6 Matches. 7 Minutes. Audio First.
            </h2>
            <p className="text-sm text-muted-foreground mb-6">No swiping. Just real conversation.</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs text-amber-400 font-semibold animate-breathe">⏱ Next round in {formatTime(countdown)}</span>
              <span className="text-xs text-muted-foreground">3 people waiting…</span>
            </div>

            <button
              onClick={() => navigate('/match')}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 gentle-animation glow-purple text-base"
            >
              Enter Match Queue
            </button>
          </GlassCard>
        </motion.div>

        {/* LIVE ROOMS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-accent-emerald" />
              <h3 className="text-sm font-bold text-foreground">Live Rooms</h3>
            </div>
            <span className="text-xs text-muted-foreground">{rooms.length} active</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                onClick={() => navigate('/room')}
                className="flex-shrink-0 w-56 p-4 rounded-2xl glass-effect cursor-pointer hover:scale-[1.02] gentle-animation"
              >
                <h4 className="text-sm font-bold text-foreground mb-1">{room.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">👥 {room.participants}</p>
                <div className="flex gap-1.5">
                  {room.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={{
                      backgroundColor: `color-mix(in srgb, ${room.color} 12%, transparent)`,
                      color: room.color,
                    }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVENTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-accent-amber" />
            <h3 className="text-sm font-bold text-foreground">Tonight's Events</h3>
          </div>
          <div className="space-y-2">
            {events.map((ev, i) => (
              <div key={ev.title} className="flex items-center justify-between p-4 rounded-xl glass-effect">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{ev.title}</h4>
                  <p className="text-xs text-muted-foreground">{ev.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-accent-amber">{ev.countdown}</span>
                  <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary hover:bg-primary/25 gentle-animation">
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PULSE FEED */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground">Qisbet Pulse</h3>
            <span className="text-xs text-muted-foreground">🔊</span>
          </div>
          <PulseFeed />
        </motion.div>
      </main>
    </div>
  )
}
