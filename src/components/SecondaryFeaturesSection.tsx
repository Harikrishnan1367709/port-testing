import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

const features = [
  {
    title: "Applications",
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Compose",
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Multi-Server",
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Logs",
    image: "https://picsum.photos/800/600?random=4",
  },
  {
    title: "Monitoring",
    image: "https://picsum.photos/800/600?random=5",
  },
  {
    title: "Backups",
    image: "https://picsum.photos/800/600?random=6",
  },
  {
    title: "Traefik",
    image: "https://picsum.photos/800/600?random=7",
  },
  {
    title: "Templates",
    image: "https://picsum.photos/800/600?random=8",
  },
]

export function SecondaryFeaturesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id="secondary-features"
      aria-label="Advanced Features"
      className="relative overflow-hidden bg-black pb-28 pt-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl max-lg:px-4 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Advanced Features
          </h2>
          <p className="mt-6 text-lg tracking-tight text-muted-foreground">
            Powerful tools and features to help you deploy, manage, and scale your applications with confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20">
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 overflow-visible sm:pb-0">
            <div
              aria-description="primary feature tabs"
              aria-roledescription="primary feature tabs"
              className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0"
            >
              {features.map((feature, featureIndex) => (
                <motion.div
                  layout
                  initial={false}
                  key={`feature-${featureIndex}`}
                  className={cn(
                    "group relative rounded-full px-4 py-1 transition-colors cursor-pointer",
                    selectedIndex === featureIndex ? "text-primary" : "text-muted-foreground hover:text-white"
                  )}
                  onClick={() => setSelectedIndex(featureIndex)}
                >
                  <AnimatePresence>
                    {selectedIndex === featureIndex && (
                      <motion.span
                        layoutId="tab"
                        className="absolute inset-0 z-10 rounded-full bg-white/5 mix-blend-difference"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <h3>
                    <button
                      className={cn(
                        "font-display text-lg ui-not-focus-visible:outline-none focus:outline-none"
                      )}
                    >
                      <span className="absolute inset-0 rounded-full" />
                      {feature.title}
                    </button>
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="">
            {features.map((feature, index) => (
              <div key={`panel-${index}`} className={selectedIndex === index ? "block" : "hidden"}>
                <motion.div
                  key={feature.title}
                  initial={isMounted ? { opacity: 0.4 } : {}}
                  animate={isMounted ? { opacity: 1 } : {}}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.8,
                  }}
                  className="mt-10 h-[32rem] w-full overflow-hidden rounded-xl border shadow-xl sm:w-auto lg:mt-0 lg:h-[48rem]"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
