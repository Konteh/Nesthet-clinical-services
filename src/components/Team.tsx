import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm">
              Our Team
            </div>
            <h2 className="text-gray-900">
              Dedicated Professionals, Compassionate Care
            </h2>
            <p className="text-gray-600">
              Our dedicated team ensures convenience, privacy, and peace of mind by eliminating the barriers 
              of accessing healthcare facilities, such as long queues, lack of transportation, and the stress 
              of navigating complex healthcare systems.
            </p>
            <p className="text-gray-600">
              With empathy, customer-centricity, and flexibility at our core, we deliver equitable, high-quality, 
              and affordable healthcare services in The Gambia through innovative technology platforms.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-red-600 text-2xl">100+</div>
                <p className="text-gray-600 text-sm">Healthcare Professionals</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-red-600 text-2xl">24/7</div>
                <p className="text-gray-600 text-sm">Support Available</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/merr.jpg"
                alt="Medical professionals team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
