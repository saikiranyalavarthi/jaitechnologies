"use client";

export default function WhyWeAreBest() {
  const stats = [
    { number: "5", label: "Google Rating" },
    { number: "5580", label: "Happy Clients" },
    { number: "10", label: "Year of Experience Technician" },
    { number: "3", label: "Cities In India" },
  ];

  return (
    <section className="bg-blue-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Why we are the Best
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded" />
        <p className="text-gray-700 mb-12">
          No. 1 Direct Door-Step Solution Provider by Our Own Experienced
          Technician (No vendor) and 100% Satisfaction Guarantee
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold text-gray-800">
                {stat.number}
              </h3>
              <div className="w-10 h-1 bg-blue-600 mx-auto my-2 rounded" />
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
