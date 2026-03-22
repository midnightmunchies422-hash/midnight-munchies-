const hour = new Date().getHours();
const status = document.getElementById("status");

if (hour >= 18 || hour <= 3) {
  status.innerText = "🔥 OPEN NOW";
} else {
  status.innerText = "❌ CLOSED";
}

function order(item) {
  const phoneNumber = "13060000000"; // change this!
  const message = `Hi! I want to order: ${item}`;
  window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
}
