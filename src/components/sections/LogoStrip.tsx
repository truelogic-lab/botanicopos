export default function LogoStrip() {
  const features = [
    "Sales",
    "Inventory",
    "Products",
    "Customers",
    "Analytics",
    "Transactions",
    "Suppliers"
  ];

  return (
    <div className="border-t border-b border-gray-100 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <span 
            key={idx} 
            className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.15em] hover:text-brand transition-colors cursor-default"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
