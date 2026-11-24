
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-blue-950 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h1>
        <p className="text-blue-200 text-[13px] max-w-xl mx-auto">
          Have a question about Botanico POS? Our team is ready to help you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <h2 className="text-xl font-bold text-blue-950 mb-6">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors" 
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand text-white py-3 rounded-lg text-[13px] font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-950 p-8 rounded-2xl text-white">
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p className="text-blue-200 text-[12px] mb-8">Reach out to us through any of these channels.</p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Phone Support</p>
                  <a href="tel:+254136726609" className="text-[15px] font-semibold hover:text-brand transition-colors">
                    +254 136 726 609
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:support@botanico.com" className="text-[15px] font-semibold hover:text-brand transition-colors">
                    support@botanico.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-wider mb-1">Location</p>
                  <p className="text-[15px] font-semibold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex-grow flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-blue-950 mb-1">Business Hours</h3>
              <p className="text-[12px] text-gray-500">Monday - Saturday<br />8:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
