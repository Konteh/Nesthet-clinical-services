import { Heart, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/boy.jpg"
                alt="Compassionate healthcare"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              Our Story
            </div>
            <h2 className="text-gray-900">
              Born from Compassion, Driven by Purpose
            </h2>
            <p className="text-gray-600">
              Nesthet Clinical Services was inspired by three years of witnessing preventable suffering at Bansang Hospital. 
              I witnessed pregnant women, children, and the elderly suffering from avoidable healthcare challenges, often 
              resulting in tragic outcomes.
            </p>
            <p className="text-gray-600">
              In 2014, after witnessing the first maternal death at Farato Health Post, I decided to act. This entrepreneurial 
              drive gave birth to Nesthet Clinical Services, a mission-driven initiative to bring healthcare to the doorstep 
              of those who need it most.
            </p>

            {/* Key Highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <Heart className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Mission-Driven</h3>
                  <p className="text-gray-600 text-sm">
                    Providing access to affordable high quality healthcare services, supporting clients to cope, 
                    adapt, and recover from stressful health events.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="text-gray-700" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Community-Focused</h3>
                  <p className="text-gray-600 text-sm">
                    Reaching underserved communities across The Gambia through strategic partnerships and innovative 
                    technology platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-gray-700" size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Steady Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Since 2015, we've steadily expanded our service offerings, building partnerships and reaching 
                    more communities year after year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
