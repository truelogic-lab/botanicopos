import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HeroSection from './components/sections/HeroSection';
import LogoStrip from './components/sections/LogoStrip';
import BenefitsSection from './components/sections/BenefitsSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FeatureGrid from './components/sections/FeatureGrid';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <BenefitsSection />
      <HowItWorksSection />
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
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><Features /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms-of-service" element={<MainLayout><TermsOfService /></MainLayout>} />

        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      </Routes>
    </div>
  );
}
