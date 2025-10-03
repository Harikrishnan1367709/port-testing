import React from "react"

interface LinkProps {
  href: string
  children: React.ReactNode
  target?: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
  [key: string]: any
}

export const Link = ({ href, children, target, className, onClick, ...props }: LinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (onClick) onClick?.(e)
  }

  return (
    <a
      href={href}
      target={target}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
