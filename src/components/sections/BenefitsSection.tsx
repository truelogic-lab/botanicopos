import { IconCheck, IconCart, IconShield, IconChart } from '../ui/Icons';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <IconCheck />,
      title: 'Save Time',
      desc: 'Manage your daily operations efficiently.',
    },
    {
      icon: <IconCart />,
      title: 'Increase Sales',
      desc: 'Boost your revenue with smart tools.',
    },
    {
      icon: <IconShield />,
      title: 'Reduce Operational Cost',
      desc: 'Cut down on unnecessary expenses.',
    },
    {
      icon: <IconChart />,
      title: 'Analyze your data',
      desc: 'Get insights to grow your business.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-3">
          Benefits of Point of Sale
        </h2>
        <p className="text-gray-400 text-[13px]">
          Explore the features that make Riyaqas the best choice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div className="text-brand mb-5">
              {benefit.icon}
            </div>

            <h3 className="text-[15px] font-bold text-blue-950 mb-3">
              {benefit.title}
            </h3>

            <p className="text-[12px] text-gray-400 leading-relaxed max-w-[220px]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
