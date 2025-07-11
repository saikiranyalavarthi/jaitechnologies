"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import WeFixSection from "./WeFixSection";

const services = [
  { title: "Desktop & Laptop Sales", image: "/assets/image1.jpg" },
  { title: "Laptop/Desktop Services & Repairs", image: "/assets/image2.jpg" },
  { title: "CC Camera Installation", image: "/assets/image3.jpg" },
  { title: "Rent for Desktops & Laptops", image: "/assets/image4.jpg" },
  { title: "Biometric Attendance Installation", image: "/assets/image5.jpg" },
  { title: "Networking Setup & Services", image: "/assets/image6.jpg" },
  { title: "Website Development", image: "/assets/image7.jpg" },
  { title: "App Development", image: "/assets/image8.jpg" },
  { title: "Digital Marketing & SEO", image: "/assets/image9.jpg" },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-slate-100 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Core Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="rounded-2xl shadow-md hover:shadow-xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-2 text-center">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
