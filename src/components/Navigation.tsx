'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

const navItems = [
  { name: 'Benefits', id: 'benefits' },
  { name: 'Meditations', id: 'videos' },
  { name: 'Resources', id: 'resources' }
]

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif text-lg hover:text-primary transition-colors"
            >
              Inner Harmony
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Button>
              ))}
            </nav>
            <div className="ml-4 flex items-center pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
