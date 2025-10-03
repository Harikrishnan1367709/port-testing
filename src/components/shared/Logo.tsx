import { cn } from "../../lib/utils"
import React from "react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <img
        src="/logo_dark.png"
        alt="GooseD Logo"
        className="h-10 w-10 object-contain"
      />
      <span className="font-bold text-xl text-foreground">GooseD</span>
    </div>
  )
}
