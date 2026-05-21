import * as Icons from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Supplier Hub Management System",
    description:
      "A compliance-first vendor onboarding module with real-time document verification, automated data extraction, and Surepass API integration for instant KYC validation.",
    image: "/projects/doc-verify-poster1.jpg",
    tags: ["React", "JavaScript", "NodeJS", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "SQL Capital Management",
    description:
      "A secure investor onboarding and document management platform with CSV bulk uploads, tax compliance workflows, and real-time share calculations using React, Node.js, and AWS services.",
    image: "/projects/sqn-project-dashboard.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Tringhub - Project Management Dashboard",
    description:
      "A modern project management dashboard for employee tracking, task management, data visualization, and workflow monitoring with interactive charts and scalable full-stack architecture.",
    image: "/projects/project-management-tool.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive portfolio website showcasing projects, technical skills, experience, and interactive UI animations with seamless user experience.",
    image: "/projects/personal-portfolio-website1.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* Hover Icons */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icons.ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Icons.GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3
                    className="text-xl font-semibold 
                    group-hover:text-primary transition-colors"
                  >
                    {project.title}
                  </h3>

                  <Icons.ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                    group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full 
                      bg-surface text-xs font-medium 
                      border border-border/50 
                      text-muted-foreground 
                      hover:border-primary/50 
                      hover:text-primary 
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <Icons.ArrowUpRight className="w-5 h-5 ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
