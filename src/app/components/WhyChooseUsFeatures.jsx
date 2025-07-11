"use client";

import {
  FaClock,
  FaTruck,
  FaDesktop,
  FaStore,
  FaChargingStation,
  FaWindows,
  FaApple,
  FaTools,
} from "react-icons/fa";

export default function WhyChooseUsFeatures() {
  const leftFeatures = [
    {
      icon: <FaClock className="text-blue-600 text-xl" />,
      title: "Same Day Laptop Repairing",
      desc: "Get your laptop fixed the same day! Our expert technicians offer quick and reliable repairs for all laptop issues. Reach out now for hassle-free service and get your device back up and running in no time!",
    },
    {
      icon: <FaTruck className="text-blue-600 text-xl" />,
      title: "Most efficient and Faster services",
      desc: "Experience the ultimate in efficiency with our lightning-fast services! Our team delivers quick and reliable solutions for all your needs. Don’t wait any longer—reach out today and experience the difference firsthand!",
    },
    {
      icon: <FaDesktop className="text-blue-600 text-xl" />,
      title: "Genuine Computer parts, Warranty",
      desc: "Discover peace of mind with our genuine computer parts and warranty! Rest assured that your device will be equipped with high-quality components and backed by our reliable warranty. Don’t settle for anything less—reach out now and experience the difference for yourself!",
    },
    {
      icon: <FaStore className="text-blue-600 text-xl" />,
      title: "All PC repairs at one Store",
      desc: (
        <>
          All available at one convenient location. From diagnostics to repairs,
          our skilled technicians provide expert solutions to keep your devices
          running smoothly. Don’t let{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            technical issues slow you down
          </a>
          —visit us today and unlock the full potential of your PC!
        </>
      ),
    },
  ];

  const rightFeatures = [
    {
      icon: <FaChargingStation className="text-blue-600 text-xl" />,
      title: "No Fix - No Fee",
      desc: "Experience hassle-free laptop repairs with our “No Fix – No Fee” guarantee! Our expert technicians are dedicated to resolving all your laptop issues, ensuring you only pay for successful repairs.",
    },
    {
      icon: <FaWindows className="text-blue-600 text-xl" />,
      title: "Premium Computer service 1 Hour",
      desc: "Unlock premium computer service in just one hour! Our expert technicians are dedicated to providing fast and reliable solutions to all your technical needs.",
    },
    {
      icon: <FaApple className="text-blue-600 text-xl" />,
      title: "30 Days Warranty on All Repairs",
      desc: "We cover all your purchases with a 30 day warranty. If the Repair/product fails in 30 days, we will provide you with replacement or repair of same on our own costs!",
    },
    {
      icon: <FaTools className="text-blue-600 text-xl" />,
      title: "Laptop Parts we stock:",
      desc: (
        <>
          <a className="underline text-blue-600">Charger</a>,{" "}
          <a className="underline text-blue-600">battery</a>,{" "}
          <a className="underline text-blue-600">hard disk</a>,{" "}
          <a className="underline text-blue-600">HDD</a>, SSD,{" "}
          <a className="underline text-blue-600">keyboard</a>,{" "}
          <a className="underline text-blue-600">LCD</a>, display,{" "}
          <a className="underline text-blue-600">memory</a>, ram,{" "}
          <a className="underline text-blue-600">motherboard</a>,{" "}
          <a className="underline text-blue-600">BIOS</a>, base, caddy,{" "}
          <a className="underline text-blue-600">fan</a>, processor,{" "}
          <a className="underline text-blue-600">power button</a>, speaker,
          webcam, and more.
        </>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Features */}
          <div className="space-y-8">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="pt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="pt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
