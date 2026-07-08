import { Button } from "@/components/Button";
import * as Icons from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Redux Toolkit",
  "Context API",
  "React Router",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "GraphQL",
  "Apollo Client",
  "Axios",
  "React Hook Form",
  "Yup",
  "Jest",
  "Git",
  "GitHub Actions",
  "Docker",
  "Postman",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Frontend Developer
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
               Hi, I'm Hari Prasath — a Frontend Developer specializing in React.js, JavaScript, and TypeScript. 
               I build responsive, scalable, and high-performance web applications with reusable components, seamless API integrations, and modern user experiences that deliver real business value.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Me
                  <Icons.ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <a href="/HariprasathM_FullStackDeveloper_Resume.pdf" download>
                <AnimatedBorderButton>
                  <Icons.Download className="w-5 h-5 mr-2" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
                {
                  icon: Icons.Github || Icons.GitBranch,
                  href: "#",
                },
                {
                  icon: Icons.Linkedin || Icons.User,
                  href: "#",
                },
                {
                  icon: Icons.Twitter || Icons.MessageCircle,
                  href: "#",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent to-primary/10 
                blur-2xl animate-pulse"
              />

              {/* Image Card */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo-ai.jpg"
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>

                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />

            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>

          <Icons.ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
