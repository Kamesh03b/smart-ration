// Quotes
const quotes = [
  "Good food is the foundation of genuine happiness.",
  "A full stomach makes for a happy heart.",
  "Food is not just fuel; it’s information.",
  "Hunger knows no boundaries. Let's feed with dignity.",
  "Every grain matters – fight hunger together."
];
document.getElementById("quoteBox").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Toggle login forms
function showLogin(type) {
  const userForm = document.getElementById("userLogin");
  const adminForm = document.getElementById("adminLogin");
  const userBtn = document.getElementById("userBtn");
  const adminBtn = document.getElementById("adminBtn");

  if (type === "user") {
    userForm.classList.remove("hidden");
    adminForm.classList.add("hidden");
    userBtn.classList.replace("bg-gray-300", "bg-blue-600");
    userBtn.classList.replace("text-gray-800", "text-white");
    adminBtn.classList.replace("bg-blue-600", "bg-gray-300");
    adminBtn.classList.replace("text-white", "text-gray-800");
  } else {
    adminForm.classList.remove("hidden");
    userForm.classList.add("hidden");
    adminBtn.classList.replace("bg-gray-300", "bg-blue-600");
    adminBtn.classList.replace("text-gray-800", "text-white");
    userBtn.classList.replace("bg-blue-600", "bg-gray-300");
    userBtn.classList.replace("text-white", "text-gray-800");
  }
}

// Fake backend logic
function userLogin() {
  const userId = document.getElementById("userId").value;
  const otp = document.getElementById("userOtp").value;
  if (userId === "123456789" && otp === "123456789") {
    localStorage.setItem("loggedInUser", "Hemanathan");
    window.location.href = "user-dashboard.html";
  } else {
    alert("Invalid user credentials!");
  }
}

function adminLogin() {
  const mobile = document.getElementById("adminMobile").value;
  const otp = document.getElementById("adminOtp").value;
  if (mobile === "9876543210" && otp === "123456") {
    localStorage.setItem("loggedInAdmin", "Admin");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid admin credentials!");
  }
}
