import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  {
    node: <SiDjango />,
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  // { node: <SiAws />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* Tech Stack Logo Loop */}
      <section className=" relative overflow-hidden">
        <div className="">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--background)"
            ariaLabel="Technology stack"
            className="py-8"
          />
        </div>
      </section>
      <Skills />

      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
