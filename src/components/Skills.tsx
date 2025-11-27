import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, TestTube } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Building robust server-side applications with modern frameworks",
      skills: ["Python", "Django REST Framework", "RESTful APIs", "JWT Authentication"],
    },
    {
      icon: Database,
      title: "Database & Data",
      description: "Designing efficient data models and query optimization",
      skills: ["PostgreSQL", "Redis", "Database Design", "Schema Modeling"],
    },
    {
      icon: Cloud,
      title: "DevOps & Infrastructure",
      description: "Deploying and maintaining scalable cloud applications",
      skills: ["Docker", "AWS Elastic Beanstalk", "Amazon S3", "Celery", "Git/GitHub"],
    },
    {
      icon: TestTube,
      title: "Testing & Quality",
      description: "Ensuring code reliability through comprehensive testing",
      skills: ["Pytest", "Factory Boy", "CI/CD", "GitHub Actions"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in backend development with a focus on building scalable, maintainable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover-glow animate-fade-in backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted rounded-full text-sm border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
