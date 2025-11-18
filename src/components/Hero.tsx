import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    image: "/images/measure.jpg",
    alt: "Healthcare professional providing home care"
  },
  {
    image: "/images/awa.jpg",
    alt: "Doctor patient consultation"
  },
  {
    image: "/images/apple.jpg",
    alt: "Nurse providing elderly care"
  },
  {
    image: "/images/eye.jpg",
    alt: "Medical checkup healthcare"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full">
              Serving Communities Since 2016
            </div>
            <h1 className="text-gray-900">
              Quality Healthcare at Your Doorstep
            </h1>
            <p className="text-gray-600 text-lg">
              Nesthet Clinical Services brings affordable, high-quality healthcare directly to your home. 
              Eliminating barriers, ensuring convenience, privacy, and peace of mind for all Gambians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("services")} 
                className="bg-red-600 hover:bg-red-700"
                size="lg"
              >
                Our Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection("about")} 
                variant="outline"
                size="lg"
                className="border-red-200 hover:bg-red-50"
              >
                Our Story
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-red-600">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-red-600">90%</div>
                <div className="text-gray-600 text-sm">Target Coverage</div>
              </div>
              <div>
                <div className="text-red-600">24/7</div>
                <div className="text-gray-600 text-sm">Care Available</div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Slides */}
              <div className="relative h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ImageWithFallback
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-gray-800" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="text-gray-800" size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? "bg-red-600 w-8" 
                        : "bg-white/70 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-red-600 text-3xl">2028</div>
              <div className="text-gray-600 text-sm">Our Target Goal</div>
              <div className="text-gray-500 text-xs mt-1">Affordable care for 80% of Gambians</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
