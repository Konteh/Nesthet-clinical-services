export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white">N</span>
              </div>
              <span className="text-white">Nesthet Clinical</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing quality healthcare to your doorstep since 2015. Serving communities across The Gambia with compassion and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("values")} className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Core Values
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("vision")} className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Vision & Mission
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Disease Prevention</li>
              <li>Corporate Healthcare</li>
              <li>Wound Care</li>
              <li>Chronic Disease Management</li>
              <li>Elderly Care</li>
              <li>Palliative Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+220 XXX XXXX</li>
              <li>info@nesthetclinical.com</li>
              <li>The Gambia</li>
              <li className="pt-2 text-teal-400">Available 24/7 for emergencies</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nesthet Clinical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-red-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-red-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
