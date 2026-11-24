import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-brand text-sm font-semibold hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Privacy Policy</h1>
        <div className="prose prose-sm text-gray-600 leading-relaxed space-y-4">
          <p>Last updated: October 2026</p>
          <p>At Botanico POS, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This may include your name, email address, and payment information.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
          <h2 className="text-lg font-bold text-blue-950 mt-6">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@botanico.com.</p>
        </div>
      </div>
    </div>
  );
}
