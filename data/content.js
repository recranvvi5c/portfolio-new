// Edit this file to change the site's content.

export const profile = {
  name: "Alex Morgan",
  initials: "AM",
  role: "Full-stack developer",
  location: "Your City, Country",
  email: "hello@example.com",
  available: true,
  portrait: "https://picsum.photos/seed/portrait-am/480/480",
  aboutImage: "https://picsum.photos/seed/workspace-am/640/720",
  cvUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/recranvvi5c" },
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export const stats = [
  { value: 6, label: "Years experience" },
  { value: 40, label: "Projects shipped" },
  { value: 25, label: "Happy clients" },
];

export const skills = [
  {
    icon: "⌘",
    title: "Frontend",
    text: "Responsive, accessible interfaces with modern frameworks and smooth interactions.",
    tags: ["HTML/CSS", "TypeScript", "React", "Next.js"],
  },
  {
    icon: "⚙",
    title: "Backend",
    text: "Secure APIs, authentication, background jobs and well-structured data models.",
    tags: ["Node.js", "Python", "PostgreSQL", "REST"],
  },
  {
    icon: "✦",
    title: "UI / UX",
    text: "Wireframes, prototypes and design systems that keep products consistent.",
    tags: ["Figma", "Prototyping", "Design systems"],
  },
  {
    icon: "☁",
    title: "DevOps",
    text: "CI/CD pipelines, containers and cloud deployments that just work.",
    tags: ["Docker", "GitHub Actions", "AWS"],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web apps" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
];

export const projects = [
  {
    title: "Taskflow Dashboard",
    category: "web",
    image: "https://picsum.photos/seed/proj-1/800/520",
    text: "A team productivity dashboard with real-time updates and analytics.",
    tags: ["React", "Node", "WebSockets"],
    links: [{ label: "Live demo →", href: "#" }, { label: "Code", href: "#" }],
  },
  {
    title: "FitTrack App",
    category: "mobile",
    image: "https://picsum.photos/seed/proj-2/800/520",
    text: "Cross-platform fitness tracker with workout plans and progress charts.",
    tags: ["React Native", "Firebase"],
    links: [{ label: "Live demo →", href: "#" }, { label: "Code", href: "#" }],
  },
  {
    title: "Bloom Design System",
    category: "design",
    image: "https://picsum.photos/seed/proj-3/800/520",
    text: "A component library and style guide used across four products.",
    tags: ["Figma", "Storybook"],
    links: [{ label: "Case study →", href: "#" }],
  },
  {
    title: "ShopLite Storefront",
    category: "web",
    image: "https://picsum.photos/seed/proj-4/800/520",
    text: "A fast e-commerce storefront with cart, checkout and admin panel.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    links: [{ label: "Live demo →", href: "#" }, { label: "Code", href: "#" }],
  },
  {
    title: "Wanderly Travel",
    category: "mobile",
    image: "https://picsum.photos/seed/proj-5/800/520",
    text: "Trip planner with offline maps, itineraries and shared lists.",
    tags: ["Flutter", "Maps API"],
    links: [{ label: "Live demo →", href: "#" }],
  },
  {
    title: "Finly Brand Refresh",
    category: "design",
    image: "https://picsum.photos/seed/proj-6/800/520",
    text: "New visual identity and marketing site for a fintech startup.",
    tags: ["Branding", "Webflow"],
    links: [{ label: "Case study →", href: "#" }],
  },
];

export const experience = [
  {
    date: "2023 — Present",
    title: "Senior Developer · Company One",
    text: "Leading frontend architecture and mentoring a team of five engineers.",
  },
  {
    date: "2020 — 2023",
    title: "Full-stack Developer · Company Two",
    text: "Built customer-facing web apps and internal tools used by 10k+ users.",
  },
  {
    date: "2018 — 2020",
    title: "Junior Developer · Company Three",
    text: "Shipped features, wrote tests and learned the craft from great people.",
  },
];

export const testimonials = [
  {
    quote: "Alex delivered ahead of schedule and the code quality was excellent. Communication was clear the whole way.",
    name: "Jordan Lee",
    role: "Product Manager",
    avatar: "https://picsum.photos/seed/client-1/96/96",
  },
  {
    quote: "Our new dashboard is faster and much easier to use. Our team adopted it in days.",
    name: "Sam Rivera",
    role: "Startup Founder",
    avatar: "https://picsum.photos/seed/client-2/96/96",
  },
  {
    quote: "A rare developer who cares about design details as much as the backend.",
    name: "Taylor Kim",
    role: "Design Lead",
    avatar: "https://picsum.photos/seed/client-3/96/96",
  },
];
