"use client";

const services = [
  "Dell Laptop Repair",
  "HP Laptop Repair",
  "Lenovo Laptop Repair",
  "Mac Repair",
  "Doorstep Service",
  "Services Near Me",
  "Laptop Screen Repair",
  "Laptop Repair Cost",
  "Estimate Online",
  "Secunderabad",
  "Desktop Repair",
  "Windows App Fix",
  "Laptop Repair Kit",
  "Laptop Keyboard Repair",
  "Same Day Service",
  "Cheapest Laptop Repair",
  "Water Damage Repair",
  "Laptop Home Service",
  "Short Circuit in Laptop",
  "Laptop Motherboard Repair",
  "Charging Port Repair",
];

export default function WeFixSection() {
  return (
    <section className="bg-white text-indigo-700 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">
          <span className="italic text-indigo-400">We Fix</span>{" "}
          <span className="text-purple-500">Desktops & Laptops</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-blue-700 rounded-xl p-4 hover:bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-lg font-bold group-hover:scale-125 transition-transform duration-300">
                  ➤
                </span>
                <h3 className="text-sm font-medium group-hover:underline">
                  {service}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
