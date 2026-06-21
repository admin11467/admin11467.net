(function () {
  const navToggle = document.getElementById("nav-toggle");
  const siteMenu = document.getElementById("site-menu");

  if (!navToggle || !siteMenu) return;

  function setOpen(open) {
    siteMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  }

  navToggle.addEventListener("click", function () {
    setOpen(!siteMenu.classList.contains("is-open"));
  });

  siteMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setOpen(false);
    }
  });
})();
