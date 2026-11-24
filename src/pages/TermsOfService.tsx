import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-brand text-sm font-semibold hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Terms of Service</h1>
        <div className="prose prose-sm text-gray-600 leading-relaxed space-y-4">
          <p>Last updated: October 2026</p>
          <p>Welcome to Botanico POS. By accessing or using our services, you agree to be bound by these Terms of Service.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">1. Acceptance of Terms</h2>
          <p>By creating an account or using our services, you agree to these Terms. If you do not agree, please do not use our services.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">3. Payment Terms</h2>
          <p>All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with prior notice.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">4. Limitation of Liability</h2>
          <p>Botanico POS shall not be liable for any indirect, incidental, or consequential damages arising from your use of the services.</p>
        </div>
      </div>
    </div>
  );
}
