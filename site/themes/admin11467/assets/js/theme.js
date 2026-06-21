(function () {
  const storageKey = "theme";
  const root = document.documentElement;
  let toggle = null;

  function getPreferred() {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return "light";
  }

  function updateToggle(theme) {
    if (!toggle) return;

    const icon = toggle.querySelector(".theme-toggle__icon");
    const label = toggle.querySelector(".theme-toggle__label");
    const isDark = theme === "dark";

    if (icon) icon.textContent = isDark ? "☀" : "☾";
    if (label) label.textContent = isDark ? "ライト" : "ダーク";
    toggle.setAttribute(
      "aria-label",
      isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"
    );
    toggle.setAttribute("title", isDark ? "ライトモードに切り替え" : "ダークモードに切り替え");
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
    updateToggle(theme);
  }

  applyTheme(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    updateToggle(root.getAttribute("data-theme") || "light");

    toggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  });
})();
