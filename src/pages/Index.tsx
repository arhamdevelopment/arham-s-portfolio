import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ExternalLink, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  <h2 className="font-heading text-2xl md:text-3xl font-light tracking-tight mb-2">
    {children}
    <span className="block mt-3 w-12 h-[2px] bg-secondary" />
  </h2>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50">
    <div className="w-[80%] mx-auto h-14 flex items-center justify-between mt-4 rounded-lg backdrop-blur-3xl bg-black/40 border border-white/10 px-6 shadow-lg">
      <span className="font-heading text-sm font-light tracking-wide text-foreground">
        Arham / <span className="text-muted-foreground italic">Product & Project Manager</span>
      </span>
      <div className="flex items-center gap-4">
        <a href="mailto:enchantinggeekboy@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
          <Mail className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center relative">
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="w-[85%] mx-auto">
      <p className="font-body text-xs tracking-[0.35em] uppercase text-secondary mb-6">Product & Project Manager</p>
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.1]">
        Arham Wasim
      </h1>
      <div className="mt-8 w-16 h-[1px] bg-secondary mx-auto" />
      <p className="mt-8 max-w-lg mx-auto font-body text-sm md:text-base font-light leading-relaxed text-muted-foreground">
        Transforming business challenges into scalable, user-centric digital solutions through strategic insights, cross-functional leadership, and data-driven execution across product development and team coordination.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-12"
    >
      <a href="#about" className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-secondary transition-colors">
        Scroll to explore
      </a>
    </motion.div>
  </section>
);

const sectionLinks = [
  { label: "Education", href: "#education" },
  { label: "Professional Experience", href: "#experience" },
  { label: "Tools & Technology", href: "#tools" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const About = () => (
  <Section id="about" className="py-20">
    <div className="w-[85%] mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tight">A Arham Wasim</h2>
        <p className="font-heading text-sm text-secondary mt-2 tracking-wide">Product & Project Manager</p>
        <p className="font-body text-sm text-muted-foreground mt-4 font-light leading-relaxed">
          I build strategic, user-centric digital products and manage cross-functional teams to deliver impactful solutions.
        </p>
        <div className="mt-10 space-y-3">
          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-secondary transition-colors group"
            >
              <span className="w-6 h-[1px] bg-muted-foreground group-hover:bg-secondary group-hover:w-10 transition-all duration-300" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading text-xs tracking-[0.3em] uppercase text-secondary mb-6">About Me</h3>
        <div className="space-y-5 font-body text-sm font-light text-muted-foreground leading-relaxed">
          <p>
            I'm a Product and Project Manager who genuinely enjoys building things that feel effortless to use. Over the past 3+ years, I've worked across the full spectrum of product management from discovery and strategy to execution and delivery. My work naturally evolved from coordinating software projects to shaping products and solving real business problems, collaborating closely with engineering, design, and business teams.
          </p>
          <p>
            Throughout my career, I've contributed to <span className="text-foreground font-normal">startups</span> and <span className="text-foreground font-normal">digital agencies</span>, helping them deliver scalable applications and high-performing digital experiences. From defining product roadmaps and writing PRDs to conducting A/B tests and analyzing conversion funnels, my focus stays the same: create products that are thoughtfully designed and built to scale.
          </p>
          <p>
            At <span className="text-foreground font-normal">Alchemative</span>, I worked on Checkout Catalyst, a Shopify app transforming checkout experiences for some of Pakistan's top e-commerce brands including NISHAT, IMAGE PK, and Unze London. I've also managed end-to-end delivery of mobile and web applications at <span className="text-foreground font-normal">Asyncdevco</span>, ensuring projects ship on time with quality.
          </p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 mt-8 font-body text-xs tracking-[0.2em] uppercase border border-border rounded-sm px-6 py-3 text-foreground hover:border-secondary hover:text-secondary transition-colors duration-300">
          Get In Touch <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" className="py-20">
    <div className="w-[85%] mx-auto">
      <SectionTitle>Education</SectionTitle>
      <div className="mt-10">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">2020 to 2024</p>
        <h3 className="font-heading text-xl md:text-2xl font-light">University of Agriculture, Faisalabad</h3>
        <p className="font-body text-sm text-muted-foreground mt-3 font-light">
          Bachelor's Degree, Building the analytical foundation and strategic mindset for product leadership.
        </p>
      </div>
    </div>
  </Section>
);

const experiences = [
  {
    period: "Jul 2023 to Nov 2024",
    role: "Associate Product Manager",
    company: "Alchemative",
    link: "https://www.alchemative.com/",
    description: [
      "Collaborated with Senior Product Manager Neelam on Checkout Catalyst, a Shopify app that transforms checkout experiences to boost store revenue.",
      "Owned product requirement documents (PRDs), user story mapping, and sprint planning for feature releases including payment modification, field validations, shipping modifiers, and upselling capabilities.",
      "Conducted A/B testing and analytics reviews to optimize conversion funnels, reducing abandoned cart rates across client stores.",
      "Performed competitive analysis and market research to identify feature gaps and inform the product roadmap.",
      "Managed backlog grooming and prioritization using RICE framework to ensure high-impact features were delivered first.",
      "Led stakeholder communication across engineering, design, and business teams to align on product vision.",
    ],
    highlights: {
      title: "Checkout Catalyst: Key Features",
      items: [
        "Payment & shipping modification based on customer segmentation",
        "Robust field validations ensuring data integrity",
        "On-page upselling to increase AOV",
        "Promotional discounts engine to drive conversions",
        "Custom banners for brand consistency",
      ],
    },
    clients: {
      title: "Client Onboarding: Top Pakistani E-commerce Brands",
      brands: ["IMAGE PK", "Unze London", "Elo", "NISHAT", "Servis"],
    },
  },
  {
    period: "Dec 2024 to Present",
    role: "Project Manager",
    company: "Asyncdevco",
    link: "https://www.asyncdevco.com/",
    description: [
      "Manage end-to-end delivery of mobile and web application projects, reporting to the Team Lead and CTO.",
      "Define project scope, timelines, milestones, and resource allocation for cross-functional development teams.",
      "Facilitate Agile/Scrum ceremonies daily standups, sprint planning, retrospectives ensuring continuous improvement.",
      "Maintain Jira boards and Confluence documentation for transparent progress tracking and knowledge management.",
      "Proactively identify risks, dependencies, and blockers, implementing mitigation strategies to keep projects on track.",
      "Serve as the primary client communication point, translating business requirements into actionable technical tasks.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" className="py-20">
    <div className="w-[85%] mx-auto">
      <SectionTitle>Experience</SectionTitle>
      <div className="mt-10 space-y-14">
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-[2px] border-secondary pl-8 md:pl-10 relative">
            <span className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-secondary" />
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-2">{exp.period}</p>
            <h3 className="font-heading text-xl md:text-2xl font-light">
              {exp.role}{" "}
              <span className="text-muted-foreground">at</span>{" "}
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors inline-flex items-center gap-1">
                {exp.company} <ExternalLink className="w-3 h-3" />
              </a>
            </h3>
            <ul className="mt-5 space-y-2.5">
              {exp.description.map((d, j) => (
                <li key={j} className="font-body text-sm font-light text-muted-foreground leading-relaxed pl-4 border-l border-border">
                  {d}
                </li>
              ))}
            </ul>
            {exp.highlights && (
              <div className="mt-6">
                <h4 className="font-heading text-xs tracking-widest uppercase text-secondary mb-3">{exp.highlights.title}</h4>
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
              <div className="mt-6">
                <h4 className="font-heading text-xs tracking-widest uppercase text-secondary mb-3">{exp.clients.title}</h4>
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

const toolCategories = [
  {
    category: "Project Management",
    tools: [
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira/2684FF" },
      { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
      { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
      { name: "Monday.com", icon: "https://cdn.simpleicons.org/monday/6C41E0" },
    ],
  },
  {
    category: "Product & Design",
    tools: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Miro", icon: "https://cdn.simpleicons.org/miro/FFD02F" },
      { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
    ],
  },
  {
    category: "Analytics",
    tools: [
      { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/E37400" },
      { name: "Mixpanel", icon: "https://cdn.simpleicons.org/mixpanel/7856FF" },
      { name: "Hotjar", icon: "https://cdn.simpleicons.org/hotjar/FF3C00" },
    ],
  },
  {
    category: "Communication",
    tools: [
      { name: "Slack", icon: "https://cdn.simpleicons.org/slack/4A154B" },
      { name: "Microsoft Teams", icon: "https://cdn.simpleicons.org/microsoftteams/6264A7" },
      { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/0B5CFF" },
    ],
  },
  {
    category: "Development Awareness",
    tools: [
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
    ],
  },
  {
    category: "Documentation",
    tools: [
      { name: "Google Workspace", icon: "https://cdn.simpleicons.org/google/4285F4" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
      { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
    ],
  },
];

const Tools = () => (
  <Section id="tools" className="py-20">
    <div className="w-[85%] mx-auto">
      <SectionTitle>Tools & Technology</SectionTitle>
      <div className="mt-12 space-y-12">
        {toolCategories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-light text-foreground mb-1">{cat.category}</h3>
              <div className="w-12 h-[1px] bg-secondary" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.tools.map((tool, j) => (
                <div 
                  key={j} 
                  className="flex flex-col items-center justify-center p-5 border border-border rounded-lg hover:border-secondary/60 hover:shadow-md hover:shadow-secondary/10 transition-all duration-300 group"
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-300" 
                    loading="lazy" 
                  />
                  <p className="font-body text-xs font-light text-muted-foreground text-center group-hover:text-foreground transition-colors">{tool.name}</p>
                </div>
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
  <Section id="approach" className="py-20">
    <div className="w-[85%] mx-auto">
      <SectionTitle>My Approach</SectionTitle>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {approaches.map((item, i) => (
          <div key={i} className="border border-border rounded-sm p-7 hover:border-secondary/40 transition-colors duration-500">
            <h4 className="font-heading text-lg font-light mb-3">{item.title}</h4>
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── WHAT I OFFER ─── */
const services = [
  {
    title: "Product Strategy & Roadmap",
    description: "Define clear product vision, market positioning, and actionable roadmaps aligned with business objectives and user needs.",
  },
  {
    title: "Project Management & Delivery",
    description: "Drive seamless execution through agile methodologies, resource planning, risk management, and on-time delivery of high-quality solutions.",
  },
  {
    title: "Stakeholder Alignment",
    description: "Bridge teams across engineering, design, and business to ensure aligned vision, transparent communication, and shared ownership.",
  },
  {
    title: "User Research & Analytics",
    description: "Conduct user discovery, gather insights through analytics and A/B testing, and use data to inform product decisions.",
  },
  {
    title: "Product Documentation",
    description: "Create comprehensive PRDs, user stories, process documentation, and knowledge bases for transparent project execution.",
  },
  {
    title: "Team Leadership & Coordination",
    description: "Build and lead high-performing cross-functional teams, facilitate agile ceremonies, and foster continuous improvement culture.",
  },
];

const WhatIOffer = () => (
  <Section id="services" className="py-20">
    <div className="w-[85%] mx-auto">
      <SectionTitle>What I Offer</SectionTitle>
      <p className="mt-6 font-body text-sm text-muted-foreground font-light max-w-2xl leading-relaxed">
        As a Product and Project Manager, I bring strategic thinking and operational excellence to help organizations, businesses, and freelancers build and scale digital products successfully. Here's how I can contribute to your success:
      </p>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="border border-border rounded-sm p-6 hover:border-secondary/40 transition-colors duration-500">
            <h4 className="font-heading text-base font-light mb-3 text-foreground">{service.title}</h4>
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* ─── CONTACT ─── */
const Contact = () => (
  <Section id="contact" className="py-20">
    <div className="w-[85%] mx-auto text-center">
      <SectionTitle>
        <span className="inline-block">Let's Connect</span>
      </SectionTitle>
      <p className="mt-6 font-body text-sm text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
        I'm always interested in discussing new opportunities, product challenges, and how I can help bring your vision to life. Whether you're looking for product strategy guidance, project management support, or want to collaborate on something exciting, let's talk.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="mailto:enchantinggeekboy@gmail.com" className="flex items-center gap-3 font-body text-sm text-foreground hover:text-secondary transition-colors border border-border rounded-sm px-6 py-3 hover:border-secondary">
          <Mail className="w-4 h-4" />
          enchantinggeekboy@gmail.com
        </a>
        <a href="tel:+923198647377" className="flex items-center gap-3 font-body text-sm text-foreground hover:text-secondary transition-colors border border-border rounded-sm px-6 py-3 hover:border-secondary">
          <Phone className="w-4 h-4" />
          +92 319 864 7377
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <div className="mt-16 w-16 h-[1px] bg-border mx-auto" />
      <p className="mt-6 font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        © 2024 A Arham Wasim
      </p>
    </div>
  </Section>
);

/* ─── PAGE ─── */
const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Tools />
    <Approach />
    <WhatIOffer />
    <Contact />
  </div>
);

export default Index;
