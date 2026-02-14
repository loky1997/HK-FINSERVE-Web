
import React, { useState, useEffect } from 'react';

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState(24); // Months
  const [interest, setInterest] = useState(10.5); // Percentage
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const r = interest / 12 / 100;
    const n = tenure;
    const emiCalc = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiCalc));
  }, [amount, tenure, interest]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-600">Loan Amount</label>
            <span className="font-semibold text-blue-600">₹{amount.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="50000" max="1000000" step="10000" 
            value={amount} onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-gray-600">Tenure (Months)</label>
            <span className="font-semibold text-blue-600">{tenure} Months</span>
          </div>
          <input 
            type="range" min="12" max="60" step="6" 
            value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-1">Estimated Monthly EMI</p>
          <p className="text-4xl font-bold text-blue-900">₹{emi.toLocaleString()}</p>
          <p className="text-gray-500 text-xs mt-3">*Final interest rates may vary based on CIBIL score.</p>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-blue-200">
          Apply for this Loan
        </button>
      </div>
    </div>
  );
};

export default LoanCalculator;
