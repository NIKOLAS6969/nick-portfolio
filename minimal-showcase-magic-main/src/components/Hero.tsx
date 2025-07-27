import heroImage from "@/assets/hero-bg.jpg";
import { Linkedin, Instagram, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-light text-text-primary mb-6 leading-tight">
            Creative
            <span className="block font-normal">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
            Crafting digital experiences with precision, simplicity, and
            purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm text-sm font-medium"
            >
              View Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border border-border text-text-primary hover:bg-surface-elevated transition-colors rounded-sm text-sm font-medium"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/NIKOLAS6969"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/n.tsekk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
