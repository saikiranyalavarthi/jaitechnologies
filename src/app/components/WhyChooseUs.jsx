"use client";

import { ShieldCheck, Clock, Award, UserCheck } from "lucide-react"; // Or use any icons you like

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "Exclusive Support",
      description: "Best genuine certified with Low Quotation",
      bg: "bg-orange-50",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Instant Solution",
      description: "Get instant Laptop Solution at Your Doorstep",
      bg: "bg-blue-50",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-green-500" />,
      title: "Expert Technician",
      description: "Well-trained and 10+ years experienced technician.",
      bg: "bg-green-50",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-rose-500" />,
      title: "Best in Class Solution",
      description: "Get best solution for all your problems with laptop",
      bg: "bg-rose-50",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow hover:shadow-lg transition border ${feature.bg}`}
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-center text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
