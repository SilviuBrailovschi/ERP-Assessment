import React from 'react';
import { Invoice } from '../api/invoiceApi';
interface InvoiceModalProps {
  isOpen: boolean;
  invoice: Invoice;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ isOpen, invoice, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      className="fixed inset-0 z-50 flex items-center justify-center  bg-gray-50/75"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Invoice Details</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4" style={{color: '#99a1af'}}>
            <p><strong>ID:</strong> {invoice.id}</p>
            <p><strong>Vendor:</strong> {invoice.vendor_name}</p>
            <p><strong>Amount:</strong> ${invoice.amount.toFixed(2)}</p>
            <p><strong>Due Date:</strong> {new Date(invoice.due_date).toLocaleString()}</p>
            <p><strong>Description:</strong> {invoice.description}</p>
            <p><strong>Paid:</strong> {invoice.paid ? 'Yes' : 'No'}</p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onClose}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
