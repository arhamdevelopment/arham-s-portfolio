import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

/* ─── Fade-in wrapper ─── */
const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tight mb-2">
    {children}
    <span className="block mt-3 w-12 h-[2px] bg-secondary" />
  </h2>
);

/* ─── NAV ─── */
const NAV_ITEMS = ["Education", "Experience", "Tools", "Approach", "Contact"];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
    <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#hero" className="font-heading text-sm tracking-widest uppercase text-secondary">MAW</a>
      <ul className="hidden md:flex gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-secondary transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

/* ─── HERO ─── */
const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
      <p className="font-body text-xs tracking-[0.35em] uppercase text-secondary mb-6">Product & Project Manager</p>
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.1]">
        Muhammad<br />Arham Wasim
      </h1>
      <div className="mt-8 w-16 h-[1px] bg-secondary mx-auto" />
      <p className="mt-8 max-w-lg mx-auto font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground">
        Crafting seamless digital products through strategic vision, data-driven decisions, and cross-functional collaboration — turning complex problems into elegant solutions.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-12"
    >
      <a href="#education" className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-secondary transition-colors">
        Scroll to explore
      </a>
    </motion.div>
  </section>
);

/* ─── EDUCATION ─── */
const Education = () => (
  <Section id="education" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>Education</SectionTitle>
      <div className="mt-12 border border-border rounded-sm p-8 md:p-12">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">2020 — 2024</p>
        <h3 className="font-heading text-xl md:text-2xl font-light">University of Agriculture, Faisalabad</h3>
        <p className="font-body text-sm text-muted-foreground mt-3 font-light">
          Bachelor's Degree — Building the analytical foundation and strategic mindset for product leadership.
        </p>
      </div>
    </div>
  </Section>
);

/* ─── EXPERIENCE ─── */
const experiences = [
  {
    period: "Jul 2023 — Nov 2024",
    role: "Associate Product Manager",
    company: "Alchemative",
    link: "https://www.alchemative.com/",
    description: [
      "Collaborated with Senior Product Manager Neelam on Checkout Catalyst — a Shopify app that transforms checkout experiences to boost store revenue.",
      "Owned product requirement documents (PRDs), user story mapping, and sprint planning for feature releases including payment modification, field validations, shipping modifiers, and upselling capabilities.",
      "Conducted A/B testing and analytics reviews to optimize conversion funnels, reducing abandoned cart rates across client stores.",
      "Performed competitive analysis and market research to identify feature gaps and inform the product roadmap.",
      "Managed backlog grooming and prioritization using RICE framework to ensure high-impact features were delivered first.",
      "Led stakeholder communication across engineering, design, and business teams to align on product vision.",
    ],
    highlights: {
      title: "Checkout Catalyst — Key Features",
      items: [
        "Payment & shipping modification based on customer segmentation",
        "Robust field validations ensuring data integrity",
        "On-page upselling to increase AOV",
        "Promotional discounts engine to drive conversions",
        "Custom banners for brand consistency",
      ],
    },
    clients: {
      title: "Client Onboarding — Top Pakistani E-commerce Brands",
      brands: ["IMAGE PK", "Unze London", "Elo", "NISHAT", "Servis"],
    },
  },
  {
    period: "Sep 2022 — Feb 2023",
    role: "Project Manager",
    company: "Asyncdevco",
    link: "https://www.asyncdevco.com/",
    description: [
      "Managed end-to-end delivery of mobile and web application projects, reporting to the Team Lead and CTO.",
      "Defined project scope, timelines, milestones, and resource allocation for cross-functional development teams.",
      "Facilitated Agile/Scrum ceremonies — daily standups, sprint planning, retrospectives — ensuring continuous improvement.",
      "Maintained Jira boards and Confluence documentation for transparent progress tracking and knowledge management.",
      "Proactively identified risks, dependencies, and blockers, implementing mitigation strategies to keep projects on track.",
      "Served as the primary client communication point, translating business requirements into actionable technical tasks.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>Experience</SectionTitle>
      <div className="mt-12 space-y-16">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-[2px] border-secondary pl-8 md:pl-12 relative">
            <span className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-secondary" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-2">{exp.period}</p>
            <h3 className="font-heading text-xl md:text-2xl font-light">
              {exp.role}{" "}
              <span className="text-muted-foreground">—</span>{" "}
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors inline-flex items-center gap-1">
                {exp.company} <ExternalLink className="w-3 h-3" />
              </a>
            </h3>
            <ul className="mt-6 space-y-3">
              {exp.description.map((d, j) => (
                <li key={j} className="font-body text-sm font-light text-muted-foreground leading-relaxed pl-4 border-l border-border">
                  {d}
                </li>
              ))}
            </ul>
            {exp.highlights && (
              <div className="mt-8">
                <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-4">{exp.highlights.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.items.map((item, j) => (
                    <span key={j} className="font-body text-xs border border-border rounded-sm px-3 py-1.5 text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {exp.clients && (
              <div className="mt-8">
                <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-4">{exp.clients.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.clients.brands.map((brand, j) => (
                    <span key={j} className="font-body text-xs bg-muted rounded-sm px-4 py-2 text-foreground tracking-wide">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── TOOLS ─── */
const toolCategories = [
  { category: "Project Management", tools: ["Jira", "Trello", "Asana", "Monday.com", "ClickUp"] },
  { category: "Product & Design", tools: ["Figma", "Miro", "Notion", "Confluence"] },
  { category: "Analytics", tools: ["Google Analytics", "Mixpanel", "Hotjar"] },
  { category: "Communication", tools: ["Slack", "Microsoft Teams", "Zoom"] },
  { category: "Development Awareness", tools: ["GitHub", "Postman", "Swagger"] },
  { category: "Documentation", tools: ["Google Workspace", "Confluence", "Notion"] },
];

const Tools = () => (
  <Section id="tools" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>Tools & Technology</SectionTitle>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolCategories.map((cat, i) => (
          <div key={i}>
            <h4 className="font-heading text-xs tracking-[0.25em] uppercase text-secondary mb-4">{cat.category}</h4>
            <div className="space-y-2">
              {cat.tools.map((tool, j) => (
                <p key={j} className="font-body text-sm font-light text-muted-foreground">{tool}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── APPROACH ─── */
const approaches = [
  {
    title: "User-Centric Thinking",
    description: "Every decision starts with the user. I prioritize empathy-driven research and continuous feedback loops to build products people genuinely need.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Metrics over assumptions. I leverage analytics, A/B testing, and user behavior data to validate hypotheses and guide product strategy.",
  },
  {
    title: "Agile & Iterative",
    description: "Ship fast, learn faster. I champion iterative development with tight feedback cycles to deliver value continuously while minimizing risk.",
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Great products are built by great teams. I bridge engineering, design, and business stakeholders to align vision with execution.",
  },
];

const Approach = () => (
  <Section id="approach" className="py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionTitle>How I Work</SectionTitle>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {approaches.map((item, i) => (
          <div key={i} className="border border-border rounded-sm p-8 hover:border-secondary/40 transition-colors duration-500">
            <h4 className="font-heading text-lg font-light mb-3">{item.title}</h4>
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── CONTACT ─── */
const Contact = () => (
  <Section id="contact" className="py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>
        <span className="inline-block">Let's Connect</span>
      </SectionTitle>
      <p className="mt-8 font-body text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
        Open to conversations about product strategy, project management, and new opportunities.
      </p>
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <a href="mailto:enchantinggeekboy@gmail.com" className="flex items-center gap-3 font-body text-sm text-foreground hover:text-secondary transition-colors">
          <Mail className="w-4 h-4 text-secondary" />
          enchantinggeekboy@gmail.com
        </a>
        <a href="tel:+923198647377" className="flex items-center gap-3 font-body text-sm text-foreground hover:text-secondary transition-colors">
          <Phone className="w-4 h-4 text-secondary" />
          +92 319 864 7377
        </a>
      </div>
      <div className="mt-24 w-16 h-[1px] bg-border mx-auto" />
      <p className="mt-6 font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        © 2024 Muhammad Arham Wasim
      </p>
    </div>
  </Section>
);

/* ─── PAGE ─── */
const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Navbar />
    <Hero />
    <Education />
    <Experience />
    <Tools />
    <Approach />
    <Contact />
  </div>
);

export default Index;
