import { Shield, Building2, Bandage, Activity, Heart, Flower2, Stethoscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Shield,
    title: "Disease Prevention",
    description: "Preventing chronic diseases through dietary advice, regular checkups, and healthy living habits.",
    audience: "Parents providing for children ages 5-17",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Building2,
    title: "Corporate Package",
    description: "Healthcare for organizations to provide their staff with illness care, early diagnosis, and prevention through health checks and lifestyle advice.",
    audience: "Employers providing for their staff",
    color: "bg-gray-100 text-gray-700"
  },
  {
    icon: Bandage,
    title: "Wound Care",
    description: "Specialist wound care for burns, cavity wounds, and clean surgical wounds with expert treatment protocols.",
    audience: "All ages requiring wound treatment",
    color: "bg-gray-100 text-gray-700"
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    description: "Coordinated care for chronic illnesses including hypertension, sickle cell, and diabetes through lifestyle and medication management.",
    audience: "Patients with chronic diseases",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Heart,
    title: "Elderly Care",
    description: "Supporting elderly individuals with or without chronic illnesses in performing daily activities with 6 to 24-hour care options.",
    audience: "Ages 50 upwards",
    color: "bg-gray-100 text-gray-700"
  },
  {
    icon: Flower2,
    title: "Palliative & Hospice Care",
    description: "Compassionate care for patients with terminal illnesses, focusing on pain management, quality of life, and maintaining dignity.",
    audience: "Terminally ill patients",
    color: "bg-gray-100 text-gray-700"
  },
  {
    icon: Stethoscope,
    title: "Ad Hoc Services",
    description: "Additional services including physiotherapy, IV therapy, medical checkups, surgery facilitation, post-operative recovery, and medication delivery.",
    audience: "All ages, as needed",
    color: "bg-red-50 text-red-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From prevention to palliative care, we provide a full spectrum of healthcare services 
            designed to meet the diverse needs of our community.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-3`}>
                    <Icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Target Audience:</p>
                    <p className="text-sm text-gray-700">{service.audience}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
