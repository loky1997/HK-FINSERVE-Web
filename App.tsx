
import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  PhoneCall, 
  Mail, 
  Instagram, 
  MapPin, 
  Briefcase,
  Home as HomeIcon,
  CreditCard,
  Building2
} from 'lucide-react';
import Navbar from './components/Navbar';
import LoanCalculator from './components/LoanCalculator';
import ChatBot from './components/ChatBot';
import { BUSINESS_INFO, FEATURES, DOCUMENTS, ELIGIBILITY, SPECIAL_CASES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold animate-fade-in">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Soft Approval Confirmation - Immediately
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Your Trusted <span className="text-blue-600 italic">Loan Partner</span> for Life.
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Get instant personal loans from ₹50,000 to ₹10,00,000 with minimal documentation and 1-day TAT. Pan India presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.phone}`} 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
                >
                  Apply via WhatsApp
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:9966992935"
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall size={20} />
                  Call Representative
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                {FEATURES.slice(0, 4).map((f, i) => (
                  <div key={i} className="space-y-2">
                    <div className="bg-white p-2 w-fit rounded-lg shadow-sm">{f.icon}</div>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{f.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:ml-auto w-full max-w-md">
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Loan Offerings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Flexible financial solutions tailored to your unique requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Loan</h3>
              <p className="text-gray-600 mb-6">Quick cash for medical emergencies, travel, or home renovation. Instant soft approval.</p>
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Up to ₹10 Lakhs</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> Minimum Sal. ₹15K</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <HomeIcon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Loan</h3>
              <p className="text-gray-600 mb-6">Realize your dream of owning a home with our low-interest home financing options.</p>
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500" /> Low ROI</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500" /> Easy Tenure options</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Loan</h3>
              <p className="text-gray-600 mb-6">Fuel your business growth. We accept Sole Proprietorship & Partnership cases.</p>
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Active GST Eligible</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Quick Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Documents Section */}
      <section id="eligibility" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Eligibility & Requirements</h2>
              <div className="space-y-4">
                {ELIGIBILITY.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-800">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="font-semibold text-lg">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-slate-800 rounded-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                  <CheckCircle2 size={20} />
                  Special Considerations
                </h4>
                <ul className="space-y-3">
                  {SPECIAL_CASES.map((sc, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {sc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="documents">
              <h2 className="text-3xl font-bold mb-8">Documents Checklist</h2>
              <p className="text-slate-400 mb-8">Soft copies are accepted for faster processing. Ensure clarity of documents for 1-day TAT.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {DOCUMENTS.map((doc, idx) => (
                  <div key={idx} className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-center gap-4 hover:bg-slate-700 transition-colors">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                      <Briefcase size={20} />
                    </div>
                    <span className="font-medium">{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-8 border-2 border-dashed border-slate-700 rounded-3xl text-center">
                <p className="text-slate-400 mb-4 italic">Ready to submit your documents?</p>
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg underline underline-offset-4"
                >
                  <Mail size={24} />
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <span className="text-white font-bold text-xl">HK</span>
                </div>
                <span className="text-xl font-bold text-gray-900">{BUSINESS_INFO.name}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dedicated to providing fast, transparent, and reliable financial support to individuals and businesses across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                <li><a href="#eligibility" className="hover:text-blue-600">Check Eligibility</a></li>
                <li><a href="#documents" className="hover:text-blue-600">Required Documents</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                  <span>{BUSINESS_INFO.location}, Hyderabad</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall size={18} className="text-blue-600 flex-shrink-0" />
                  <span>+91 {BUSINESS_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-600 flex-shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold mb-2">Follow Us</h4>
              <p className="text-xs text-blue-600 font-medium mb-4">Stay updated with latest offers</p>
              <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" className="flex items-center gap-3 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                <Instagram size={24} className="text-pink-600" />
                @{BUSINESS_INFO.instagram}
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <ChatBot />
      <div className="fixed bottom-6 left-6 z-[90] hidden sm:block">
        <a 
          href={`https://wa.me/${BUSINESS_INFO.phone}?text=Hi HK FinServ, I'm interested in a personal loan.`} 
          target="_blank" rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center gap-2"
        >
          {/* Replaced non-existent WhatsappIcon with MessageCircle */}
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold pr-2">WhatsApp Apply</span>
        </a>
      </div>
    </div>
  );
};

export default App;
