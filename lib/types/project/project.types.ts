export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  number: string
  label: string
  name: string
  description: string
  problem: string
  contribution: string
  features: string[]
  tags: string[]
  links: {
    live?: string
    github?: string
  }
  variant?: "default" | "wide"
  reverse?: boolean
  images: ProjectImage[]
  context?: {
    type: "professional" | "independent"
    organization?: string
    role?: string
  }
}
