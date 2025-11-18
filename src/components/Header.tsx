import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white">N</span>
              </div>
              <span className="text-gray-900">Nesthet Clinical</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("values")} className="text-gray-700 hover:text-red-600 transition-colors">
              Values
            </button>
            <button onClick={() => scrollToSection("vision")} className="text-gray-700 hover:text-red-600 transition-colors">
              Vision
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-red-600 hover:bg-red-700">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("about")} className="text-left py-2 text-gray-700 hover:text-red-600">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left py-2 text-gray-700 hover:text-red-600">
              Services
            </button>
            <button onClick={() => scrollToSection("values")} className="text-left py-2 text-gray-700 hover:text-red-600">
              Values
            </button>
            <button onClick={() => scrollToSection("vision")} className="text-left py-2 text-gray-700 hover:text-red-600">
              Vision
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-red-600 hover:bg-red-700 w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
