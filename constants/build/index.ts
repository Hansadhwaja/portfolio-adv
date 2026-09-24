import { Capability } from "@/lib/types"
import { BarChart3, Boxes, LayoutDashboard, Workflow } from "lucide-react"

export const capabilities: Capability[] = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Business Applications",
    description:
      "Internal tools and management platforms that help businesses organize operations, customers, transactions and data.",
    examples: ["Dashboards", "CRM", "Inventory", "Business management"],
  },
  {
    number: "02",
    icon: Workflow,
    title: "Full Stack Web Apps",
    description:
      "Complete web applications connecting polished interfaces with APIs, authentication, databases and application logic.",
    examples: ["SaaS", "REST APIs", "Authentication", "Database systems"],
  },
  {
    number: "03",
    icon: Boxes,
    title: "Product Interfaces",
    description:
      "Responsive interfaces designed around clarity, reusable components and the actual workflows of the people using them.",
    examples: [
      "Admin panels",
      "User portals",
      "Responsive UI",
      "Design systems",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data & Operations",
    description:
      "Systems that turn operational data into useful information through structured workflows, reporting and analytics.",
    examples: ["Analytics", "Reports", "Tracking", "Operational workflows"],
  },
]
