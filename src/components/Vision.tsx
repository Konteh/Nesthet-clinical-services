import { Target, Eye, Award, DollarSign, Home, Lock, Shield as ShieldIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const propositions = [
  {
    icon: DollarSign,
    title: "Affordability",
    description: "Services at costs affordable to the average Gambian, with profits reinvested into charitable community initiatives."
  },
  {
    icon: Award,
    title: "High Quality",
    description: "Latest techniques and leveraging technology where appropriate for superior care outcomes."
  },
  {
    icon: Home,
    title: "Convenience",
    description: "Bringing healthcare directly to the client's doorstep, eliminating travel barriers."
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Delivering services in the comfort and privacy of the client's home."
  },
  {
    icon: ShieldIcon,
    title: "Peace of Mind",
    description: "Ensuring high-quality care for clients in the absence of loved ones."
  }
];

export function Vision() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Eye className="text-red-600" size={24} />
              </div>
              <h3 className="text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              "Making modern quality healthcare services accessible and affordable to underserved communities 
              in Gambia and beyond by leveraging technology."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Target className="text-gray-700" size={24} />
              </div>
              <h3 className="text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              "To provide access to affordable high quality of healthcare services in The Gambia and beyond, 
              supporting clients to cope, adapt, and recover from stressful health events."
            </p>
          </div>
        </div>

        {/* Goal Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-white mb-3">Our 2028 Goal</h3>
              <p className="text-red-50 text-lg">
                "To ensure that 90% of the population can access high quality healthcare at home, at costs affordable 
                to 80% of Gambians by 2028, anytime and anywhere."
              </p>
            </div>
          </div>
        </div>

        {/* Unique Value Propositions */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="text-gray-900 mb-4">
              Our Unique Value Proposition
            </h2>
            <p className="text-gray-600">
              We're committed to making healthcare accessible, affordable, and exceptional for every Gambian.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propositions.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-gray-700" size={24} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">{prop.title}</h4>
                      <p className="text-gray-600 text-sm">{prop.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
