'use client'

const testimonials = [
  {
    body: "Meditation has completely transformed my life. I've noticed significant improvements in my stress levels and overall well-being.",
    author: {
      name: 'Sarah Johnson',
      handle: 'Meditation Practitioner',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "The guided meditation sessions have helped me develop a consistent practice. I'm sleeping better and feeling more focused throughout the day.",
    author: {
      name: 'Michael Chen',
      handle: 'Tech Professional',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "As a beginner, I found the community incredibly welcoming. The variety of meditation techniques taught here has helped me find what works best for me.",
    author: {
      name: 'Emma Thompson',
      handle: 'Yoga Instructor',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function Community() {
  return (
    <div className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight sm:text-5xl mb-4">
            Our Community
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Join a supportive community of meditation practitioners. 
            Here's what our members have to say about their journey with us.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-card p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/5 transition-all duration-300 hover:shadow-xl">
                  <blockquote className="text-card-foreground">
                    <p className="text-base font-medium leading-7">{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50 object-cover ring-2 ring-primary/20"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-serif text-base">{testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
