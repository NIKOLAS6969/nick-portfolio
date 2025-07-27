const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-tertiary text-sm mb-4 md:mb-0">
            © 2024 Your Name. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/NIKOLAS6969"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/%CE%BD%CE%B9%CE%BA%CE%BF%CE%BB%CE%B1%CF%82-%CF%84%CF%83%CE%B5%CE%BA%CE%B1%CE%B9-b44b89320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/TsekaiNikolas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
