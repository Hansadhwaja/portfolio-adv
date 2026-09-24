import { Project } from "@/lib/types/project/project.types"

export const projects: Project[] = [
  {
    number: "01",
    label: "Business Management Platform",
    name: "StorePilot",
    description:
      "A business management platform built to help a paint and hardware store manage customers, painters, orders, payments, inventory and outstanding dues in one place.",
    problem:
      "The business was relying on notebooks and manual calculations to track customer credit, dealer purchases and payments.",
    contribution:
      "Designed and developed the application end-to-end, including the data model, dashboards, transaction flows and responsive interface.",
    features: [
      "Customer & painter management",
      "Orders & partial payments",
      "Customer dues tracking",
      "Dealer purchase management",
      "Inventory & business analytics",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    links: {
      live: "https://store-pilot-dev.vercel.app",
      github: "",
    },
    variant: "wide",
    images: [
      {
        src: "/projects/storepilot/dashboard.png",
        alt: "StorePilot business dashboard",
        caption: "Business dashboard",
      },
      {
        src: "/projects/storepilot/customers.png",
        alt: "StorePilot customer management interface",
        caption: "Customer management",
      },
      {
        src: "/projects/storepilot/orders.png",
        alt: "StorePilot orders management interface",
        caption: "Orders & payments",
      },
      {
        src: "/projects/storepilot/inventory.png",
        alt: "StorePilot inventory management interface",
        caption: "Inventory management",
      },
      {
        src: "/projects/storepilot/dues.png",
        alt: "StorePilot customer dues interface",
        caption: "Outstanding dues",
      },
    ],
  },

  {
    number: "02",
    label: "Local Business Website",
    name: "Shri Krishna Paints",
    description:
      "A modern website for a local paint and hardware business focused on product discovery, customer enquiries and improving local online presence.",
    problem:
      "The business had no dedicated website to communicate its products, services and location to potential customers.",
    contribution:
      "Designed and developed a responsive website with product presentation, brand sections, business information and direct customer contact actions.",
    features: [
      "Responsive business website",
      "Product & brand showcase",
      "Google Business integration",
      "WhatsApp conversion flow",
      "Analytics & local SEO foundation",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "GA4"],
    links: {
      live: "https://shrikrishnapaints.vercel.app",
      github: "",
    },
    reverse: true,
    images: [
      {
        src: "/projects/shri-krishna-paints/home.png",
        alt: "Shri Krishna Paints website homepage",
        caption: "Homepage",
      },
      {
        src: "/projects/shri-krishna-paints/products.png",
        alt: "Shri Krishna Paints product showcase",
        caption: "Product showcase",
      },
      {
        src: "/projects/shri-krishna-paints/brands.png",
        alt: "Shri Krishna Paints brands section",
        caption: "Brands",
      },
      {
        src: "/projects/shri-krishna-paints/contact.png",
        alt: "Shri Krishna Paints contact and location section",
        caption: "Contact & location",
      },
    ],
  },

  {
    number: "03",
    label: "Security Management Platform",
    name: "Vigilo",
    description:
      "An administrative platform for managing security operations, guard compliance, scheduling and real-time workflows through a structured web interface.",
    problem:
      "Complex operational workflows require clear interfaces for scheduling, compliance management and monitoring guard activity.",
    contribution:
      "Worked on reusable React interfaces, API integration, scheduling workflows, compliance flows and real-time application features.",
    features: [
      "Admin dashboards",
      "Guard compliance workflows",
      "Shift & assignment management",
      "RTK Query API architecture",
      "Real-time Socket.IO integration",
    ],
    tags: ["React", "TypeScript", "RTK Query", "Socket.IO"],
    links: {
      live: "",
      github: "",
    },
    images: [
      {
        src: "/projects/vigilo/dashboard.png",
        alt: "Vigilo security management dashboard",
        caption: "Admin dashboard",
      },
      {
        src: "/projects/vigilo/scheduling.png",
        alt: "Vigilo scheduling interface",
        caption: "Scheduling",
      },
      {
        src: "/projects/vigilo/compliance.png",
        alt: "Vigilo guard compliance interface",
        caption: "Guard compliance",
      },
      {
        src: "/projects/vigilo/assignments.png",
        alt: "Vigilo shift assignment interface",
        caption: "Shift assignments",
      },
    ],
  },
]
