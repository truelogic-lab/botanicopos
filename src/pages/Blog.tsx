
export default function Blog() {
  const posts = [
    {
      category: "Inventory",
      title: "5 Tips to Prevent Stockouts in Your Retail Store",
      excerpt: "Learn how to optimize your inventory management and never miss a sale due to empty shelves again.",
      date: "Oct 12, 2024",
    },
    {
      category: "Technology",
      title: "Why Cloud-Based POS is the Future of Retail",
      excerpt: "Discover the benefits of moving your point of sale system to the cloud for better security and access.",
      date: "Oct 08, 2024",
    },
    {
      category: "Business",
      title: "How to Train Your Staff on a New POS System",
      excerpt: "A practical guide to onboarding your team quickly and efficiently when upgrading your software.",
      date: "Sep 28, 2024",
    },
    {
      category: "Payments",
      title: "Integrating M-Pesa with Your POS: What You Need to Know",
      excerpt: "Everything you need to understand about accepting mobile payments seamlessly in your store.",
      date: "Sep 15, 2024",
    },
    {
      category: "Growth",
      title: "Using Sales Data to Grow Your Small Business",
      excerpt: "Stop guessing. Learn how to read your POS reports and make data-driven decisions for growth.",
      date: "Sep 02, 2024",
    },
    {
      category: "Security",
      title: "Protecting Your Business from POS Fraud",
      excerpt: "Essential security practices to keep your transactions safe and protect your customer data.",
      date: "Aug 20, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-950 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Botanico Insights</h1>
        <p className="text-blue-200 text-[13px] max-w-xl mx-auto">
          Tips, guides, and industry news to help you run a smarter, more profitable retail business.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Featured Post */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 mb-16 grid md:grid-cols-2">
          <div className="bg-gray-200 h-64 md:h-auto relative">
            {/* Placeholder for Featured Image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Featured Image</div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-brand text-[11px] font-bold uppercase tracking-wider mb-3">Featured Article</span>
            <h2 className="text-2xl font-bold text-blue-950 mb-4 leading-tight">The Ultimate Guide to Choosing the Right POS for Your Business</h2>
            <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
              Not all POS systems are created equal. We break down the essential features you need to look for, from inventory tracking to payment processing, ensuring you make the right investment.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[11px] text-gray-400">Oct 15, 2024</span>
              <button className="text-[13px] font-semibold text-brand hover:text-brand-dark">Read More &rarr;</button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48 relative">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[11px]">Image</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-brand uppercase tracking-wider mb-2">{post.category}</span>
                <h3 className="text-[15px] font-bold text-blue-950 mb-2 leading-snug">{post.title}</h3>
                <p className="text-[12px] text-gray-500 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                  <button className="text-[11px] font-semibold text-brand hover:text-brand-dark">Read &rarr;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
