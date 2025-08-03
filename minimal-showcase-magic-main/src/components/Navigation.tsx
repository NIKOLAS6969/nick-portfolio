import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    console.log("Mobile menu toggled:", !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-medium text-text-primary hover:text-text-secondary transition-colors"
          >
            Nick Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 text-text-primary hover:text-primary transition-all duration-200 bg-surface-elevated rounded-lg hover:bg-surface-elevated/80 border border-border transform hover:scale-105"
            aria-label="Toggle mobile menu"
          >
            <div className="transition-transform duration-200">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 pb-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4 px-4">
            {["About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-base font-medium text-text-primary hover:text-primary transition-all duration-200 py-3 px-3 rounded-md hover:bg-surface-elevated transform hover:scale-105"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
