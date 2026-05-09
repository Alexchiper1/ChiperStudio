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
    name: "Portfolio Website",
    priceRange: "EUR300 - EUR500",
    description:
      "Best for individuals, freelancers, students, tradespeople, or small personal brands that need a simple professional online presence.",
    features: [
      "1-2 pages",
      "Mobile responsive design",
      "Portfolio / work showcase",
      "Contact section",
      "One-time build and deployment",
    ],
  },
  {
    name: "Business Website",
    priceRange: "EUR700 - EUR1200",
    description:
      "Best for businesses that need a proper website to explain their services, build trust, and generate customer enquiries.",
    features: [
      "4-8 pages",
      "Service pages",
      "Contact form",
      "Basic SEO setup",
      "Performance optimisation",
      "One-time build and deployment",
    ],
  },
  {
  name: "Website + Ongoing Updates",
  priceRange: "Website price + €80 - €150 / month",
  description:
    "For businesses that want a website built first, then ongoing monthly help to keep it updated after launch.",
  features: [
    "Website build priced separately",
    "Monthly website updates",
    "Small content changes",
    "New images or text added",
    "Fixes and improvements",
    "Ongoing support after launch",
  ],
},
{
  name: "Online Business Management",
  priceRange: "Website price + €200 - €500+ / month",
  description:
    "For businesses that want a website plus ongoing help managing their online presence across Google, social media, and their website.",
  features: [
    "Website build priced separately",
    "Google Business Profile setup",
    "Social media page setup",
    "Online profile improvements",
    "Website updates",
    "Posts and business content support",
    "Monthly online management",
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
