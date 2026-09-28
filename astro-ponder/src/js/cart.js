const cart = [
  { id: 1, name: "Item 1", price: "10" },
  { id: 2, name: "Item 2", price: "15" },
  { id: 3, name: "Item 3", price: "12" },
];

function cartItemTemplate(item) {
  return `<li>${item.name} - $${item.price}</li>`;
}

function renderCart(items) {
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = `
    <ul>${items.map(cartItemTemplate).join("")}</ul>
    <p><strong>Total: $${total}</strong></p>
  `;
}

renderCart(cart);
