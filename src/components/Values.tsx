import { Award, HeartHandshake, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering the highest standard of care through skilled professionals."
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description: "Treating all patients with dignity, respect, and empathy."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with transparency, honesty, and ethical practices."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging new technologies to improve patient care."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with patients, families, and healthcare teams for coordinated care."
  }
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-4">
            Our Core Values
          </div>
          <h2 className="text-gray-900 mb-4">
            Principles That Guide Our Care
          </h2>
          <p className="text-gray-600 text-lg">
            Our values are the foundation of every interaction, every service, and every life we touch.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl items-center justify-center">
                  <Icon className="text-gray-700" size={28} />
                </div>
                <h3 className="text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
