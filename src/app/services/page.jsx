"use client";

import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">
          Computer & Laptop Sales & Services
        </h1>

        {/* Computer Sales Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Computer Sales
          </h2>
          <p>
            We offer customized computer builds based on your computing
            requirements—from basic to high-performance systems. Brands like
            Dell, HP, Lenovo, and Acer are available with the latest
            configurations.
          </p>
        </div>

        {/* Computer Repair Services */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Computer Repair Services in Hyderabad
          </h2>
          <p>
            Onsite services available for home and office. We assist with both
            repair and replacement, including CPU issues, boot problems, display
            errors, slow performance, cleaning, USB port repair, data recovery,
            networking support, and more.
          </p>
        </div>

        {/* Laptop Services */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Laptop Sales & Services
          </h2>
          <p>
            Fast turnaround for all brands. We handle startup issues, boot lag,
            no display/power, internal fan noise, overheating, screen repairs,
            battery/keyboard replacement, DC jack, motherboard chip level,
            internal cleaning, and OS recovery.
          </p>
        </div>

        {/* AMC Services */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Annual Maintenance Contract (AMC)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Computer & Laptop Maintenance</li>
            <li>Virus Protection & Removal</li>
            <li>Hardware Add/Remove & Printer Maintenance</li>
            <li>LAN/WAN setup & network troubleshooting</li>
            <li>Software Updates, Patches, Tune-Ups</li>
            <li>Budget-friendly & priority support</li>
          </ul>
        </div>

        {/* Data Recovery */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Data Recovery Services
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Hard Disk, Pendrive, Laptop, Mobile, and External Drive Recovery
            </li>
            <li>Deleted/Formatted/Failed media recovery</li>
            <li>
              Secure and confidential process with no data, no charge policy
            </li>
            <li>Latest equipment and software tools</li>
          </ul>
        </div>

        {/* Apple/Mac Services */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Apple / MacBook / iMac Repair & Upgrade
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Motherboard graphics, DC jack, liquid damage</li>
            <li>OS installation (Tiger to High Sierra)</li>
            <li>Keyboard, Battery, Charging port replacements</li>
            <li>
              Software support: MS Office, FCP, Adobe Suite, AutoCAD, VMware
            </li>
          </ul>
        </div>

        {/* Why Choose SBR */}
        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Why SBR Computers?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>356 Days Service</li>
            <li>1 Hour City-wide Reporting</li>
            <li>Remote & Phone Support</li>
            <li>Experienced Technicians & Standby Equipment</li>
            <li>10 Years of Experience & 100% Repair/Replace Guarantee</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
