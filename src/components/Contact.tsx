import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-4">
                Get In Touch
              </div>
              <h2 className="text-gray-900 mb-4">
                Ready to Experience Quality Healthcare?
              </h2>
              <p className="text-gray-600 text-lg">
                Contact us today to learn more about our services or to schedule a consultation. 
                Our team is here to answer your questions and support your healthcare needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <Phone className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+220 2435437</p>
                  <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-gray-700" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">ncsgambia@gmail.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-gray-700" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">The Gambia</p>
                  <p className="text-gray-500 text-sm">Serving communities nationwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-gray-700" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-500 text-sm">Emergency services available 24/7</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-red-600 hover:bg-red-700" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <ImageWithFallback
                src="/images/kaddy.jpg"
                alt="Elderly care support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
