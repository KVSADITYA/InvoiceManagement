import React, { useEffect, useMemo, useState } from "react";
import "./styles/app.css";
import Navbar from "./components/Navbar.jsx";
import Summary from "./components/Summary.jsx";
import InvoiceForm from "./components/InvoiceForm.jsx";
import InvoiceTable from "./components/InvoiceTable.jsx";
import DashboardChart from "./components/DashboardChart.jsx";
import { getInvoices, addInvoice, updateInvoice, deleteInvoice } from "./api.js";

export default function App() {
  const [invoices, setInvoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    if (saved === "dark") setDarkMode(true);
    fetchInvoices();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  async function fetchInvoices() {
    const res = await getInvoices();
    setInvoices(res.data);
  }

  async function handleSubmit(form) {
    if (selected) {
      await updateInvoice(selected._id, form);
      setSelected(null);
    } else {
      await addInvoice(form);
    }
    fetchInvoices();
  }

  async function handleDelete(id) {
    await deleteInvoice(id);
    fetchInvoices();
  }

  const stats = useMemo(() => ({
    total: invoices.length,
    totalAmount: invoices.reduce((s, i) => s + Number(i.amount || 0), 0),
    overdueAmount: invoices.filter(i => i.status === "Overdue")
                           .reduce((s, i) => s + Number(i.amount || 0), 0)
  }), [invoices]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(v => !v)} />
      <div className="container">
        <Summary stats={stats} />
        <InvoiceForm onSubmit={handleSubmit} selected={selected} />
        <InvoiceTable invoices={invoices} onEdit={setSelected} onDelete={handleDelete} />
        <DashboardChart invoices={invoices} />
      </div>
    </div>
  );
}
