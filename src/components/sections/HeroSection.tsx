import deviceImg from '../../assets/device.png';

export default function HeroSection() {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      <div className="z-10">
        {/* Applied font-extrabold, tighter tracking, and adjusted leading */}
        <h1 className="text-4xl md:text-[48px] font-extrabold tracking-tight leading-[1.1] text-blue-950 mb-6">
          Grow your retail <br />
          faster with <span className="text-brand">Botanico</span> <br />
          <span className="text-brand">POS</span> software
        </h1>
        <p className="text-gray-500 text-[13px] mb-8 max-w-sm leading-relaxed">
          Botanico is the ultimate point of sale software for your retail store. Manage inventory, staff, and sales all in one place.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-brand text-white px-6 py-2.5 rounded text-[13px] font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20">
            Request Demo
          </button>
          <a href="#" className="text-[13px] font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1">
            Watch Video <span className="text-brand">▶</span>
          </a>
        </div>
      </div>
      
      <div className="relative h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-50/50 rounded-full filter blur-3xl transform scale-110"></div>
        <img 
          src={deviceImg} 
          alt="POS Device Mockup" 
          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </header>
  );
}
