'use client'

import { motion } from 'framer-motion'
import { Play, Flame, Eye, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

const PULSE_ITEMS = [
  { id: 1, user: 'AddisSoul', text: 'Nah, splitting the bill is a test 😭', reactions: { fire: 12, laugh: 8, eyes: 3, hundred: 5 } },
  { id: 2, user: 'NightOwl', text: '', reactions: { fire: 24, laugh: 2, eyes: 15, hundred: 9 } },
  { id: 3, user: 'Lowkey', text: 'Depends on the vibe honestly', reactions: { fire: 6, laugh: 18, eyes: 1, hundred: 3 } },
  { id: 4, user: 'Habesha.fm', text: '', reactions: { fire: 31, laugh: 5, eyes: 22, hundred: 14 } },
]

export function PulseFeed() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {/* Daily Question */}
      <div className="p-5 rounded-2xl glass-effect text-center mb-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Today's Question</p>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
          Would you split the bill on a first date in Addis?
        </h3>
      </div>

      {/* Feed Items */}
      {PULSE_ITEMS.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-xl glass-effect cursor-pointer gentle-animation hover:scale-[1.01]"
          onClick={() => setExpanded(expanded === item.id ? null : item.id)}
        >
          <div className="flex items-center gap-3 mb-2">
            {/* Play / Waveform */}
            <button className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 hover:bg-primary/25 gentle-animation">
              <Play className="w-4 h-4 text-primary fill-primary" />
            </button>

            {/* Waveform placeholder */}
            <div className="flex-1 flex items-center gap-0.5 h-6">
              {Array.from({ length: 24 }).map((_, j) => (
                <div
                  key={j}
                  className="w-1 rounded-full bg-primary/30"
                  style={{
                    height: `${4 + Math.sin(j * 0.8 + i * 2) * 8 + Math.random() * 6}px`,
                    animationDelay: `${j * 0.05}s`,
                  }}
                />
              ))}
            </div>

            <span className="text-xs font-semibold text-muted-foreground">{item.user}</span>
          </div>

          {item.text && (
            <p className="text-sm text-foreground/80 ml-[52px] mb-2">{item.text}</p>
          )}

          {/* Reactions */}
          <div className="flex items-center gap-3 ml-[52px]">
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground gentle-animation">🔥 {item.reactions.fire}</button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground gentle-animation">😂 {item.reactions.laugh}</button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground gentle-animation">👀 {item.reactions.eyes}</button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground gentle-animation">💯 {item.reactions.hundred}</button>
          </div>

          {/* Expanded */}
          {expanded === item.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="ml-[52px] mt-3 pt-3 border-t border-border"
            >
              <button className="text-xs font-semibold text-primary hover:underline">Connect Later →</button>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Record Input */}
      <div className="sticky bottom-0 pt-4 pb-2 bg-gradient-to-t from-background to-transparent">
        <div className="flex items-center gap-3 p-3 rounded-full glass-effect">
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 glow-purple hover:scale-105 gentle-animation">
            <div className="w-3 h-3 rounded-full bg-primary-foreground" />
          </button>
          <input
            type="text"
            placeholder="Hold to record or type..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}
