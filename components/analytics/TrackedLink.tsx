"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"

import { trackEvent } from "@/lib/analytics"

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: Parameters<typeof trackEvent>[0]
  eventParameters?: Record<string, string | number | boolean>
  children: ReactNode
}

export default function TrackedLink({
  eventName,
  eventParameters,
  children,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParameters)
    onClick?.(event)
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}
