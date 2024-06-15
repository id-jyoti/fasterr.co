(function () {
  const b = document.getElementById("site-navigation");
  if (!b) return;
  const a = b.getElementsByTagName("button")[0];
  if ("undefined" == typeof a) return;
  const c = b.getElementsByTagName("ul")[0];
  if ("undefined" == typeof c) {
    a.style.display = "none";
    return;
  }
  c.classList.contains("nav-menu") || c.classList.add("nav-menu"), a.addEventListener("click", function () {
    b.classList.toggle("toggled"), a.getAttribute("aria-expanded") === "true" ? a.setAttribute("aria-expanded", "false") : a.setAttribute("aria-expanded", "true");
  }), document.addEventListener("click", function (c) {
    const d = b.contains(c.target);
    d || (b.classList.remove("toggled"), a.setAttribute("aria-expanded", "false"));
  });
  const e = c.getElementsByTagName("a"),
    f = c.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
  for (const a of e) a.addEventListener("focus", d, !0), a.addEventListener("blur", d, !0);
  for (const a of f) a.addEventListener("touchstart", d, !1);

  function d() {
    if (event.type === "focus" || event.type === "blur") {
      let a = this;
      while (!a.classList.contains("nav-menu")) "li" === a.tagName.toLowerCase() && a.classList.toggle("focus"), a = a.parentNode;
    }
    if (event.type === "touchstart") {
      const a = this.parentNode;
      event.preventDefault();
      for (const b of a.parentNode.children) a !== b && b.classList.remove("focus");
      a.classList.toggle("focus");
    }
  }
})();