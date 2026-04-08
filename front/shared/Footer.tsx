import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-primary font-bold text-lg">Esperanza</span>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} — Tunja, Colombia</p>
          <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mt-1">Hecho con React & Next.js</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer