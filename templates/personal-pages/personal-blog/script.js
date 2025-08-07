const toggle = document.getElementById("dark-toggle");
const body = document.body;
const icon = document.getElementById("theme-icon");

const moonSVG = `
  <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
  </svg>
`;

const sunSVG = `
  <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
`;

function updateIcon() {
  if (body.classList.contains("dark-mode")) {
    toggle.innerHTML = sunSVG;
  } else {
    toggle.innerHTML = moonSVG;
  }
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    updateIcon();
  });

  // Optional: Initialize the correct icon on page load
  updateIcon();
}
