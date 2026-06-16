export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    category: "Frontend",
    accent: "#61DAFB",
    skills: [
      { name: "React.js", slug: "react", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "#CEFF00", darkSlug: true },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "JavaScript (ES6+)", slug: "javascript", color: "#F7DF1E" },
      { name: "HTML5", slug: "html5", color: "#E34F26" },
      { name: "CSS3", slug: "css", color: "#00CBAD" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    category: "UI & Design",
    accent: "#F24E1E",
    skills: [
      { name: "Figma", slug: "figma", color: "#F24E1E" },
      { name: "Adobe Photoshop", slug: "proton", color: "#009DF3" },
      { name: "Design Systems", slug: null, color: "#8B5CF6" },
      { name: "Prototyping", slug: null, color: "#EC4899" },
      { name: "User Research", slug: null, color: "#F59E0B" },
      { name: "Wireframing", slug: null, color: "#6366F1" },
    ],
  },
  {
    category: "Animation & Interaction",
    accent: "#CEFF00",
    skills: [
      { name: "Framer Motion", slug: "framer", color: "#0055FF" },
      { name: "GSAP", slug: "greensock", color: "#88CE02" },
      {
        name: "Three.js",
        slug: "threedotjs",
        color: "#C0C0C0",
        darkSlug: true,
      },
      { name: "React Three Fiber", slug: "react", color: "#61DAFB" },
      { name: "Lenis", slug: null, color: "#CEFF00" },
    ],
  },
  {
    category: "Backend & CMS",
    accent: "#A9614A",
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
      { name: "Laravel", slug: "laravel", color: "#FF2D20" },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
      { name: "GraphQL", slug: "graphql", color: "#E10098" },
      { name: "REST APIs", slug: null, color: "#10B981" },
      { name: "Sanity CMS", slug: "sanity", color: "#F03E2F" },
      { name: "WordPress", slug: "wordpress", color: "#21759B" },
    ],
  },
  {
    category: "Tools",
    accent: "#FFCC00",
    skills: [
      { name: "Git & GitHub", slug: "git", color: "#F05032" },
      { name: "Vercel", slug: "vercel", color: "#CEFF00", darkSlug: true },
      { name: "Docker", slug: "docker", color: "#2496ED" },
      { name: "Jira", slug: "jira", color: "#0052CC" },
      { name: "Postman", slug: "postman", color: "#FF6C37" },
    ],
  },
];

// Services
export const services = [
  {
    title: "UI/UX Design",
    description:
      "Great products start with great design. I create user interfaces that are intuitive, accessible, and visually compelling — grounded in user research and modern design systems. From wireframes to polished prototypes in Figma, every pixel has a purpose.",
    iconName: "Palette",
    gradient: "from-[#ceff00]/20 to-[#80ff00]/5",
  },
  {
    title: "Frontend Development",
    description:
      "Clean, scalable, performant — the three words that define every line of code I write. I specialise in building component-driven frontends with React and TypeScript, with an obsessive focus on performance, accessibility, and maintainability.",
    iconName: "Code2",
    gradient: "from-[#ceff00]/20 to-[#00ff88]/5",
  },
  {
    title: "Next.js Development",
    description:
      "Speed and SEO aren't a trade-off — not when you build with Next.js. I architect and develop full-stack Next.js applications with server-side rendering, static generation, and edge-ready deployments that score green on every Lighthouse metric.",
    iconName: "Layers",
    gradient: "from-[#ceff00]/20 to-[#00d4ff]/5",
  },
  {
    title: "Landing Pages",
    description:
      "Your landing page is your most valuable sales asset. I design and develop high-converting landing pages that load fast, look stunning, and are built to turn visitors into customers — backed by conversion principles and A/B-ready architecture.",
    iconName: "Layout",
    gradient: "from-[#ceff00]/20 to-[#ff6b6b]/5",
  },
  {
    title: "WordPress Development",
    description:
      "When your team needs a CMS your clients can actually use, I build bespoke WordPress solutions with custom themes, Gutenberg blocks, and headless setups powered by React — combining content flexibility with modern frontend quality.",
    iconName: "Globe",
    gradient: "from-[#ceff00]/20 to-[#a855f7]/5",
  },
  {
    title: "Figma to HTML/React",
    description:
      "Your designer's vision deserves a pixel-perfect build. I take Figma files and translate them into clean, responsive, production-grade HTML/CSS/React code — with zero design debt and full responsiveness across every breakpoint.",
    iconName: "Figma",
    gradient: "from-[#ceff00]/20 to-[#f59e0b]/5",
  },
];

// Projects
export const projects = [
  {
    title: "Grow+",
    category: "UI Design",
    description:
      "Modern fintech UI design system with dark/light themes, accessible components, and complete design tokens.",
    tech: ["Figma", "Design System", "Prototyping", "UI Kit"],
    tags: ["UI/UX", "Design System", "UI Kit"],
    role: "Lead Designer & Developer",
    year: "2025",
    gradient: "from-[#ceff00]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Grow2.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Apricus India",
    category: "Next.js",
    description:
      "Apricus Wealth is a wealth management and investment advisory established with the intent of helping you in efficiently allocating your savings in order to secure your financial future.",
    tech: ["React.js", "Gatsby", "Reactstrap"],
    tags: ["UI/UX", "React.js", "Gatsby", "Reactstrap"],
    role: "Lead Designer & Developer",
    year: "2025",
    gradient: "from-[#ceff00]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Apricus.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Intellastone",
    category: "Laravel",
    description:
      "IntellaStone equips remodelers and homeowners with digitally printed ABS shower walls, custom pans, and matching accessories that install faster and last longer than traditional tile.",
    tech: ["Laravel", "MYSQL", "Bootstarp"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Lead Designer & Developer",
    year: "2025",
    gradient: "from-[#ceff00]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/IntellaStone.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Hireintelligently",
    category: "Laravel",
    description:
      "From Pre-Hire to Retire: Hire Intelligently designed to revolutionize your workforce management process. One platform to integrate all your business solutions, from candidate sourcing to streamlined onboarding, training, and management.",
    tech: ["Laravel", "ATS", "MYSQL", "Bootstarp"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#00d4ff]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Hireintelligently.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Max Jewelers",
    category: "Angular",
    description:
      "Our family has been in the jewelry business since 1997 in central Florida.  We are proud to feature exclusive jewelry brands from the country’s top designers.",
    tech: ["Angular", "CMS", "Bootstrap", "Nodemon", "SCSS"],
    tags: ["Angular", "CMS", "Branding"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#a855f7]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Maxjewelers.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Tatyana Luxury Homes",
    category: "React.js",
    description:
      "A warm and engaging personality, Tatyana balances charm with proven business savvy to aggressively advocate on behalf of her clients.",
    tech: ["React.js", "Figma", "Design System", "UI Kit"],
    tags: ["UI/UX", "Figma", "Fintech"],
    role: "UI/UX Designer",
    year: "2024",
    gradient: "from-[#f59e0b]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/OneLuxe.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "S HAAS LAW",
    category: "Angular",
    description:
      "Scott Haas, Esq. established the litigation firm in 2006, and has been a commercial litigation attorney since 1998.",
    tech: ["Angular", "CMS", "Bootstrap", "Nodemon", "SCSS"],
    tags: ["Angular", "Blog", "SEO"],
    role: "Frontend Developer",
    year: "2023",
    gradient: "from-[#00ff88]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Shaas.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AgFolks",
    category: "Angular",
    description:
      "Simple. Build relationships with the best farm equipment Manufacturers to sell directly to the Farmer. Our goal is to keep Farmers from spending more money than necessary on equipment.",
    tech: ["Angular", "CMS", "Bootstrap", "Nodemon", "SCSS"],
    tags: ["Angular", "CMS"],
    role: "Lead Frontend Developer",
    year: "2023",
    gradient: "from-[#ff6b6b]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/AgFolks.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "My Sisters Keepher",
    category: "Laravel",
    description:
      "Our vision is to create a vibrant online community where women can find strength, support, and empowerment as they navigate life after divorce.",
    tech: ["Laravel", "CMS", "Bootstrap", "SCSS"],
    tags: ["Laravel", "CMS"],
    role: "Lead Frontend Developer",
    year: "2023",
    gradient: "from-[#ff6b6b]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Mysisterskeepher.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Habitat for Humanity",
    category: "Laravel",
    description:
      "Habitat for Humanity is a nonprofit organization that helps people in your community and around the world build or improve a place they can call home.",
    tech: ["Laravel", "PHP", "MYSQL", "Bootstarp"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#00d4ff]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/HabitatForHumanity.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Entradapiano",
    category: "WordPress",
    description:
      "Many people feel that advanced technical training isn’t possible for them. They want to enrich their skill set but don’t feel they can afford the time or the cost of private lessons.",
    tech: ["WordPress", "PHP", "Advanced Custom Fields", "SCSS"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#a855f7]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Entradapiano.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TeachitPro",
    category: "Angular",
    description:
      "Experienced in complete web solution development starting from Logo Design and UI/UX creation in Figma to fully functional website development.",
    tech: ["Angular", "CMS", "Bootstrap", "Nodemon", "SCSS"],
    tags: ["Angular", "CMS"],
    role: "Lead Frontend Developer",
    year: "2023",
    gradient: "from-[#ff6b6b]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/TeachitPro.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Forevernellie",
    category: "Laravel",
    description:
      "Forever Nellie is a Nonprofit Organization dedicated to supporting victims of domestic violence by offering emotional, legal, and rehabilitative aid. We strive to be a light of hope for survivors and a voice against abuse.",
    tech: ["Laravel", "PHP", "MYSQL", "Bootstarp"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#00d4ff]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Forevernellie.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "The Miami School Of Fashion & Design",
    category: "WordPress",
    description:
      "Our fashion institute believes in hands-on learning and the importance of building a professional portfolio right from day one.",
    tech: ["WordPress", "PHP", "Advanced Custom Fields", "SCSS"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2023",
    gradient: "from-[#ff6b6b]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/Istitutomarangonimiami.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sarah Krippner",
    category: "Laravel",
    description:
      "It is that voice of truth inside all of us that calls us towards our dreams. That voice we tend to ignore in favor of self-doubt.",
    tech: ["Laravel", "PHP", "MYSQL", "Bootstarp"],
    tags: ["UI/UX", "Dashboard", "Laravel"],
    role: "Full-Stack Developer",
    year: "2024",
    gradient: "from-[#00d4ff]/30 via-[#111] to-[#0a0a0a]",
    thumbnail: "/images/Projects/SarahKrippner.webp",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Experience
export const experience = [
  {
    title: "Full Stack Developer | Lead Web Designer",
    company: "NetworkHanslers",
    period: "20078 - Present",
    description:
      "Leading a team of 6 designers and developers, architecting design systems, and delivering enterprise-grade frontend solutions for global clients. Championed a component-first design methodology.",
    skills: ["React", "Next.js", "TypeScript", "Design Systems", "Figma"],
    thumbnail: "/images/Projects/work1.jpg",
    type: "work",
  },
  {
    title: "Senior Web Designer cum Programmer",
    company: "Inspehere Solutions",
    period: "2018 - 2025",
    description:
      "Designed and developed 40+ client websites, led design strategy, established brand identity frameworks, and mentored junior designers in modern frontend workflows.",
    skills: ["React", "WordPress", "Bootstrap", "jQuery", "Photoshop"],
    thumbnail: "/images/Projects/work1.jpg",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "SAITES Global",
    period: "2007 - 2008",
    description:
      "Built responsive, cross-browser compatible web interfaces for SaaS products. Collaborated closely with backend teams and implemented RESTful API integrations.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    thumbnail: "/images/Projects/work1.jpg",
    type: "work",
  },
  {
    title: "Frontend Developer and Research",
    company: "SearchFit India",
    period: "2006 - 2007",
    description:
      "Built responsive, cross-browser compatible web interfaces for SaaS products. Collaborated closely with backend teams and implemented RESTful API integrations.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    thumbnail: "/images/Projects/work1.jpg",
    type: "work",
  },
  {
    title: "Freelance Web Designer",
    company: "Self-Employed",
    period: "2006 - 20026",
    description:
      "Started as a freelance web designer serving 30+ local and international clients. Delivered e-commerce sites, portfolio websites, and corporate web solutions.",
    skills: ["HTML", "CSS", "WordPress", "Dreamweaver", "Photoshop"],
    thumbnail: "/images/Projects/work1.jpg",
    type: "work",
  },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Creative Director, NexaTech Solutions",
    avatar: "SM",
    rating: 5,
    text: "Ravi didn't just build what we asked for — he asked the right questions, flagged what we'd missed, and delivered a product that was better than what we originally envisioned. Our load times dropped by 58% and our bounce rate followed. He's the rare developer who thinks like a product manager.",
    year: "Next.js Web App · [2026]",
  },
  {
    name: "James Thornton",
    role: "Co-Founder, Luminary Commerce",
    avatar: "JT",
    rating: 5,
    text: "We've collaborated with a lot of developers over the years. Ravi is the one we keep coming back to. His Figma-to-code translations are pixel-perfect, his communication is proactive, and he hits deadlines without cutting corners. An absolute professional.",
    year: "UI Development · Figma to React · [2026]",
  },
  {
    name: "Phoebe Cates",
    role: "Head of Engineering, FinFlow App",
    avatar: "PC",
    rating: 5,
    text: "We brought Ravi in to modernise a legacy frontend that hadn't been touched in years. He mapped the entire codebase, proposed a migration plan, and executed it without a single day of downtime. His TypeScript expertise and attention to detail are second to none.",
    year: "Frontend Architecture · React Migration · [2026]",
  },
];

export const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "100%", label: "Remote Friendly" },
];

export const techStack = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#CEFF00" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Tailwind", color: "#38BDF8" },
];
