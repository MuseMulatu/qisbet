'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mic, MicOff, Clock, Video, ArrowLeft, Sparkles } from 'lucide-react'

export default function MatchPage() {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(420) // 7:00
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred cinematic bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(265,30%,8%)] via-background to-[hsl(265,20%,6%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-breathe" />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20">
        <button onClick={() => navigate('/lobby')} className="p-2 rounded-full glass-effect hover:scale-105 gentle-animation">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className={`font-mono text-2xl font-bold ${timer < 60 ? 'text-destructive' : 'text-foreground'}`}>
            {formatTime(timer)}
          </span>
        </div>
        <button onClick={() => navigate('/lobby')} className="px-4 py-2 rounded-full text-xs font-semibold text-destructive border border-destructive/30 hover:bg-destructive/10 gentle-animation">
          Leave
        </button>
      </div>

      {/* Center — Audio Waveform / Avatar */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Pulsing rings */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute -inset-4 rounded-full border border-primary/10 animate-ping" style={{ animationDuration: '4s' }} />
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center pulse-glow">
            {/* Waveform bars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 rounded-full bg-primary"
                  animate={{
                    height: [4, 12 + Math.random() * 16, 4],
                  }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-1">Matched with</p>
        <h2 className="font-display text-xl font-bold text-foreground mb-1">Someone interesting</h2>
        <p className="text-xs text-muted-foreground/60">Audio only • Be curious</p>
      </div>

      {/* Bottom Controls */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 left-4 right-4 z-20"
      >
        <div className="max-w-sm mx-auto p-4 rounded-full glass-effect flex items-center justify-between">
          {/* Mic */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center gentle-animation ${
              isMuted ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'
            }`}
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Extend */}
          <button className="px-5 py-2.5 rounded-full bg-accent-amber/15 text-accent-amber text-xs font-semibold flex items-center gap-1.5 hover:bg-accent-amber/25 gentle-animation">
            <Sparkles className="w-3.5 h-3.5" />
            Extend Time
          </button>

          {/* Video request */}
          <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground gentle-animation">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
