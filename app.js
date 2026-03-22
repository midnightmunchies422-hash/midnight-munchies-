function order(item) {
  const phoneNumber = "16394709989"; // your real number
  const orderType = document.getElementById("orderType")?.value || "";

  let message = `Hi! I want to order: ${item}`;

  if (orderType) {
    message += ` (${orderType})`;
  }

  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  window.location.href = smsLink;
}
