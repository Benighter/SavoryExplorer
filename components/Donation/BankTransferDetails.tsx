import React from 'react';
import { FiCopy } from 'react-icons/fi';

interface BankTransferDetailsProps {
  amount: string;
}

const BankTransferDetails = ({ amount }: BankTransferDetailsProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    alert('Copied to clipboard!');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
      <h3 className="text-lg font-semibold mb-3">Bank Transfer Details</h3>
      <p className="text-gray-600 mb-4">
        Please transfer <span className="font-semibold text-accent-600">${amount} USD</span> to the account below:
      </p>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Account Name</p>
            <button 
              onClick={() => copyToClipboard('Bennet Nkolele')}
              className="text-primary-600 flex items-center text-sm hover:text-primary-800 transition-colors"
            >
              <FiCopy className="mr-1" size={14} />
              Copy
            </button>
          </div>
          <p className="font-medium">Bennet Nkolele</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Bank Name</p>
            <button 
              onClick={() => copyToClipboard('Capitec')}
              className="text-primary-600 flex items-center text-sm hover:text-primary-800 transition-colors"
            >
              <FiCopy className="mr-1" size={14} />
              Copy
            </button>
          </div>
          <p className="font-medium">Capitec</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Account Number</p>
            <button 
              onClick={() => copyToClipboard('1565778284')}
              className="text-primary-600 flex items-center text-sm hover:text-primary-800 transition-colors"
            >
              <FiCopy className="mr-1" size={14} />
              Copy
            </button>
          </div>
          <p className="font-medium">156 577 8284</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Branch Code</p>
            <button 
              onClick={() => copyToClipboard('470010')}
              className="text-primary-600 flex items-center text-sm hover:text-primary-800 transition-colors"
            >
              <FiCopy className="mr-1" size={14} />
              Copy
            </button>
          </div>
          <p className="font-medium">470010</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Reference</p>
            <button 
              onClick={() => copyToClipboard(`SavoryExplorer-Donation-${amount}`)}
              className="text-primary-600 flex items-center text-sm hover:text-primary-800 transition-colors"
            >
              <FiCopy className="mr-1" size={14} />
              Copy
            </button>
          </div>
          <p className="font-medium">{`SavoryExplorer-Donation-${amount}`}</p>
        </div>
      </div>

      <div className="mt-5 text-sm text-gray-500">
        <p>
          After completing the transfer, please send a confirmation email to:{' '}
          <a 
            href="mailto:bennet.nkolele1998@gmail.com" 
            className="text-primary-600 hover:underline"
          >
            bennet.nkolele1998@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default BankTransferDetails; 