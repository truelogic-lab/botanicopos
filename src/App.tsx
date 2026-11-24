import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import LogoStrip from './components/sections/LogoStrip';
import BenefitsSection from './components/sections/BenefitsSection';
import FeatureGrid from './components/sections/FeatureGrid';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Cashier Imports
import CashierLayout from './layouts/CashierLayout';
import CashierDashboard from './pages/cashier/Dashboard';

function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <BenefitsSection />
      <FeatureGrid />
    </>
  );
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-grow">{children}</main>;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><Features /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms-of-service" element={<MainLayout><TermsOfService /></MainLayout>} />
        
        {/* Auth Pages */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        {/* Cashier Routes */}
        <Route path="/cashier" element={<CashierLayout />}>
          <Route index element={<CashierDashboard />} />
          <Route path="dashboard" element={<CashierDashboard />} />
          {/* We will add /cashier/pos, /cashier/products, /cashier/sales later */}
        </Route>
      </Routes>
    </div>
  );
}
