import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

export function PricingSection() {

  const pricingTiers = [
    {
      name: "Starter",
      description: "For startups and small teams",
      price: "$100",
      unit: "/month",
      subtext: "+ compute cost",
      features: [
        "3 App Services",
        "Manage upto 12 CPUs scale",
        "7 days log retention",
        "Unlimited users",
        "Standard support",
      ],
      popular: false,
    },
    {
      name: "Standard",
      description: "For mid size companies with higher traffic",
      price: "$500",
      unit: "/month",
      subtext: "+ compute cost",
      features: [
        "10 App Services",
        "Manage upto 100 CPUs scale",
        "30 days log retention",
        "Unlimited users",
        "Dedicated support",
      ],
      popular: true,
    },
    {
      name: "Plus",
      description: "For large teams working with numerous services and scale.",
      price: "$1000",
      unit: "/month",
      subtext: "+ compute cost",
      features: [
        "25 App Services",
        "Manage upto 250 CPUs scale",
        "Longer log retention",
        "24*7 support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-6xl font-bold mb-6">
            It costs less than hiring 1 Devops engineer!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-300 ${
                  tier.popular
                    ? "border-primary bg-card/50 backdrop-blur-sm"
                    : "border-border bg-card/30 backdrop-blur-sm hover:border-primary/50"
                }`}
              >
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.unit}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{tier.subtext}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className={`text-muted-foreground ${
                          feature === "Longer log retention" ? "text-primary" : ""
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    className="w-full py-6 rounded-xl font-semibold transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book a demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
