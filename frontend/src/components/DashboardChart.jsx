import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function DashboardChart({ invoices }) {
  const canvasRef = useRef();

  useEffect(() => {
    const counts = { Paid: 0, Unpaid: 0, Overdue: 0 };
    invoices.forEach(i => counts[i.status] = (counts[i.status] || 0) + 1);
    const chart = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: ["Paid", "Unpaid", "Overdue"],
        datasets: [{ data: [counts.Paid||0, counts.Unpaid||0, counts.Overdue||0],
          backgroundColor: ["#4CAF50", "#FFC107", "#F44336"] }]
      }
    });
    return () => chart.destroy();
  }, [invoices]);

  return <div id="chartContainer"><canvas ref={canvasRef} width="500" height="240"></canvas></div>;
}
