
import { cn } from "../lib/utils"
import {
  Activity,
  Rocket,
  FileText,
  TerminalSquare,
  Users,
  Unlock,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Flexible Application Deployment",
      description:
        "Deploy any application using Nixpacks, Heroku Buildpacks, or your custom Dockerfile, tailored to your stack.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Advanced User Management",
      description:
        "Control user access with detailed roles and permissions, keeping your deployments secure and organized.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Open Source Templates",
      description:
        "Get started quickly with pre-configured templates for popular tools like Supabase, Cal.com, and Pocketbase.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "No Vendor Lock-In",
      description:
        "Experience complete freedom to modify, scale, and customize GooseD to suit your specific needs.",
      icon: <Unlock className="w-6 h-6" />,
    },
    {
      title: "Real-time Monitoring & Alerts",
      description:
        "Monitor CPU, memory, and network usage in real-time across your deployments for full visibility.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Built for developers",
      description:
        "Designed specifically for engineers and developers seeking control and flexibility.",
      icon: <TerminalSquare className="w-6 h-6" />,
    },
  ]

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="flex flex-col justify-center items-center mt-20 px-4">
        <h2 className="font-display text-3xl tracking-tight text-primary sm:text-4xl text-center">
          Powerful Deployment, Tailored for You
        </h2>
        <p className="mt-4 text-lg tracking-tight text-muted-foreground text-center">
          Unlock seamless multi-server deployments, advanced user control, and
          flexible database management—all with GooseD's developer-focused
          features.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-6xl mx-auto mt-10 max-sm:p-0 max-sm:mx-0 max-sm:w-full">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 3) &&
          "lg:border-l dark:border-neutral-800",
        (index < 3) && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-yellow-600/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-yellow-600/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-yellow-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 lg:max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
