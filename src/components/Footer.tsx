'use client'

export function Footer() {
  return (
    <footer className="relative py-16 bg-card/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <p className="text-lg font-display font-semibold text-foreground mb-2 animate-breathe">
          Something is happening tonight.
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          Qisbet — a live, exclusive social layer for Ethiopians.
        </p>

        <div className="flex justify-center gap-8 text-xs text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground gentle-animation">About</a>
          <a href="#" className="hover:text-foreground gentle-animation">Community</a>
          <a href="#" className="hover:text-foreground gentle-animation">Safety</a>
          <a href="#" className="hover:text-foreground gentle-animation">Contact</a>
        </div>

        <p className="text-xs text-muted-foreground/50">
          © 2026 Qisbet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
