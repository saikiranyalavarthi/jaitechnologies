export default function ServicesPage() {
  const services = [
    {
      title: "Laptop Screen Solution",
      description:
        "We provide 100% genuine laptop screen replacements at your doorstep.",
    },
    {
      title: "Display Glass Solution",
      description:
        "Best quality glass for all laptop displays with affordable pricing.",
    },
    {
      title: "Battery Solution",
      description:
        "Get original laptop batteries replaced at home by professionals.",
    },
    {
      title: "Back Panel Solution",
      description:
        "Fix or replace broken or cracked back panels at your doorstep.",
    },
    {
      title: "Charging Issue",
      description:
        "We fix charging port or adapter-related issues by experienced techs.",
    },
    {
      title: "Motherboard Repair",
      description:
        "Reliable motherboard diagnosis and chip-level repair with warranty.",
    },
    {
      title: "Network Issue",
      description:
        "Any Wi-Fi or LAN related issues resolved efficiently by experts.",
    },
    {
      title: "Keyboard Solution",
      description:
        "Get your laptop keyboard replaced with original parts at your home.",
    },
    {
      title: "Other Accessories",
      description:
        "Charger, RAM, SSD, hinges, fan, panels – all available and replaceable.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We offer professional doorstep laptop repair and upgrade services
          using 100% genuine parts with expert support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
