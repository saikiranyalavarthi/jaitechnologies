"use client";

import { useState } from "react";
import { Phone } from "lucide-react"; // optional: install lucide-react or use <svg>

export default function QuoteFormWithContact() {
  const [device, setDevice] = useState("Laptop");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsApp = () => {
    const message = `📱 *Device:* ${device}\n🏷️ *Brand:* ${brand}\n🔢 *Model:* ${model}\n⚠️ *Issue:* ${issue}\n📞 *Phone:* ${phone}`;
    const url = `https://wa.me/916281462972?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT: Contact Info */}
        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
          <p className="mb-6">
            Professional Laptop Sales and Solution Experts provider
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <Phone className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-lg">Phone Number</p>
              <p>+91 6281462972</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Quote Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Get Instant Price Quote
          </h3>
          <p className="text-gray-600 mb-6">Fill the Form Now</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              placeholder="Device"
              className="border px-4 py-2 rounded-lg outline-blue-500"
            />
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Device Brand"
              className="border px-4 py-2 rounded-lg outline-blue-500"
            />
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Enter Model Number"
              className="border px-4 py-2 rounded-lg outline-blue-500"
            />
            <select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="border px-4 py-2 rounded-lg outline-blue-500"
            >
              <option value="">Select issue</option>
              <option>Battery Issue</option>
              <option>Display/Screen</option>
              <option>Motherboard Repair</option>
              <option>Charging Port</option>
              <option>Slow Performance</option>
              <option>Wi-Fi/Internet</option>
              <option>Other</option>
            </select>
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
            className="w-full border px-4 py-2 mb-6 rounded-lg outline-blue-500"
          />

          <button
            onClick={handleWhatsApp}
            disabled={!device || !brand || !model || !issue || !phone}
            className="bg-blue-600 text-white w-full py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
