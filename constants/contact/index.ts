import { siteConfig } from "@/config/site"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const links = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
  },
]
