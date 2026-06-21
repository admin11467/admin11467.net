(function () {
  const storageKey = "theme";
  const root = document.documentElement;

  function getPreferred() {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
  }

  applyTheme(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
})();
