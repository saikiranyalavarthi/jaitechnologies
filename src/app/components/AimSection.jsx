"use client";

import { FaDesktop, FaLightbulb, FaCloud } from "react-icons/fa";

export default function AimSection() {
  return (
    <section className="bg-blue-400 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">OUR AIM</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          It is our goal to provide innovative repair services for Laptops,
          Desktops and Printers providing excellent customer service and quality
          repair with a quick turnaround. We serve to get you back to normal use
          of your device as soon as possible and more efficiently while creating
          long-term relationships with customers.
        </p>

        <div className="grid md:grid-cols-3 gap-12 pt-12 text-center">
          {/* Trusted Services */}
          <div className="space-y-4">
            <FaDesktop className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Trusted services</h3>
            <p className="text-base">
              First We Provide laptop and PC/Computer fault diagnostics check!
            </p>
          </div>

          {/* Remote Support */}
          <div className="space-y-4">
            <FaLightbulb className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Remote Support</h3>
            <p className="text-base">
              Wherever and whenever you need a remote laptop and Desktop repair,
              SBR Computers has the fast and flawless remote support.
            </p>
          </div>

          {/* Professional Repair */}
          <div className="space-y-4">
            <FaCloud className="text-4xl mx-auto" />
            <h3 className="text-xl font-semibold">Professional Repair</h3>
            <p className="text-base">
              We are the team of highly skilled and qualified technicians for
              all your laptop repairs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
