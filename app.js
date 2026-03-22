function order(item) {
  const phoneNumber = "16393995905"; // your real number
  const orderType = document.getElementById("orderType")?.value || "";
<button onclick="window.location.href='sms:+16394709989?body=Hi%2C%20I%20want%20to%20order%20cookies'" class="order-button">
  Order Now
</button>
  let message = `Hi! I want to order: ${item}`;

  if (orderType) {
    message += ` (${orderType})`;
  }

  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  window.location.href = smsLink;
}
