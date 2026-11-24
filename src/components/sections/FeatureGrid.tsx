import {
  IconCart,
  IconBox,
  IconChart,
  IconUsers,
  IconBarcode,
  IconMonitor,
  IconCard,
  IconCheck,
} from '../ui/Icons';

export default function FeatureGrid() {
  const features = [
    { icon: <IconCart />, title: 'Inventory', desc: 'Manage your stock levels.' },
    { icon: <IconBox />, title: 'Stock Transfer', desc: 'Move stock between stores.' },
    { icon: <IconChart />, title: 'Reports', desc: 'View detailed sales analytics.' },
    { icon: <IconUsers />, title: 'Suppliers', desc: 'Track your vendors easily.' },
    { icon: <IconBarcode />, title: 'Barcodes', desc: 'Generate and scan barcodes.' },
    { icon: <IconMonitor />, title: 'Point of Sale', desc: 'Fast and reliable checkout.' },
    { icon: <IconCard />, title: 'Payments', desc: 'Accept multiple payment types.' },
    { icon: <IconCheck />, title: 'Expenses', desc: 'Log and track business costs.' },
  ];

  return (
    <section className="bg-blue-950 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-16">
          Perfect POS software for most retail stores
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-brand-light mb-5">
                {feature.icon}
              </div>

              <h3 className="text-sm font-bold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
