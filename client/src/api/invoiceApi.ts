import store from '../store';
export interface Invoice {
  id: string;
  vendor_name: string;
  amount: number;
  due_date: string;
  description: string;
  paid: boolean;
  userId: string;
}

export interface InvoicesResponse {
  invoices: Invoice[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const API_BASE = 'http://localhost:5500';
export async function fetchInvoices(page = 1, limit = 10): Promise<InvoicesResponse> {
  const token = store.getState().auth.token;
  const res = await fetch(`${API_BASE}/invoices?page=${page}&limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) throw new Error('Failed to fetch invoices');
  const payload = await res.json();
  return payload;
}
export async function fetchInvoiceById(id: string): Promise<Invoice> {
  const token = store.getState().auth.token;
  const res = await fetch(`${API_BASE}/invoices/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) throw new Error('Failed to fetch invoice');
  return res.json();
}
