"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [label, setLabel] = useState("Dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setLabel(current === "dark" ? "Light" : "Dark");
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ct-theme", next);
    } catch {}
    setLabel(next === "dark" ? "Light" : "Dark");
  }

  return (
    <button
      className="theme-toggle"
      id="themeToggle"
      type="button"
      aria-label="Toggle colour theme"
      onClick={toggle}
    >
      <span id="themeLabel">{label}</span>
    </button>
  );
}
