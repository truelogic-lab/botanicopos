import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">B</div>
          <span className="text-blue-950 font-bold text-sm">Botanico</span>
        </div>
        <p className="text-[11px] text-gray-400">© 2024 Botanico. All rights reserved.</p>
        <div className="flex gap-6 text-[11px] text-gray-500">
          <Link to="/privacy-policy" className="hover:text-blue-950 transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-blue-950 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
