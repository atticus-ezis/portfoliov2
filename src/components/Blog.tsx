import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const featuredPost = {
    title: "JWT Hybrid Authentication with Django & dj-rest-auth",
    description: "A useful Django CookieCutter I designed with fully functional API endpoints for account management using JWT. Mobile and browser friendly.",
    date: "Published on Medium",
    readTime: "10 min read",
    tags: ["Django", "JWT", "Authentication", "Backend"],
    link: "https://medium.com/@atticus.ezis/jwt-hybrid-authentication-with-django-dj-rest-auth-6b080eb04a1a",
  };

  const posts = [
    {
      title: "Understanding Common Authentication Methods",
      description: "Helpful way to understand commonly used authentication methods. A comprehensive guide for developers.",
      date: "Published on Medium",
      readTime: "7 min read",
      tags: ["Authentication", "Security", "Backend"],
      link: "https://medium.com/@atticus.ezis",
    },
    {
      title: "Understanding JWT Refresh Tokens, Blacklists & Rotations",
      description: "A very useful and non-technical way to understand Authorization Tokens for Backend Devs.",
      date: "Published on Medium",
      readTime: "8 min read",
      tags: ["JWT", "Security", "Tokens"],
      link: "https://medium.com/@atticus.ezis/understanding-jwt-refresh-tokens-blacklists-and-rotations-9a740cc619fa",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts from my Medium publications
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <Card className="bg-card border-border backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <BookOpen className="h-4 w-4" />
                <span>Featured Post</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-3">{featuredPost.title}</CardTitle>
              <CardDescription className="text-base">{featuredPost.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-muted rounded-full text-sm border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="default" size="lg">
                <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">
                  Read on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className="bg-card border-border backdrop-blur-sm h-full flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted rounded text-xs border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://medium.com/@atticus.ezis" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              View All Posts on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
