function order(item) {
  const phoneNumber = "16394709989"; // put your real number
  const orderType = document.getElementById("orderType").value;

  let message = `Hi! I want to order: ${item} (${orderType})`;

  if (orderType === "Delivery") {
    message += " - My address is: ";
  } else {
    message += " - I will pick up.";
  }

  window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
}
