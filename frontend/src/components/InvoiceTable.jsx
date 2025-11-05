import React from "react";

export default function InvoiceTable({ invoices, onEdit, onDelete }) {
  return (
    <table id="invoiceTable">
      <thead>
        <tr>
          <th>Client</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv._id} className={inv.status === "Overdue" ? "overdue" : ""}>
            <td>{inv.client}</td>
            <td>${Number(inv.amount).toFixed(2)}</td>
            <td>{inv.dueDate}</td>
            <td>{inv.status}</td>
            <td className="actions">
              <button className="action edit" onClick={() => onEdit(inv)}>Edit</button>
              <button className="action delete" onClick={() => onDelete(inv._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
