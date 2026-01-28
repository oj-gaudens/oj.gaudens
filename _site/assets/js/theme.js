// =======================
// Theme Toggle
// =======================
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

// Charger le thème sauvegardé depuis localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme; // on privilégie le CSS via data-theme
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
  // Par défaut, light
  html.dataset.theme = "light";
  toggleBtn.textContent = "🌙";
}

// Fonction pour changer le thème
function toggleTheme() {
  const current = html.dataset.theme;
  const next = current === "light" ? "dark" : "light";

  html.dataset.theme = next; // on modifie data-theme uniquement
  localStorage.setItem("theme", next);
  toggleBtn.textContent = next === "dark" ? "☀️" : "🌙";
}

// Événement du bouton
toggleBtn.addEventListener("click", toggleTheme);


// =======================
// Terminal typing effect
// =======================
const terminal = document.getElementById("terminal");
const text = "oumar@cyberlab:~$ initializing portfolio... access granted.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    terminal.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 30); // vitesse du texte
  } else {
    terminal.innerHTML += '<span class="cursor"></span>'; // laisse CSS gérer l'animation
  }
}

// Lancer l'effet
typeEffect();
