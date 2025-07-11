"use client";

export default function CallNowBanner() {
  return (
    <section className="bg-blue-600 py-16 px-4 rounded-3xl text-center text-white relative overflow-hidden">
      {/* Decorative Background Dots */}
      <div className="absolute top-4 left-8 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-4 right-12 w-28 h-28 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
          Call Us Now for <span className="text-white font-bold">FREE</span>{" "}
          Price Quotation
        </h2>
        <p className="text-lg mb-6">Get Instant Quotation On First Call</p>

        <a
          href="tel:+916281462972"
          className="inline-block px-8 py-3 border border-white text-white rounded-full text-lg hover:bg-white hover:text-blue-600 transition font-medium"
        >
          +916281462972
        </a>
      </div>
    </section>
  );
}
