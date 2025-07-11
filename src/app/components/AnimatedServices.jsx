"use client";
import { motion } from "framer-motion";

const services = [
  "Desktop & Laptop Sales",

  "Laptop/Desktop Services & Repairs",

  "CC Camera Installation",

  "Rent for Desktops & Laptops",
  "Biometric Attendance Installation",

  "Networking Setup & Services",

  "Website Development",

  "App Development",

  "Digital Marketing & SEO",
];

export default function AnimatedServices() {
  const repeatedServices = [...services, ...services, ...services]; // Repeating for seamless loop

  return (
    <section className="w-full overflow-hidden py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Heading */}

      {/* Animated Scrolling Line */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 70,
            ease: "linear",
          }}
        >
          {repeatedServices.map((service, index) => (
            <div
              key={index}
              className="min-w-max text-white text-xl sm:text-2xl font-semibold bg-white/10 px-8 py-4 rounded-2xl shadow-lg hover:bg-white/20 transition-all whitespace-nowrap"
            >
              {service}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
