import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import LoginPage from "./pages/LoginPage";
import InvoicesPage from "./pages/InvoicesPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/invoices" element={<InvoicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
