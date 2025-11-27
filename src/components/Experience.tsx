import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Mugna Technology Inc",
      location: "Davao City, Philippines",
      period: "June - August 2025",
      type: "Full-time",
      description: [
        "Built the backend for Student Payments and Government Subsidies, designing database schemas, API endpoints, and business logic for a centralized payment processor",
        "Implemented asynchronous CSV export service using Celery/Redis to handle large files with status polling and retries, creating a reliable flow adopted by 4 other models",
        "Modeled schemas and APIs for Fee Types/Codes with soft-delete and restore features that were adopted site-wide",
      ],
      technologies: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker"],
    },
    {
      title: "Technical Training & Projects",
      company: "Self-Study",
      location: "Boulder, CO",
      period: "July 2024 - May 2025",
      type: "Personal Development",
      description: [
        "Contributed to AmericanLiterature website (400K+ monthly visitors), enhancing backend by replacing static content with bulk database queries using PostgreSQL",
        "Created personalized AI chatbot using RAG techniques and developed various full-stack apps with React, TypeScript, and AWS hosting",
        "Earned certifications: Responsive Web Design, JavaScript Algorithms, Databases and SQL for Python, Python for Data Science & AI",
      ],
      technologies: ["React", "TypeScript", "AWS", "PostgreSQL", "Python"],
    },
    {
      title: "Printer Operator",
      company: "Lifted Limited",
      location: "Boulder, CO",
      period: "March 2021 - August 2023",
      type: "Full-time",
      description: [
        "Managed printing process of Mimaki UV printers",
        "Created design files using Mimaki software, Photoshop, and Illustrator",
      ],
      technologies: ["Photoshop", "Illustrator"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions to various projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover-glow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground/80">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
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
      </div>
    </section>
  );
};

export default Experience;
