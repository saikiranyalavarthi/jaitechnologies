"use client";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are a team of professionals offering reliable laptop sales and
            doorstep repair services with over 15+ years of industry experience.
          </p>
        </div>

        {/* Our Mission */}
        <section className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Know Us – Our Mission
          </h2>
          <p className="text-gray-700">
            We specialize in repairing and servicing all kinds of laptops across
            all major brands. With over a decade of experience, we deliver
            efficient and reliable services at affordable prices. Our
            customer-first approach and advanced technical expertise make us
            your trusted laptop service provider.
          </p>
          <p className="text-gray-700">
            From hardware issues like display or motherboard replacement to
            software problems such as OS installation and virus removal, we’ve
            got you covered.
          </p>
        </section>

        {/* What We Do */}
        <section className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Laptop screen, battery, motherboard replacements</li>
            <li>Speed-up and performance optimization</li>
            <li>OS installation, virus and spyware removal</li>
            <li>SSD, RAM, keyboard upgrades</li>
            <li>DC jack, display, hinge, and panel repairs</li>
            <li>Peripheral setup, software installation, system migration</li>
            <li>Server setup & maintenance in Hyderabad/Secunderabad</li>
            <li>
              Full migration to a new system if old system is unrepairable
            </li>
          </ul>
        </section>

        {/* Governing Principles */}
        <section className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Our Governing Principles
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Quick diagnosis and honest advice</li>
            <li>Same day service at your doorstep</li>
            <li>Fully trained and certified technicians</li>
            <li>Expertise in all systems and platforms</li>
            <li>Constant upgradation of technical skills</li>
          </ul>
        </section>

        {/* Why Clients Choose Us */}
        <section className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Why Clients Choose Us
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Always lower prices</li>
            <li>Same day repairs</li>
            <li>No hidden charges</li>
            <li>18+ years in business</li>
            <li>90-day service warranty</li>
            <li>On-time delivery and satisfaction guaranteed</li>
          </ul>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-50 p-8 rounded-xl shadow text-center grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-3xl font-bold text-blue-700">15+</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">60,000+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">100%</p>
            <p className="text-sm text-gray-600">On-Time Delivery</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">90 Days</p>
            <p className="text-sm text-gray-600">Service Warranty</p>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="bg-white p-8 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Certified Brand Support
          </h2>
          <p className="text-gray-700">
            We are authorized and experienced in repairing Dell, HP, Lenovo, and
            other popular brands. Our engineers are certified and have worked
            with thousands of devices across Hyderabad.
          </p>
          <p className="text-gray-700">
            All repairs are completed within the same day, and we also
            specialize in server installation and setup across the twin cities.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-800">
            Need Instant Help?
          </h3>
          <p className="text-gray-600">
            Call us or message via WhatsApp to get fast service or a free quote.
          </p>
          <a
            href="https://wa.me/916281462972"
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
