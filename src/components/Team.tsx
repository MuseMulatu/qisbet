'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function Team() {
  const [hovered, setHovered] = useState<string | null>(null)

  const members = [
    { name: 'AddisSoul', status: 'Active Tonight', badge: 'Frequent Connector', color: 'var(--accent-purple)' },
    { name: 'DiasporaLink', status: 'In a room', badge: 'Early Member', color: 'var(--accent-emerald)' },
    { name: 'Lowkey', status: 'Listening', badge: 'Mystery Guest', color: 'var(--accent-amber)' },
    { name: 'NightOwl', status: 'Active Tonight', badge: 'Debate Champion', color: 'var(--accent-blue)' },
    { name: 'Habesha.fm', status: 'Hosting a room', badge: 'Top Host', color: 'var(--accent-rose)' },
  ]

  return (
    <div className="relative py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Community</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Who's here tonight
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center group cursor-pointer"
              onMouseEnter={() => setHovered(m.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Blurred avatar */}
              <div className="relative mb-3">
                <div
                  className="w-20 h-20 rounded-full gentle-animation"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${m.color} 40%, hsl(240,6%,10%)), color-mix(in srgb, ${m.color} 15%, hsl(240,6%,10%)))`,
                    filter: 'blur(0.5px)',
                    boxShadow: hovered === m.name ? `0 0 30px color-mix(in srgb, ${m.color} 30%, transparent)` : 'none',
                  }}
                />
                {/* Online dot */}
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background bg-accent-emerald" />
              </div>

              <span className="text-sm font-semibold text-foreground mb-0.5">{m.name}</span>

              {/* Hover info */}
              <div className={`text-xs text-muted-foreground gentle-animation ${hovered === m.name ? 'opacity-100' : 'opacity-0'}`}>
                {m.status}
              </div>
              <div className={`text-[10px] font-medium gentle-animation mt-0.5 ${hovered === m.name ? 'opacity-100' : 'opacity-0'}`} style={{ color: m.color }}>
                {m.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
