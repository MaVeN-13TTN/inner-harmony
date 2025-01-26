'use client'

import { Shuffle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const articles = [
  {
    title: "What Happens to Your Mind, Brain and Body During Meditation?",
    description: "An in-depth exploration of the effects of meditation on mental and physical health.",
    url: "https://mindworks.org/blog/what-happens-to-your-mind-brain-and-body-during-meditation/",
    category: "Science",
  },
  {
    title: "9 Quick Mindfulness Exercises For Emotional Regulation",
    description: "Practical exercises to help manage emotions through mindfulness.",
    url: "https://www.thedailymeditation.com/9-quick-mindfulness-exercises-for-emotional-regulation",
    category: "Practice",
  },
  {
    title: "5 Meditation Techniques Beginners Are Finding Easy",
    description: "A guide to accessible meditation methods for those new to the practice.",
    url: "https://www.thedailymeditation.com/5-meditation-techniques-beginners-are-finding-easy",
    category: "Beginners",
  },
  {
    title: "7 Meditation Tips That Make the Biggest Difference",
    description: "Tips to enhance the effectiveness of your meditation sessions.",
    url: "https://www.thedailymeditation.com/7-meditation-tips-that-make-the-biggest-difference",
    category: "Tips",
  },
  {
    title: "How I Finally Found the Magic of Meditation",
    description: "A personal narrative detailing the journey to embracing meditation.",
    url: "https://blog.nateliason.com/p/finding-meditation",
    category: "Story",
  },
  {
    title: "I Tried Meditation for My Depression—Here's What I Learned",
    description: "An individual's experience with using meditation as a tool for managing depression.",
    url: "https://www.verywellmind.com/meditation-for-depression-8720875",
    category: "Mental Health",
  },
  {
    title: "How Long Should You Meditate?",
    description: "An analysis of optimal meditation durations for various benefits.",
    url: "https://www.vox.com/future-perfect/392636/how-to-meditate-time-yoga-sitting-long-movement",
    category: "Guide",
  },
  {
    title: "Hugh Jackman Explains Why He Practices Transcendental Meditation",
    description: "Insights into how meditation has impacted the life of actor Hugh Jackman.",
    url: "https://people.com/hugh-jackman-says-transcendental-meditation-changed-him-exclusive-8712211",
    category: "Story",
  },
  {
    title: "David Lynch Tells GQ His Secrets to Happiness",
    description: "Filmmaker David Lynch discusses the role of meditation in achieving happiness.",
    url: "https://www.gq.com/story/david-lynch-tells-gq-his-secrets-to-happiness",
    category: "Story",
  },
  {
    title: "Tips for Staying Present During Vacation",
    description: "Strategies to maintain mindfulness and presence while traveling.",
    url: "https://www.cntraveler.com/story/tips-for-staying-present-during-vacation",
    category: "Tips",
  },
]

export function Resources() {
  'use client'

  const [currentArticle, setCurrentArticle] = useState(articles[0])
  const [direction, setDirection] = useState(1)

  const shuffleArticle = () => {
    setDirection(Math.random() > 0.5 ? 1 : -1)
    const currentIndex = articles.findIndex(article => article.url === currentArticle.url)
    let nextIndex
    do {
      nextIndex = Math.floor(Math.random() * articles.length)
    } while (nextIndex === currentIndex)
    setCurrentArticle(articles[nextIndex])
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotate: direction > 0 ? 20 : -20
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotate: direction < 0 ? 20 : -20
    })
  }

  return (
    <div id="resources" className="relative isolate py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 animated-gradient opacity-[0.07] dark:opacity-[0.05]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Meditation Resources
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Explore our curated collection of articles to deepen your understanding of meditation
            and enhance your practice.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px] flex items-center gap-8 max-w-[1200px] mx-auto">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentArticle.url}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 },
                    rotate: { duration: 0.4 }
                  }}
                  className="flex-1"
                >
                  <a
                    href={currentArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mx-auto max-w-3xl group relative rounded-2xl bg-card p-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/5 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                          {currentArticle.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Article {articles.findIndex(a => a.url === currentArticle.url) + 1} of {articles.length}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-medium leading-tight text-card-foreground group-hover:text-primary mb-4">
                        {currentArticle.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {currentArticle.description}
                      </p>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>

              <div className="flex-none">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent transition-transform hover:scale-110"
                  onClick={shuffleArticle}
                  aria-label="Shuffle articles"
                >
                  <Shuffle className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
