'use client'

import { motion } from 'framer-motion'
import { Headphones, Heart, MessageSquare } from 'lucide-react'

export function Portfolio() {
  const experiences = [
    {
      icon: Headphones,
      title: 'Live Audio Rooms',
      description: 'Drop into intimate conversations happening right now. No video. Just vibes.',
      tag: 'Live',
      color: 'var(--accent-emerald)',
      participants: '12 listening',
    },
    {
      icon: Heart,
      title: 'Blind Date Sessions',
      description: 'Audio-first speed matching. 7 minutes. No photos. Pure connection.',
      tag: 'Tonight',
      color: 'var(--accent-rose)',
      participants: '6 waiting',
    },
    {
      icon: MessageSquare,
      title: 'Voice Debates',
      description: 'Hot takes on culture, love, and life. Pick a side and defend it.',
      tag: 'Popular',
      color: 'var(--accent-amber)',
      participants: '24 in room',
    },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(265,20%,6%)] to-background" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Experiences</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Live right now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative p-6 rounded-2xl glass-effect group hover:scale-[1.03] gentle-animation cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 gentle-animation rounded-2xl" style={{
                boxShadow: `inset 0 0 40px color-mix(in srgb, ${exp.color} 10%, transparent)`
              }} />

              {/* Tag */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{
                  backgroundColor: `color-mix(in srgb, ${exp.color} 15%, transparent)`,
                  color: exp.color,
                }}>
                  {exp.tag}
                </span>
                <span className="text-xs text-muted-foreground">{exp.participants}</span>
              </div>

              <div className="relative z-10">
                <exp.icon className="w-8 h-8 mb-4" style={{ color: exp.color }} />
                <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>

              {/* Decorative dots */}
              <div className="flex gap-1.5 mt-5 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
