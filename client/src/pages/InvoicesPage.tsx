import { useQuery } from 'react-query';
import { fetchInvoices, InvoicesResponse } from '../api/invoiceApi';
import { useState } from 'react'
import ComponentCard from '../components/common/ComponentCard';
import Pagination from '../components/common/Pagination';
import InvoiceModal from './InvoiceModal';
import { Invoice } from '../api/invoiceApi';

export default function InvoicesPage() {
  const [page, setPage] = useState(1);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const limit = 10;

  const { data, isLoading, error } = useQuery<InvoicesResponse, Error>(
    ['invoices', page],
    () => fetchInvoices(page, limit),
    { keepPreviousData: true }
  );

  if (isLoading) return <div>Loading…</div>;
  if (error)   return <div>Error: {error.message}</div>;

  const openInvoiceModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const closeModal = () => {
    setSelectedInvoice(null);
  };

  return (
    <ComponentCard title="Invoices">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Vendor</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Due Date</th>
          </tr>
          </thead>
          <tbody>
          {data!.invoices.map(inv => (
            <tr
              key={inv.id}
              onClick={() => openInvoiceModal(inv)}
              className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <td className="px-6 py-4">{inv.vendor_name}</td>
              <td className="px-6 py-4">{inv.description}</td>
              <td className="px-6 py-4">${inv.amount.toFixed(2)}</td>
              <td className="px-6 py-4">{inv.paid ? "Payed" : "Not payed"}</td>
              <td className="px-6 py-4">
                {new Date(inv.due_date).toLocaleDateString()}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {/* Invoice Modal */}
      {selectedInvoice && (
        <InvoiceModal
          isOpen={selectedInvoice !== null}
          invoice={selectedInvoice}
          onClose={closeModal}
        />
      )}
      <div className="text-center">
        <Pagination page={data!.pagination.page} totalPages={data!.pagination.totalPages} setPage={setPage} />
      </div>
    </ComponentCard>
  );
}
