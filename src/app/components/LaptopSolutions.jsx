"use client";

import {
  FaBatteryHalf,
  FaNetworkWired,
  FaKeyboard,
  FaTv,
  FaChargingStation,
} from "react-icons/fa";
import {
  PiMonitorBold,
  PiDesktopTowerLight,
  PiClipboardBold,
} from "react-icons/pi";

const solutions = [
  {
    title: "Laptop Screen Solution",
    description: "We provide 100% genuine Screen",
    icon: <PiMonitorBold className="text-blue-600 text-3xl" />,
  },
  {
    title: "Display Glass Solution",
    description: "Best glass for display with best rates",
    icon: <PiDesktopTowerLight className="text-blue-600 text-3xl" />,
  },
  {
    title: "Battery Solution",
    description: "Get best Battery Solution",
    icon: <FaBatteryHalf className="text-blue-600 text-3xl" />,
  },
  {
    title: "Back Panel Solution",
    description: "We provide all laptop back-panel solutions at door-step",
    icon: <PiClipboardBold className="text-blue-600 text-3xl" />,
  },
  {
    title: "Charging",
    description:
      "We fix your device charging issue with experienced technicians",
    icon: <FaChargingStation className="text-blue-600 text-3xl" />,
  },
  {
    title: "Motherboard",
    description: "Get your device motherboard solution with the lowest price",
    icon: <PiClipboardBold className="text-blue-600 text-3xl" />,
  },
  {
    title: "Network Issue",
    description: "Any issue related to the network gets easily fixed with us",
    icon: <FaNetworkWired className="text-blue-600 text-3xl" />,
  },
  {
    title: "Keyboard Solution",
    description:
      "Get great offers to fix your laptop keyboard at your door-step",
    icon: <FaKeyboard className="text-blue-600 text-3xl" />,
  },
  {
    title: "Other Accessories",
    description:
      "All laptop panel, mouse, charger, hinges, fan, RAM, SSD solution",
    icon: <FaTv className="text-blue-600 text-3xl" />,
  },
];

export default function LaptopSolutions() {
  return (
    <section className="bg-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Laptop Solutions We Provide
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-xl transition"
            >
              <div className="bg-blue-50 p-3 rounded-md">{sol.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {sol.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
