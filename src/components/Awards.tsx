'use client'

import { motion } from 'framer-motion'
import { Shield, Radio, BadgeCheck, Bot } from 'lucide-react'

export function Awards() {
  const badges = [
    { icon: Shield, label: 'Invite Only', description: 'Curated community of real people', color: 'var(--accent-purple)' },
    { icon: Radio, label: 'Live Tonight', description: 'Something is always happening', color: 'var(--accent-emerald)' },
    { icon: BadgeCheck, label: 'Verified Community', description: 'Every voice is a real person', color: 'var(--accent-blue)' },
    { icon: Bot, label: 'No Bots', description: 'Humans only. Always.', color: 'var(--accent-amber)' },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">The Vibe</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Built different
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-6 rounded-2xl glass-effect text-center group hover:scale-[1.03] gentle-animation"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `color-mix(in srgb, ${badge.color} 12%, transparent)` }}
              >
                <badge.icon className="w-5 h-5" style={{ color: badge.color }} />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{badge.label}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
