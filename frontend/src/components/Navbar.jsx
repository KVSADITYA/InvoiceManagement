import React from "react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>📑 Smart Invoice Dashboard (React)</h1>
      <button id="toggleDark" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
