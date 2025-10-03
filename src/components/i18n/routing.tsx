import { type ComponentProps, forwardRef } from "react"
import { Link as CustomLink } from "../shared/Link"

// Simple Link component that wraps our custom Link
export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof CustomLink>>(({ href, children, ...props }, ref) => {
  return <CustomLink ref={ref} href={href} {...props}>{children}</CustomLink>
})

Link.displayName = "Link"

// Simple router hook for React (no Next.js routing)
export function useRouter() {
  return {
    push: (href: string) => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    },
    replace: (href: string) => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.replace(href)
      }
    },
    back: () => {
      window.history.back()
    },
    forward: () => {
      window.history.forward()
    },
  }
}
