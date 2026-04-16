export function initCatalog() {
  const sortSelect = document.querySelector("#sort");
  if (!sortSelect) return; 

  
  const allCards = Array.from(document.querySelectorAll(".product-card"))
    .filter(card => card.dataset.price); 

  
  const mainContainer = document.querySelector(".products-cards");

  function sortProducts(type) {
    const sorted = [...allCards].sort((a, b) => {
      const priceA = Number(a.dataset.price);
      const priceB = Number(b.dataset.price);
      
      
      const nameA = a.dataset.name || ""; 
      const nameB = b.dataset.name || "";

      const ratingA = Number(a.dataset.rating);
      const ratingB = Number(b.dataset.rating);

      switch (type) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "rating":
          return ratingB - ratingA;
        case "name":
          return nameA.localeCompare(nameB);
        default:
          return 0;
      }
    });

    mainContainer.innerHTML = "";
    sorted.forEach(card => mainContainer.appendChild(card));
  }

  sortSelect.addEventListener("change", (e) => {
    console.log("SORT:", e.target.value);
    sortProducts(e.target.value);
  });
}