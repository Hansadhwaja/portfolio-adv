import { siteConfig } from "@/config/site"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const links = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
]
