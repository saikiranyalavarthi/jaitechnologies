"use client";

import { useState } from "react";

export default function LaptopQuoteSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const handleWhatsApp = () => {
    const message = `Hello, my name is ${name}. I need help with: "${issue}". My contact number is ${phone}.`;
    const url = `https://wa.me/916281462972?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Info */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-1 rounded-full mb-4 text-sm">
            Door Step Service @Home
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Professional <span className="text-blue-600">Laptop</span> Sales and
            Solution <br /> Experts Provider
          </h1>
          <p className="text-gray-600 mb-4">
            Laptop solution is now too easy at the Lowest Price and 100%
            Authentic Branded Products with World-Class Support by Experienced
            Technicians at your Door-step.
          </p>
          <p className="text-gray-600 mb-6">
            Get all branded screen, battery, charger, SSD, RAM, and motherboard
            replacement services at your home with no extra charges.
          </p>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-2xl border mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 outline-blue-500"
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
              className="w-full border rounded-lg px-4 py-3 outline-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>

          {/* Dropdown for Issue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Issue
            </label>
            <select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-blue-500"
            >
              <option value="">Select Issue</option>
              <option>Battery Issue</option>
              <option>Display/Screen</option>
              <option>Motherboard Repair</option>
              <option>Charging Port</option>
              <option>Slow Performance</option>
              <option>Wi-Fi/Internet</option>
              <option>Other</option>
            </select>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            disabled={!name || !phone || !issue}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
          >
            Connect on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
