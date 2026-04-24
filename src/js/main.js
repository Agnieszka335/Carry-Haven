import "../scss/main.scss"; 
import { initCatalog } from "./catalog.js"; 

if (!location.hash) {
  location.hash = "/";
}

const routes = {
  "/": "home.html",
  "/catalog": "catalog.html",
  "/about": "about.html",
  "/contact": "contact.html",
  "/cart": "cart.html",
  "/user": "user.html",
};

function loadPage() {
  const hash = location.hash.replace("#", "");
  const path = hash || "/";
  const page = routes[path];

  if (!page) {
    document.getElementById("content").innerHTML = "<h2>404</h2>";
    return;
  }

  fetch(page)
    .then((res) => {
      if (!res.ok) throw new Error("404");
      return res.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      
      if (path === "/catalog") {
        initCatalog();
      }
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h2>404 — Not found</h2>";
    });
}

window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);