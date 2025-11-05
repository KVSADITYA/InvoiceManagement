import React, { useEffect, useState } from "react";

export default function InvoiceForm({ onSubmit, selected }) {
  const [form, setForm] = useState({ client: "", amount: "", dueDate: "", status: "Unpaid" });

  useEffect(() => { if (selected) setForm(selected); }, [selected]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ client: "", amount: "", dueDate: "", status: "Unpaid" });
  }

  return (
    <form id="invoiceForm" onSubmit={handleSubmit}>
      <input name="client" placeholder="Client Name" value={form.client} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Overdue">Overdue</option>
      </select>
      <button type="submit">{selected? "Update":"Add Invoice"}</button>
    </form>
  );
}
