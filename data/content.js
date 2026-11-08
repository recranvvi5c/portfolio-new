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
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export const values = [
  { icon: "◎", title: "Clarity first", text: "Simple solutions that are easy to understand, maintain and extend." },
  { icon: "⚡", title: "Performance matters", text: "Fast pages and snappy interfaces are part of a good experience." },
  { icon: "♿", title: "Built for everyone", text: "Accessibility is designed in from day one, not bolted on later." },
  { icon: "🤝", title: "Honest collaboration", text: "Clear communication, realistic estimates and no surprises." },
];

export const process = [
  { step: "01", title: "Discover", text: "We talk through goals, users and constraints to define what success looks like." },
  { step: "02", title: "Design", text: "Wireframes and prototypes to validate ideas before writing production code." },
  { step: "03", title: "Build", text: "Iterative development with frequent demos so you always see progress." },
  { step: "04", title: "Launch & support", text: "Deployment, monitoring and improvements after go-live." },
];

export const openings = [
  {
    title: "Freelance UI Designer",
    type: "Contract · Remote",
    text: "Partner with me on client projects — wireframes, visual design and design systems.",
    skills: ["Figma", "Design systems", "Prototyping"],
  },
  {
    title: "Frontend Collaborator",
    type: "Project-based · Remote",
    text: "Help ship React / Next.js features on larger engagements when extra hands are needed.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Open-source Contributor",
    type: "Volunteer · Remote",
    text: "Contribute to my open-source UI kit and starter templates. Great for building a portfolio.",
    skills: ["JavaScript", "CSS", "Git"],
  },
];

export const perks = [
  { icon: "🌍", title: "Fully remote", text: "Work from anywhere with flexible hours." },
  { icon: "📚", title: "Learn together", text: "Pairing sessions, code reviews and shared resources." },
  { icon: "💬", title: "Fair & transparent", text: "Clear scope, agreed rates and on-time payments." },
];

export const faqs = [
  { q: "What kinds of projects do you take on?", a: "Web apps, dashboards, marketing sites and API work — typically from 2 weeks to 6 months." },
  { q: "How soon can you start?", a: "Usually within 1–3 weeks. Reach out with your timeline and I'll let you know." },
  { q: "Do you work with teams or solo founders?", a: "Both. I can join an existing team or own a project end-to-end." },
  { q: "What's your typical response time?", a: "I reply to every message within one business day." },
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
