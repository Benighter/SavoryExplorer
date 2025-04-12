"use client";

import React, { useState, useRef } from 'react';
import { FiDollarSign, FiX, FiHeart, FiCreditCard, FiArrowRight, FiChevronLeft } from 'react-icons/fi';
import { FaPaypal } from 'react-icons/fa';
import BankTransferDetails from './BankTransferDetails';

interface DonationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Donation = ({ isOpen, onClose }: DonationProps) => {
  const [amount, setAmount] = useState<string>('');
  const [activeOption, setActiveOption] = useState<'paypal' | 'bank' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<'amount' | 'payment' | 'bank-details'>('amount');
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close modal
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Predefined donation amounts
  const predefinedAmounts = ['1', '5', '10', '25', '50', '100'];

  // Reset the form state
  const resetForm = () => {
    setAmount('');
    setActiveOption(null);
    setIsSubmitting(false);
    setCurrentStep('amount');
  };

  // Handle proceeding to payment options
  const handleProceedToPayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    setCurrentStep('payment');
  };

  // Handle going back to amount selection
  const handleBackToAmount = () => {
    setCurrentStep('amount');
  };

  // Handle PayPal donation
  const handlePaypalDonation = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    
    setIsSubmitting(true);
    
    // PayPal URL with the donation email and amount
    const paypalUrl = `https://www.paypal.com/donate?business=${encodeURIComponent('bennet.nkolele1998@gmail.com')}&amount=${encodeURIComponent(amount)}&currency_code=USD`;
    
    // Open PayPal in a new window
    window.open(paypalUrl, '_blank');
    
    // Reset state after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  // Handle bank transfer
  const handleBankTransfer = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    
    setCurrentStep('bank-details');
  };

  // Handle form submission based on active option
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeOption === 'paypal') {
      handlePaypalDonation();
    } else if (activeOption === 'bank') {
      handleBankTransfer();
    } else {
      alert('Please select a payment method');
    }
  };

  // Handle close with reset
  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOutsideClick}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-5 flex justify-between items-center">
          <div className="flex items-center">
            <FiHeart className="text-white mr-2 text-2xl" />
            <h2 className="text-white text-xl font-heading font-bold">Support Our Project</h2>
          </div>
          <button 
            onClick={handleClose} 
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Amount Step */}
          {currentStep === 'amount' && (
            <>
              <p className="text-gray-600 mb-4">
                Your donation helps us continue creating delicious recipes and improving our platform. Thank you for your support!
              </p>

              <div className="mb-5">
                <label htmlFor="amount" className="block text-gray-700 mb-2 font-medium">
                  Donation Amount (USD)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiDollarSign className="text-gray-500" />
                  </div>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-800"
                    required
                  />
                </div>
              </div>

              {/* Predefined Amounts */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {predefinedAmounts.map((presetAmount) => (
                  <button
                    key={presetAmount}
                    type="button"
                    onClick={() => setAmount(presetAmount)}
                    className={`py-2 rounded-md transition-colors ${
                      amount === presetAmount
                        ? 'bg-primary-500 text-white font-medium'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    ${presetAmount}
                  </button>
                ))}
              </div>

              {/* Proceed Button */}
              <button
                type="button"
                onClick={handleProceedToPayment}
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="flex items-center">
                  Continue
                  <FiArrowRight className="ml-2" />
                </span>
              </button>
            </>
          )}

          {/* Payment Options Step */}
          {currentStep === 'payment' && (
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                onClick={handleBackToAmount}
                className="flex items-center text-primary-600 mb-4 hover:text-primary-700 transition-colors"
              >
                <FiChevronLeft className="mr-1" />
                Back to amount
              </button>

              <p className="text-gray-700 mb-4 font-medium">
                Donating: <span className="text-accent-600 font-bold">${amount} USD</span>
              </p>

              <div className="mb-6">
                <p className="block text-gray-700 mb-2 font-medium">Select Payment Method</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveOption('paypal')}
                    className={`flex items-center justify-center p-4 rounded-lg border-2 transition-colors ${
                      activeOption === 'paypal'
                        ? 'border-primary-500 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <FaPaypal className="mr-2 text-[#003087] text-2xl" />
                    <span className="font-semibold">PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveOption('bank')}
                    className={`flex items-center justify-center p-4 rounded-lg border-2 transition-colors ${
                      activeOption === 'bank'
                        ? 'border-primary-500 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <FiCreditCard className="mr-2 text-gray-700 text-2xl" />
                    <span className="font-semibold">Bank Transfer</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !activeOption}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Proceed to Donation
                    <FiArrowRight className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          )}

          {/* Bank Details Step */}
          {currentStep === 'bank-details' && (
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('payment')}
                className="flex items-center text-primary-600 mb-4 hover:text-primary-700 transition-colors"
              >
                <FiChevronLeft className="mr-1" />
                Back to payment options
              </button>

              <BankTransferDetails amount={amount} />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full mt-4 bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
          All donations are secure and encrypted. Thank you for your support!
        </div>
      </div>
    </div>
  );
};

export default Donation; 