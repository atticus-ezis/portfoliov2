import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Accounting Software Backend",
      description: "Built comprehensive accounting software backend for Rizal Memorial Colleges Inc, handling payments, journal entries, and fee management",
      technologies: ["Django REST", "PostgreSQL", "Celery", "Redis"],
      highlights: [
        "Authored 10 of 63 total models (16%)",
        "Wrote 78 test cases with CI gates",
        "Designed centralized payment processor",
        "Implemented async CSV exports",
      ],
    },
    {
      title: "AI Chatbot with RAG",
      description: "Personalized AI chatbot utilizing Retrieval-Augmented Generation (RAG) techniques for enhanced contextual responses",
      technologies: ["Python", "React", "TypeScript", "AWS"],
      highlights: [
        "Implemented RAG architecture",
        "Full-stack development",
        "AWS cloud hosting",
        "Real-time chat interface",
      ],
    },
    {
      title: "AmericanLiterature Enhancement",
      description: "Contributed to high-traffic website (400K+ monthly visitors) by replacing static content with dynamic database queries",
      technologies: ["Django", "PostgreSQL", "Python"],
      highlights: [
        "Improved maintainability",
        "Reduced code complexity",
        "Enhanced performance",
        "Database optimization",
      ],
    },
    {
      title: "RPG Game & Pokémon Search",
      description: "Interactive web applications built as part of JavaScript certification, demonstrating frontend skills and API integration",
      technologies: ["JavaScript", "HTML", "CSS", "APIs"],
      highlights: [
        "Game mechanics implementation",
        "External API integration",
        "Responsive design",
        "User interaction handling",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className="bg-card border-border backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 mb-4 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/atticusezis" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
