// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

// Front-end contact form validation (does not send messages)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }
  if (!emailPattern.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
  }
  formStatus.textContent = `Thanks, ${name}! Your form entries look complete. This demo does not send the message.`;
  contactForm.reset();
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();


// Colour palette selector: rose, lilac, and sage.
const paletteButtons = document.querySelectorAll(".palette-dot");
const palettes = {
  rose: { accent: "#ad7772", accentDark: "#815653", soft: "#f7e8e7", softDeep: "#e9cecb", border: "#ead8d6" },
  lilac: { accent: "#9582b2", accentDark: "#6e5d8b", soft: "#eee9f6", softDeep: "#d8cce9", border: "#e2d9ee" },
  sage: { accent: "#829b88", accentDark: "#58745f", soft: "#eaf1eb", softDeep: "#d0dfd2", border: "#dbe7dc" }
};
paletteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const palette = palettes[button.dataset.theme];
    Object.entries(palette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase())}`, value);
    });
    paletteButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});
