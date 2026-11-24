const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description:
      'Sign up and set up your business account to get started with your POS system.',
  },
  {
    number: '02',
    title: 'Add Your Products',
    description:
      'Register your products, set prices, organize categories, and manage your stock.',
  },
  {
    number: '03',
    title: 'Start Making Sales',
    description:
      'Select products, add them to the cart, and process customer payments quickly.',
  },
  {
    number: '04',
    title: 'Track Your Business',
    description:
      'Monitor sales, check inventory, and review reports to understand your business performance.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand text-[11px] font-bold uppercase tracking-[0.2em]">
            Simple Process
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mt-3 mb-4">
            How It Works
          </h2>

          <p className="text-gray-400 text-[13px] leading-relaxed">
            Get started with our POS system in four simple steps and manage
            your business operations with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center px-3">

              <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-7 rounded-full border-2 border-brand bg-white">
                <span className="text-brand text-lg font-extrabold">
                  {step.number}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] border-t border-dashed border-gray-300"></div>
              )}

              <h3 className="text-[15px] font-bold text-blue-950 mb-3">
                {step.title}
              </h3>

              <p className="text-[12px] text-gray-400 leading-relaxed max-w-[230px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
