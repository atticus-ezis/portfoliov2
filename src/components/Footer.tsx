const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Atticus Ezis. Built with React & TypeScript.
          </p>
          <p className="text-xs mt-2">
            Backend Developer • Django REST Framework Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
