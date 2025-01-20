let cart = [];

function addToCart(productName, productPrice) {
  const cartList = document.getElementById("cart-list");
  const whatsappButton = document.getElementById("whatsapp-button");

  // Remove "Your cart is empty" if present
  if (cartList.children[0]?.innerText === "Your cart is empty.") {
    cartList.innerHTML = "";
  }

  // Add product to the cart
  cart.push({ name: productName, price: productPrice });

  // Update the cart display
  const listItem = document.createElement("li");
  listItem.innerText = `${productName} - $${productPrice}`;
  cartList.appendChild(listItem);

  // Show WhatsApp button
  whatsappButton.style.display = "block";
}

function sendToWhatsApp() {
  const cartSummary = cart.map((item) => `${item.name}: $${item.price}`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const message = `Hello, I would like to order:\n\n${cartSummary}\n\nTotal: $${total}`;

  // Encode message for WhatsApp
  const whatsappURL = `https://wa.me/message/YU4CX3MC4B3RG1?text=${encodeURIComponent(message)}`;

  // Redirect to WhatsApp
  window.open(whatsappURL, "_blank");
}
