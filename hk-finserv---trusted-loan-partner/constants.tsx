
import React from 'react';
import { 
  Zap, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Phone, 
  Mail, 
  Instagram,
  CheckCircle2,
  Users,
  Wallet
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: "HK FinServ",
  tagline: "Trusted Loan Partner",
  phone: "9966992935",
  email: "hkfinserv85@gmail.com",
  instagram: "hkfinserv_official",
  location: "SR Nagar",
  tat: "1 Working Day (With Clear Proofs)",
  loanRange: "₹50,000 to ₹10,00,000"
};

export const FEATURES = [
  { 
    title: "Instant Soft Approval", 
    description: "Get confirmation on your eligibility immediately.", 
    icon: <Zap className="w-6 h-6 text-yellow-500" /> 
  },
  { 
    title: "Quick TAT", 
    description: "1 Working Day processing with clear documents.", 
    icon: <Clock className="w-6 h-6 text-blue-500" /> 
  },
  { 
    title: "Pan India Presence", 
    description: "Available for applicants across all major cities.", 
    icon: <MapPin className="w-6 h-6 text-red-500" /> 
  },
  { 
    title: "Transparent Process", 
    description: "No hidden charges, complete end-to-end support.", 
    icon: <ShieldCheck className="w-6 h-6 text-green-500" /> 
  }
];

export const DOCUMENTS = [
  "PAN Card",
  "Aadhaar Card",
  "Valid Address Proof",
  "3 Months Latest Payslips",
  "6 Months Bank Statement",
  "Office ID Card"
];

export const ELIGIBILITY = [
  { label: "Minimum Age", value: "21 Years (CIBIL Positive)" },
  { label: "Loan Amount", value: "₹50,000 - ₹10,00,000" },
  { label: "Salary (Prime Cities)", value: "₹20,000+" },
  { label: "Salary (Emerging Cities)", value: "₹15,000+" },
  { label: "Documents", value: "Soft copies accepted via WhatsApp/Email" }
];

export const SPECIAL_CASES = [
  "PF Deduction Cases Accepted",
  "Hostel Accommodation Cases Considered",
  "Sole Proprietorship & Partnership with Active GST Eligible",
  "MCA Vintage: 1 Year required if without PF"
];
