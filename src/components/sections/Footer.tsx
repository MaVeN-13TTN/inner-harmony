'use client'

import { Github, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
]

export function Footer() {
  return (
    <footer className="relative isolate mt-24 sm:mt-32">
      <div className="absolute inset-0 -z-10 animated-gradient opacity-[0.07] dark:opacity-[0.05]" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-serif text-2xl">Inner Harmony</h3>
            <p className="text-base leading-6 text-muted-foreground max-w-md">
              Join our community and discover the transformative power of meditation. 
              Start your journey to inner peace today.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-transparent hover:bg-primary/10 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Guided Meditations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Blog Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24"
        >
          <p className="text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Inner Harmony. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
