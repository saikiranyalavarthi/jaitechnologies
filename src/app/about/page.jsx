export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            We are a team of passionate professionals offering reliable Laptop
            Sales and Repair Services at your doorstep.
          </p>
        </div>

        {/* Who We Are */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Who We Are</h2>
          <p className="text-gray-700">
            With over 10+ years of experience in laptop servicing and sales,
            we’ve helped 5000+ customers with affordable and high-quality
            solutions. We offer genuine spare parts, doorstep service, and
            expert technical support.
          </p>
        </section>

        {/* What We Do */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Laptop screen, battery, and motherboard replacements</li>
            <li>Device speed-up and performance optimization</li>
            <li>Software installation and virus removal</li>
            <li>Custom device solutions and accessories</li>
            <li>Free diagnosis and low-cost quotations</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800">Doorstep Service</h4>
              <p className="text-gray-600 text-sm">
                We reach your location quickly for on-spot fixes.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800">Genuine Parts</h4>
              <p className="text-gray-600 text-sm">
                We only use brand-certified parts for replacements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800">Transparent Pricing</h4>
              <p className="text-gray-600 text-sm">
                Affordable rates with no hidden costs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-800">
                Experienced Technicians
              </h4>
              <p className="text-gray-600 text-sm">
                Our team is trained and has over a decade of experience.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-800">
            Need Assistance?
          </h3>
          <p className="text-gray-600">
            Call us now for instant laptop repair or a free quote.
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
