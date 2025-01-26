'use client'

import { motion } from "framer-motion"
import { Brain, Moon, Sparkles } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const benefits = [
  {
    title: "Reduced Stress & Anxiety",
    description: "Regular meditation practice helps lower cortisol levels, promoting relaxation and emotional balance.",
    icon: Sparkles,
  },
  {
    title: "Enhanced Focus",
    description: "Improve concentration and mental clarity through mindfulness techniques and guided practices.",
    icon: Brain,
  },
  {
    title: "Better Sleep Quality",
    description: "Develop better sleep patterns and deeper rest through evening meditation routines.",
    icon: Moon,
  },
]

export function Benefits() {
  return (
    <div id="benefits" className="relative isolate py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 animated-gradient opacity-[0.07] dark:opacity-[0.05]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Benefits of Meditation
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Experience profound positive changes in your life through regular meditation practice.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="flex flex-col items-start"
              >
                <div className="rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 mb-6">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <dt className="text-xl font-semibold leading-7 mb-4">
                  {benefit.title}
                </dt>
                <dd className="text-base sm:text-lg leading-7 text-muted-foreground">
                  {benefit.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
