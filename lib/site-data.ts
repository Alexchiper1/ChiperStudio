export const brandName = "Chiper Studio";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Website Design",
    description:
      "Clean, modern layouts that help customers trust your business quickly and take action without confusion.",
    icon: "palette",
  },
  {
    title: "Website Development",
    description:
      "Fast, mobile-friendly websites and tailored builds that look polished, perform well, and support real business goals.",
    icon: "code",
  },
  {
    title: "Ongoing Support",
    description:
      "Optional updates, maintenance, and improvements, with custom systems and advanced features available when your business needs more.",
    icon: "shield",
  },
] as const;

export const portfolioProjects = [
  {
    title: "Construction Company Website",
    businessType: "Business Website",
    description:
      "Built a modern website for a construction business to showcase services clearly, strengthen credibility, and help turn visitors into new client enquiries.",
    keyPoints: [
      "Clearly presents services",
      "Builds trust with professional design",
      "Mobile-friendly for customers on any device",
    ],
    href: "https://vitaliemaintenance.ie/",
    cta: "Visit Project",
  },
  {
    title: "Construction Site Management System",
    businessType: "Custom Business System",
    description:
      "Developed a custom system for managing construction site operations, helping teams handle daily workflows, staff activity, task tracking, and file uploads in one place.",
    keyPoints: [
      "Staff check-in / check-out",
      "Holiday request management",
      "Task tracking and uploads",
      "Centralised workflow support",
    ],
    href: "https://site-sync-s88j.vercel.app/",
    cta: "View System",
  },
  {
    title: "Community & Event Management Platform",
    businessType: "Platform Product",
    description:
      "Contributed to a platform focused on community operations, event logistics, bookings, and payments, with work that supported product quality, mobile experience, and operational flow.",
    keyPoints: [
      "Community and event operations",
      "Booking and payment flows",
      "QR-based access support",
      "Mobile testing and product design contribution",
    ],
    href: "https://www.nomadops.online/",
    cta: "Explore Platform",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter Website",
    priceRange: "EUR400 - EUR600",
    description:
      "A strong starting point for businesses that need a professional, modern online presence without overcomplicating the build.",
    features: [
      "1-3 pages",
      "Mobile responsive design",
      "Contact form",
      "Fast and modern layout",
    ],
  },
  {
    name: "Business Website",
    priceRange: "EUR700 - EUR1200",
    description:
      "For businesses that need a stronger online presence, clearer messaging, and a site built to support trust and lead generation.",
    features: [
      "4-8 pages",
      "Stronger business-focused design",
      "Basic SEO setup",
      "Performance optimisation",
    ],
  },
  {
    name: "Ongoing Support",
    priceRange: "EUR40 - EUR80 / month",
    description:
      "Ongoing help for businesses that want their site kept up to date without having to manage every small change themselves.",
    features: [
      "Updates",
      "Fixes",
      "Small content changes",
    ],
  },
  {
    name: "Growth / Improvements",
    priceRange: "EUR80 - EUR150 / month",
    description:
      "Best for businesses that want to improve results over time with new features, refinements, and steady website upgrades.",
    features: [
      "Feature additions",
      "UX improvements",
      "Performance tweaks",
    ],
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-chiper-5a2960261",
  },
  { label: "Email", href: "mailto:alexchiper20@gmail.com" },
] as const;
