// Each entry becomes a page at /case-studies/<slug>/

export const caseStudies = [
  {
    slug: "taskflow-dashboard",
    title: "Taskflow Dashboard",
    summary: "A real-time productivity dashboard that cut weekly status meetings in half.",
    client: "Sample SaaS Co.",
    year: "2025",
    role: "Lead full-stack developer",
    duration: "4 months",
    image: "https://picsum.photos/seed/proj-1/1200/700",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    results: [
      { value: "50%", label: "Fewer status meetings" },
      { value: "1.2s", label: "Avg. page load" },
      { value: "3k+", label: "Daily active users" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "The team tracked work across spreadsheets and chat threads. Managers had no live view of progress, so they relied on long weekly status meetings.",
      },
      {
        heading: "The approach",
        body: "I ran short discovery interviews, then prototyped a dashboard with live task boards, workload charts and automated weekly summaries. WebSockets keep every view in sync without refreshing.",
      },
      {
        heading: "The result",
        body: "Within two months of launch the team replaced most status meetings with the dashboard's summary view, and onboarding new members became noticeably faster.",
      },
    ],
  },
  {
    slug: "shoplite-storefront",
    title: "ShopLite Storefront",
    summary: "A fast, accessible e-commerce storefront that lifted mobile conversions.",
    client: "Sample Retail Brand",
    year: "2024",
    role: "Frontend developer",
    duration: "3 months",
    image: "https://picsum.photos/seed/proj-4/1200/700",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    results: [
      { value: "+32%", label: "Mobile conversion" },
      { value: "98", label: "Lighthouse score" },
      { value: "-60%", label: "Bundle size" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "The old storefront was slow on mobile and hard to navigate with a keyboard or screen reader, and most visitors left before checkout.",
      },
      {
        heading: "The approach",
        body: "I rebuilt the store with static product pages, optimized images and a streamlined two-step checkout, and tested every flow for accessibility.",
      },
      {
        heading: "The result",
        body: "Pages now load almost instantly on mobile, the checkout is fully keyboard accessible, and mobile conversions rose in the first quarter after launch.",
      },
    ],
  },
  {
    slug: "bloom-design-system",
    title: "Bloom Design System",
    summary: "A shared component library that unified four products under one visual language.",
    client: "Sample Product Studio",
    year: "2024",
    role: "Design engineer",
    duration: "5 months",
    image: "https://picsum.photos/seed/proj-3/1200/700",
    tags: ["Figma", "React", "Storybook"],
    results: [
      { value: "4", label: "Products unified" },
      { value: "60+", label: "Components" },
      { value: "2×", label: "Faster UI delivery" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: "Each product team had built its own buttons, forms and colors, which led to inconsistent experiences and duplicated work.",
      },
      {
        heading: "The approach",
        body: "Together with the designers I defined design tokens, built a React component library documented in Storybook, and set up versioned releases.",
      },
      {
        heading: "The result",
        body: "All four products now share one library. New screens are assembled from tested components, roughly doubling UI delivery speed.",
      },
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
