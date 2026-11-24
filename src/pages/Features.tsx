import { IconCart, IconBox, IconChart, IconUsers, IconBarcode, IconMonitor, IconCard, IconCheck } from '../components/ui/Icons';

export default function Features() {
  const allFeatures = [
    { icon: <IconCart />, title: "Inventory Management", desc: "Track stock levels in real-time and get alerts when items are running low." },
    { icon: <IconBox />, title: "Stock Transfers", desc: "Seamlessly move stock between different store locations." },
    { icon: <IconChart />, title: "Advanced Reporting", desc: "Detailed analytics to help you understand your best sellers and peak hours." },
    { icon: <IconUsers />, title: "Customer Management", desc: "Keep track of customer details, purchase history, and loyalty programs." },
    { icon: <IconBarcode />, title: "Barcode Scanning", desc: "Speed up checkout with built-in barcode generation and scanning." },
    { icon: <IconMonitor />, title: "Fast Checkout", desc: "A modern, lightning-fast POS interface that keeps queues moving." },
    { icon: <IconCard />, title: "Flexible Payments", desc: "Accept cash, cards, M-Pesa, and other payment methods securely." },
    { icon: <IconCheck />, title: "Expense Tracking", desc: "Log daily business expenses and generate financial summaries." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-blue-950 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to run your store</h1>
        <p className="text-blue-200 text-[13px] max-w-xl mx-auto">
          Discover the powerful tools Botanico POS offers to streamline your operations, increase sales, and keep your customers happy.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand mb-6">
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-bold text-blue-950 mb-2">{feature.title}</h3>
              <p className="text-[12px] text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gray-50 py-16 px-6 text-center border-t border-gray-100">
        <h2 className="text-xl font-bold text-blue-950 mb-2">Need help getting started?</h2>
        <p className="text-[13px] text-gray-500 mb-6">Our support team is ready to assist you.</p>
        <a href="tel:+254136726609" className="inline-block bg-brand text-white px-8 py-3 rounded-full text-[13px] font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20">
          Call Support: +254 136 726 609
        </a>
      </div>
    </div>
  );
}
