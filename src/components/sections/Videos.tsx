'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

// Helper function to get YouTube video ID
function getYouTubeVideoId(url: string) {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : url.split('/').pop()
}

const videos = [
  {
    title: "A Powerful 20 Minute Guided Meditation",
    description: "A session designed to deepen your meditation practice.",
    url: "https://www.youtube.com/watch?v=zYpvOotEbhQ",
    duration: "20 min",
    category: "Deep Practice"
  },
  {
    title: "Guided Meditation - Blissful Deep Relaxation",
    description: "A meditation aimed at achieving profound relaxation.",
    url: "https://www.youtube.com/watch?v=Jyy0ra2WcQQ",
    duration: "15 min",
    category: "Relaxation"
  },
  {
    title: "A Deep Relaxation Meditation That Will Take You to a New Reality",
    description: "A guided journey to help you reach a state of deep relaxation.",
    url: "https://www.youtube.com/watch?v=rO0MT1oPPK4",
    duration: "25 min",
    category: "Relaxation"
  },
  {
    title: "10 Minute Morning Meditation - High Frequency Positive Energy",
    description: "A short session to energize your morning.",
    url: "https://www.youtube.com/watch?v=V5GS5Jc4rYg",
    duration: "10 min",
    category: "Morning"
  },
  {
    title: "10 Minute Morning Meditation - You'll Have the Most Incredible Day",
    description: "A meditation to set a positive tone for the day ahead.",
    url: "https://www.youtube.com/watch?v=Z2PjG_GQpPc",
    duration: "10 min",
    category: "Morning"
  },
  {
    title: "5 MINUTE Guided Meditation for Anxiety",
    description: "A brief session focused on alleviating anxiety.",
    url: "https://www.youtube.com/watch?v=MIr3RsUWrdo",
    duration: "5 min",
    category: "Anxiety Relief"
  },
  {
    title: "Healing Energy Sleep Meditation",
    description: "A meditation designed to promote healing and restful sleep.",
    url: "https://www.youtube.com/watch?v=Zz2wIh0M6Gc",
    duration: "30 min",
    category: "Sleep"
  },
  {
    title: "True Transformation through Letting Go",
    description: "A session focused on releasing negative emotions.",
    url: "https://www.youtube.com/watch?v=K4gkA3DO0AY",
    duration: "20 min",
    category: "Emotional Healing"
  },
  {
    title: "How Long Can You Focus?",
    description: "A practice to enhance concentration and focus.",
    url: "https://www.youtube.com/watch?v=8v45WSuAeYI",
    duration: "15 min",
    category: "Focus"
  },
  {
    title: "Daily Calm | 10 Minute Mindfulness Meditation",
    description: "A daily meditation to cultivate mindfulness.",
    url: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    duration: "10 min",
    category: "Mindfulness"
  },
  {
    title: "5-Minute Meditation You Can Do Anywhere",
    description: "A quick session suitable for any time and place.",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
    duration: "5 min",
    category: "Quick Practice"
  },
  {
    title: "Guided Meditation for Detachment From Over-Thinking",
    description: "A practice to help quiet the mind and reduce overthinking.",
    url: "https://www.youtube.com/watch?v=1vx8iUvfyCY",
    duration: "20 min",
    category: "Mental Clarity"
  },
  {
    title: "10-Minute Meditation For Anxiety",
    description: "A session aimed at calming anxious thoughts.",
    url: "https://www.youtube.com/watch?v=O-6f5wQXSu8",
    duration: "10 min",
    category: "Anxiety Relief"
  },
  {
    title: "Guided Meditation for Sleep... Floating Amongst the Stars",
    description: "A meditation designed to help you drift into sleep with a sense of calm and wonder.",
    url: "https://www.youtube.com/watch?v=qzQIL3npB8A",
    category: "Sleep",
    duration: "45 min"
  },
  {
    title: "20 Minute Guided Meditation for Reducing Stress and Anxiety",
    description: "A relaxing meditation session to help reduce stress and restore balance.",
    url: "https://www.youtube.com/watch?v=3nwwKbM_vJc",
    category: "Stress Relief",
    duration: "20 min"
  },
  {
    title: "30-Minute Guided Meditation to Reconnect with Yourself",
    description: "A session for fostering inner connection and peace.",
    url: "https://www.youtube.com/watch?v=xh3BfGQNWhU",
    category: "Self-Discovery",
    duration: "30 min"
  },
  {
    title: "Self-Love Meditation - Feel the Love Within",
    description: "A guided meditation to enhance self-compassion and love.",
    url: "https://www.youtube.com/watch?v=itZMM5gCboo",
    category: "Self-Love",
    duration: "25 min"
  },
  {
    title: "Healing Light Guided Meditation - Energy Healing Meditation",
    description: "A visualization meditation focused on healing energy.",
    url: "https://www.youtube.com/watch?v=W19PdslW7iw",
    category: "Healing",
    duration: "20 min"
  },
  {
    title: "Grounding Meditation - Stay Present and Balanced",
    description: "A session designed to help you feel grounded and focused.",
    url: "https://www.youtube.com/watch?v=8lu0CHeZrm8",
    category: "Grounding",
    duration: "15 min"
  },
  {
    title: "Deep Breathing Meditation for Beginners",
    description: "A perfect start for beginners looking to incorporate deep breathing into their practice.",
    url: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk",
    category: "Beginners",
    duration: "10 min"
  }
]

const categories = Array.from(new Set(videos.map(video => video.category)))

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl === selectedVideo ? null : videoUrl)
  }

  const filteredVideos = selectedCategory === null 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  return (
    <div id="videos" className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight sm:text-5xl mb-4">
            Guided Meditations
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Choose from our collection of guided meditation sessions to begin your journey to inner peace.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {filteredVideos.map((video) => (
            <div
              key={video.url}
              className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {selectedVideo === video.url ? (
                <div className="aspect-[16/9] w-full">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              ) : (
                <button
                  onClick={() => handleVideoClick(video.url)}
                  className="group aspect-[16/9] block w-full relative overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/maxresdefault.jpg`}
                    alt={video.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                    <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        {video.category}
                      </span>
                      <span className="rounded-full bg-gray-100/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                        {video.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {video.description}
                    </p>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
