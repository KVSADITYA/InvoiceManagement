import React from "react";

export default function Summary({ stats }) {
  return (
    <div className="summary">
      <div className="card">🧾 Total: {stats.total}</div>
      <div className="card">💰 Total Amount: ${stats.totalAmount.toFixed(2)}</div>
      <div className="card">⚠️ Overdue: ${stats.overdueAmount.toFixed(2)}</div>
    </div>
  );
}
