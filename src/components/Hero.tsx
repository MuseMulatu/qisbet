'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Hero() {
  const [emailFocused, setEmailFocused] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(265,80%,8%)] via-background to-[hsl(160,40%,6%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-emerald/8 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-primary rounded-full float-gentle opacity-40" />
        <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-accent-emerald rounded-full drift-left opacity-30" />
        <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-accent-amber rounded-full drift-right opacity-50" />
        <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-primary/60 rounded-full float-gentle opacity-20" style={{ animationDelay: '3s' }} />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 glass-navbar"
      >
        <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">Qisbet</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground gentle-animation">How it works</a>
            <a href="#experiences" className="text-sm text-muted-foreground hover:text-foreground gentle-animation">Experiences</a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground gentle-animation">Community</a>
          </div>
          <button
            onClick={() => navigate('/lobby')}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 gentle-animation"
          >
            Enter
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-effect"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">Live rooms starting soon</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-foreground"
        >
          Qisbet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-2 font-light"
        >
          Be where the moment happens.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-base text-muted-foreground/70 mb-10"
        >
          Real conversations. Real people. Live.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/lobby')}
            className="relative px-8 py-3.5 rounded-full font-semibold text-primary-foreground bg-primary glow-purple hover:scale-105 gentle-animation text-base"
          >
            Enter Qisbet
          </button>
          <button
            className="px-8 py-3.5 rounded-full font-semibold text-foreground border border-border hover:border-muted-foreground/40 gentle-animation text-base glass-effect"
          >
            Get Early Access
          </button>
        </motion.div>
      </div>

      {/* Bottom floating text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-xs text-muted-foreground/40 tracking-widest uppercase animate-breathe">
          Something is happening tonight
        </p>
      </motion.div>
    </div>
  )
}
