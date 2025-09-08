// 🎯 Part 2: Functions with parameters, return values, and scope

// Function with parameters and return
function calculateSquare(num) {
  return num * num; // Returns squared value
}

// Global vs Local Scope Example
let globalMessage = "I'm global!";

function showScope() {
  let localMessage = "I'm local!";
  console.log(globalMessage); // ✅ Accessible
  console.log(localMessage);  // ✅ Accessible here
}
showScope();
// console.log(localMessage); ❌ Error: localMessage is not defined

// 🎬 Part 3: Combining JS + CSS Animations

// Animate the box when button is clicked
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation ends (so it can be triggered again)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
});

// Modal logic
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Open modal on double-click of the button
animateBtn.addEventListener("dblclick", () => {
  modal.style.display = "flex";
});

// Close modal on button click
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
