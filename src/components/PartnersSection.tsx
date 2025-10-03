import { motion } from "framer-motion"

export function PartnersSection() {
  const partners = [
    {
      name: "Startup India",
      logo: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/7b7dd89f-3f50-5876-b54d-3ce9b6d08288/c7cbe2b7-9fc9-573d-87ca-c762c5e69b35.jpg",
      description: "Government of India Initiative"
    },
    {
      name: "AWS Startup",
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      description: "Amazon Web Services for Startups"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 font-medium">OUR PARTNERS</p>
          <h2 className="font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl font-bold mb-6">
            Partners backing our{" "}
            <span className="bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent">
              development platforms
            </span>
          </h2>
          <p className="mt-4 text-lg tracking-tight text-muted-foreground max-w-3xl mx-auto">
            Our partners are integral to our success. Together, we drive innovation and mutual growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 min-w-[200px]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-12 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.currentTarget.style.display = 'none'
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                        if (nextElement) {
                          nextElement.style.display = 'block'
                        }
                      }}
                    />
                    <div className="hidden text-gray-900 font-semibold text-sm">
                      {partner.name}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
