import { IconCheck } from '../components/ui/Icons';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "2,500",
      period: "/month",
      desc: "Perfect for small retail shops getting started.",
      features: ["1 Store Location", "1 POS Terminal", "Basic Inventory", "Email Support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "5,000",
      period: "/month",
      desc: "Best for growing businesses with multiple terminals.",
      features: ["3 Store Locations", "5 POS Terminals", "Advanced Inventory", "Priority Support", "Detailed Reports"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "10,000",
      period: "",
      desc: "Tailored solutions for large scale operations.",
      features: ["Unlimited Locations", "Unlimited Terminals", "Custom Integrations", "Dedicated Manager", "API Access"],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-950 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h1>
        <p className="text-blue-200 text-[13px] max-w-xl mx-auto">
          Choose the plan that fits your business. No hidden fees, cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl p-8 border ${
                plan.highlighted 
                  ? 'border-brand shadow-[0_10px_40px_rgba(249,115,22,0.15)] relative transform md:-translate-y-4' 
                  : 'border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-blue-950 mb-2">{plan.name}</h3>
              <p className="text-[12px] text-gray-400 mb-6 h-8">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-3xl font-bold text-blue-950">
                  {plan.price === "Custom" ? "" : "KES "}
                  {plan.price}
                </span>
                <span className="text-[13px] text-gray-400 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-[13px] text-gray-600">
                    <div className="text-brand w-4 h-4 flex-shrink-0">
                      <IconCheck />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg text-[13px] font-semibold transition-colors ${
                  plan.highlighted 
                    ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20' 
                    : 'bg-gray-50 text-blue-950 hover:bg-gray-100'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white py-16 px-6 text-center border-t border-gray-100">
        <h2 className="text-xl font-bold text-blue-950 mb-2">Have questions about our plans?</h2>
        <p className="text-[13px] text-gray-500 mb-6">Speak directly with our team to find the right fit.</p>
        <a href="tel:+254136726609" className="inline-block bg-blue-950 text-white px-8 py-3 rounded-full text-[13px] font-semibold hover:bg-blue-900 transition-colors">
          Call Sales: +254 136 726 609
        </a>
      </div>
    </div>
  );
}
