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
      live: "https://storepilotdev.vercel.app",
      github: "",
    },
    variant: "wide",
    reverse: false,
    images: [
      {
        src: "/images/projects/storepilot/Dashboard-1.png",
        alt: "StorePilot business dashboard",
        caption: "Business dashboard",
      },
      {
        src: "/images/projects/storepilot/Dashboard-2.png",
        alt: "StorePilot business dashboard charts",
        caption: "Business analytics",
      },
      {
        src: "/images/projects/storepilot/Customers.png",
        alt: "StorePilot customer management interface",
        caption: "Customer management",
      },
      {
        src: "/images/projects/storepilot/Orders-1.png",
        alt: "StorePilot orders management interface",
        caption: "Orders & payments",
      },
      {
        src: "/images/projects/storepilot/Orders-2.png",
        alt: "StorePilot order details interface",
        caption: "Order details",
      },
      {
        src: "/images/projects/storepilot/Inventory.png",
        alt: "StorePilot inventory management interface",
        caption: "Inventory management",
      },
    ],
    context: {
      type: "independent",
      organization: "Independent Project",
    },
  },

  {
    number: "02",
    label: "Local Business Website",
    name: "Shri Krishna Paints",
    description:
      "A modern website for a local paint and hardware business focused on product discovery, brand presentation and making it easier for customers to connect with the store.",
    problem:
      "The business had no dedicated website to present its products, brands, services and location to potential customers searching online.",
    contribution:
      "Designed and developed a responsive website with product presentation, brand sections, business information, local discovery features and direct customer contact actions.",
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
        src: "/images/projects/shri-krishna-paints/Hero.png",
        alt: "Shri Krishna Paints website homepage",
        caption: "Homepage",
      },
      {
        src: "/images/projects/shri-krishna-paints/Products-1.png",
        alt: "Shri Krishna Paints product showcase",
        caption: "Product showcase",
      },
      {
        src: "/images/projects/shri-krishna-paints/Products-2.png",
        alt: "Shri Krishna Paints product showcase",
        caption: "Product categories",
      },
      {
        src: "/images/projects/shri-krishna-paints/About.png",
        alt: "Shri Krishna Paints about section",
        caption: "About Us",
      },
      {
        src: "/images/projects/shri-krishna-paints/Review.png",
        alt: "Shri Krishna Paints review section",
        caption: "Reviews",
      },
      {
        src: "/images/projects/shri-krishna-paints/OurStore.png",
        alt: "Shri Krishna Paints store location section",
        caption: "Our Store",
      },
    ],
    context: {
      type: "independent",
      organization: "Independent Project",
    },
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
    reverse: false,
    images: [
      {
        src: "/images/projects/vigilo/Login.png",
        alt: "Vigilo login interface",
        caption: "Login Screen",
      },
      {
        src: "/images/projects/vigilo/Dashboard.png",
        alt: "Vigilo security management dashboard",
        caption: "Admin dashboard",
      },
      {
        src: "/images/projects/vigilo/Scheduling.png",
        alt: "Vigilo scheduling interface",
        caption: "Scheduling",
      },
      {
        src: "/images/projects/vigilo/Ordre.png",
        alt: "Vigilo shift assignment interface",
        caption: "Assignments",
      },
      {
        src: "/images/projects/vigilo/Messages.png",
        alt: "Vigilo messages interface",
        caption: "Messages",
      },
      {
        src: "/images/projects/vigilo/Invoicing.png",
        alt: "Vigilo invoicing interface",
        caption: "Invoicing",
      },
    ],
    context: {
      type: "professional",
      organization: "Quantum IT Innovation",
      role: "Full Stack Developer Intern",
    },
  },

  {
    number: "04",
    label: "Seafood E-Commerce Platform",
    name: "Fisho",
    description:
      "An online seafood marketplace for discovering and ordering fresh fish and marine products, with shopping, delivery and customer account workflows.",
    problem:
      "A seafood marketplace needs a clear shopping experience that makes it easy to discover products, browse categories, manage a cart and complete customer workflows.",
    contribution:
      "Worked on responsive React interfaces, reusable e-commerce components, API integration and customer-facing workflows including product discovery, cart, orders, profile and delivery-related experiences.",
    features: [
      "Seafood product discovery",
      "Category-based browsing",
      "Cart & order workflows",
      "Delivery & location flows",
      "Responsive e-commerce UI",
    ],
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "shadcn/ui",
      "Socket.IO",
      "E-Commerce",
      "API Integration",
    ],
    links: {
      live: "https://www.fisho.ae/",
      github: "",
    },
    reverse: true,
    images: [
      {
        src: "/images/projects/fisho/Homepage.png",
        alt: "Fisho seafood marketplace homepage",
        caption: "Homepage",
      },
      {
        src: "/images/projects/fisho/Curated.png",
        alt: "Fisho curated seafood product browsing interface",
        caption: "Product Discovery",
      },
      {
        src: "/images/projects/fisho/Fish.png",
        alt: "Fisho seafood product details interface",
        caption: "Product Details",
      },
      {
        src: "/images/projects/fisho/Cart.png",
        alt: "Fisho shopping cart interface",
        caption: "Shopping Cart",
      },
      {
        src: "/images/projects/fisho/Marine.png",
        alt: "Fisho marine products section",
        caption: "Marine Section",
      },
    ],
    context: {
      type: "professional",
      organization: "Quantum IT Innovation",
      role: "Full Stack Developer Intern",
    },
  },

  {
    number: "05",
    label: "Professional Services Platform",
    name: "MeinHaus",

    description:
      "A multi-sided professional services platform that connects customers, service professionals and administrators through project discovery, estimates, bids, communication and service management workflows.",

    problem:
      "Managing service requests across customers, professionals and internal operations requires different workflows for each side of the platform, from creating projects and reviewing estimates to responding to opportunities and managing professional information.",

    contribution:
      "Contributed across the Admin, Customer and Professional panels, building responsive React interfaces and integrating APIs for estimates, bids, price feedback, messaging, documents, reviews, work history, subscriptions and professional account management.",

    features: [
      "Admin, customer & professional panels",
      "Project, estimate & bid workflows",
      "Price feedback & messaging",
      "Professional profiles & documents",
      "Reviews, work history & subscriptions",
    ],

    tags: [
      "React",
      "TypeScript",
      "RTK Query",
      "Tailwind CSS",
      "API Integration",
    ],

    links: {
      live: "",
      github: "",
    },

    reverse: false,

    images: [
      {
        src: "/images/projects/meinhaus/admin-dashboard.png",
        alt: "MeinHaus admin dashboard",
        caption: "Admin Dashboard",
      },
      {
        src: "/images/projects/meinhaus/admin-estimate.png",
        alt: "MeinHaus admin estimates and bids interface",
        caption: "Estimates & Bids",
      },
      {
        src: "/images/projects/meinhaus/admin-message.png",
        alt: "MeinHaus admin price feedback interface",
        caption: "Price Feedback",
      },
      {
        src: "/images/projects/meinhaus/admin-service.png",
        alt: "MeinHaus admin service management interface",
        caption: "Service Management",
      },
      {
        src: "/images/projects/meinhaus/customer-homepage.png",
        alt: "MeinHaus customer homepage",
        caption: "Customer Home",
      },
      {
        src: "/images/projects/meinhaus/customer-estimate.png",
        alt: "MeinHaus customer estimate interface",
        caption: "Customer Estimates",
      },
      {
        src: "/images/projects/meinhaus/customer-project.png",
        alt: "MeinHaus customer project interface",
        caption: "Customer Projects",
      },
      {
        src: "/images/projects/meinhaus/pro-dashboard.png",
        alt: "MeinHaus professional dashboard",
        caption: "Professional Dashboard",
      },
      {
        src: "/images/projects/meinhaus/pro-document.png",
        alt: "MeinHaus professional documents interface",
        caption: "Professional Documents",
      },
      {
        src: "/images/projects/meinhaus/pro-review.png",
        alt: "MeinHaus professional reviews interface",
        caption: "Professional Reviews",
      },
      {
        src: "/images/projects/meinhaus/pro-workphoto.png",
        alt: "MeinHaus professional work photos interface",
        caption: "Work Photos",
      },
    ],

    context: {
      type: "professional",
      organization: "Quantum IT Innovation",
      role: "Full Stack Developer Intern",
    },
  },

  {
    number: "06",
    label: "Content & Community Platform",
    name: "DareToDream",
    description:
      "A responsive content-driven platform designed to present educational and community-focused content through updates, webinars, profiles and user-facing information flows.",
    problem:
      "The platform needed a clearer and more responsive experience for presenting content, managing user accounts and connecting different sections such as webinars and latest updates.",
    contribution:
      "Worked on the website redesign and implementation, building responsive React interfaces, authentication flows, content sections, webinar and updates pages, registration workflows and CMS-backed functionality.",
    features: [
      "Responsive website redesign",
      "Webinar & event sections",
      "Latest updates",
      "Authentication & profile flows",
      "CMS & registration APIs",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    links: {
      live: "",
      github: "",
    },
    reverse: true,
    images: [
      {
        src: "/images/projects/daretodream/homepage.png",
        alt: "DareToDream homepage",
        caption: "Homepage",
      },
      {
        src: "/images/projects/daretodream/homepage-2.png",
        alt: "DareToDream impact",
        caption: "Impact Section",
      },
      {
        src: "/images/projects/daretodream/webinar.png",
        alt: "DareToDream webinar section",
        caption: "Webinars",
      },
      {
        src: "/images/projects/daretodream/updates.png",
        alt: "DareToDream latest updates section",
        caption: "Latest Updates",
      },
      {
        src: "/images/projects/daretodream/register.png",
        alt: "DareToDream registration interface",
        caption: "Registration",
      },
      {
        src: "/images/projects/daretodream/login.png",
        alt: "DareToDream login interface",
        caption: "Login",
      },
    ],
    context: {
      type: "professional",
      organization: "Quantum IT Innovation",
      role: "Full Stack Developer Intern",
    },
  },
]
