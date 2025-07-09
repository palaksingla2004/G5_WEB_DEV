const container = document.getElementById("product-container");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    const products = data.products;

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="card-body">
          <h3>${product.title}</h3>
          <p>${product.description.slice(0, 60)}...</p>
          <p class="price">$${product.price}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = `<p>Failed to load products.</p>`;
    console.error("Fetch error:", err);
  });
