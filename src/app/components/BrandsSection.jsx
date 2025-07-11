"use client";
import Image from "next/image";

const brands = [
  { name: "Acer", src: "/brands/brand1.jpg" },
  { name: "Apple", src: "/brands/brand2.jpg" },
  { name: "Asus", src: "/brands/brand3.jpg" },
  { name: "Compaq", src: "/brands/brand4.jpg" },
  { name: "HP", src: "/brands/brand5.jpg" },
  { name: "Gateway", src: "/brands/brand6.jpg" },
  { name: "Dell", src: "/brands/brand7.jpg" },
  { name: "Fujitsu", src: "/brands/brand8.jpg" },
  { name: "Lenovo", src: "/brands/brand9.jpg" },
  { name: "LG", src: "/brands/brand10.jpg" },
  { name: "Samsung", src: "/brands/brand11.jpg" },
  { name: "Sony", src: "/brands/brand12.jpg" },
];
export default function BrandsSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold">
        BRANDS <span className="text-orange-500">WE DEAL</span>
      </h2>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        We compiled list of top laptop brands that can be helpful to any laptop
        repair.
      </p>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="border rounded-lg p-4 flex items-center justify-center h-24 bg-white shadow-sm"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
