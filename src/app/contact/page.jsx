"use client";
import { useState } from "react";

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

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleWhatsApp = () => {
    const message = `Hello Jai Technologies,%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;
    const whatsappNumber = "6281462972";
    const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-400 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-md">
          Looking for reliable services like desktop & laptop sales, quick
          repairs, CCTV camera installation, website/app development, or digital
          marketing in your city? <strong>Jai Technologies</strong> is here to
          help! Fill the form below and connect with us directly on WhatsApp for
          instant assistance.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 outline-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border rounded-lg px-4 py-2 outline-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        {/* Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select a Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 outline-blue-500"
          >
            <option value="">-- Select a Service --</option>
            {services.map((srv, index) => (
              <option key={index} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          disabled={!name || !phone || !service}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
        >
          Connect on WhatsApp
        </button>
      </div>

      {/* 📍 Location Section */}
    </div>
  );
}
