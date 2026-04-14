import "../scss/main.scss"; //ważne

if (!location.hash) {
  location.hash = "/";
}

const routes = {
  "/": "/home.html",
  "/catalog": "/catalog.html",
  "/about": "/about.html",
  "/contact": "/contact.html",
  "/cart": "/cart.html",
  "/user": "/user.html",
};

function loadPage() {
  console.log("HASH:", location.hash);
  console.log("PATH:", location.hash.replace("#", ""));

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
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h2>404 — Not found</h2>";
    });
}

window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);

console.log(page);
