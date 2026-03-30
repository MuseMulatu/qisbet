'use client'

import { motion } from 'framer-motion'
import { Eye, Zap, MessageCircle } from 'lucide-react'

export function About() {
  const steps = [
    {
      icon: Eye,
      number: '01',
      title: 'Choose how you show up',
      description: 'Pick your identity for the night — be yourself, go lowkey, or create an alter ego.',
      color: 'var(--accent-purple)',
    },
    {
      icon: Zap,
      number: '02',
      title: 'Join live moments',
      description: 'Enter rooms, match with strangers, or drop voice notes into the Pulse feed.',
      color: 'var(--accent-emerald)',
    },
    {
      icon: MessageCircle,
      number: '03',
      title: 'Connect instantly',
      description: 'Voice-first. No swiping. Just real conversation with real people.',
      color: 'var(--accent-amber)',
    },
  ]

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">How it works</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-4">
            You don't scroll.<br />You show up.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative p-8 rounded-2xl glass-effect text-center group hover:scale-[1.02] gentle-animation"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: `color-mix(in srgb, ${step.color} 15%, transparent)` }}
              >
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
              </div>

              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2 block">{step.number}</span>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 gentle-animation" style={{ backgroundColor: step.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
