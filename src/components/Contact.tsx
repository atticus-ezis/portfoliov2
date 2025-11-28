import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "atticus.ezis@gmail.com",
      link: "mailto:atticus.ezis@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(303) 532-9126",
      link: "tel:3035329126",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boulder, CO",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/atticusezis",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/atticusezis",
    },
    {
      icon: Globe,
      label: "Website",
      link: "https://atticusezis.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-border backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription>
                Available for backend development roles and freelance projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50 border border-border"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <Icon className="mr-2 h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
