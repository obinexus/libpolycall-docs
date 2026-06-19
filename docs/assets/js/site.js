(function () {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("is-open", !expanded);
    });
  }

  const searchInput = document.querySelector("[data-doc-search]");
  const docItems = Array.from(document.querySelectorAll("[data-doc-item]"));

  if (searchInput && docItems.length > 0) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();

      docItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        item.classList.toggle("is-hidden", query.length > 0 && !text.includes(query));
      });
    });
  }
})();
