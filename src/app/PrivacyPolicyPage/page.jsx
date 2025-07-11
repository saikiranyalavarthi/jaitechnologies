export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600">
          At [Your Company Name], we are committed to protecting your privacy
          and ensuring that your personal information is handled in a safe and
          responsible manner.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We collect personal information such as your name, phone number,
            email address, and service-related details when you fill out a form,
            contact us via WhatsApp, or request a quotation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>To provide and manage our laptop repair and sales services</li>
            <li>To respond to your inquiries and service requests</li>
            <li>
              To send you service updates, invoices, or promotional messages (if
              opted in)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            3. Data Protection
          </h2>
          <p className="text-gray-600">
            We implement standard security practices to ensure your personal
            data is safe. Your information will never be sold or shared with
            third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            4. Third-Party Tools
          </h2>
          <p className="text-gray-600">
            We may use third-party services like WhatsApp or payment gateways
            (e.g., Razorpay) to communicate or collect payments. These services
            are governed by their own privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            5. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, update, or request deletion of your
            personal information. To do so, please contact us at{" "}
            <a
              href="mailto:info@yourcompany.com"
              className="text-blue-600 underline"
            >
              info@yourcompany.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            6. Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy occasionally. The updated version
            will be posted on this page with a revised effective date.
          </p>
        </section>

        <p className="text-sm text-gray-500">Last updated: July 2025</p>
      </div>
    </main>
  );
}
