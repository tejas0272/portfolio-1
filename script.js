function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-theme'); // Toggle the dark-theme class
  updateIcon(); // Update the icon based on the theme
}

function updateIcon() {
  const icon = document.getElementById('icon');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'sun.png'; // Change to a sun icon when dark mode is active
  } else {
    icon.src = 'moon.png'; // Change back to the moon icon when light mode is active
  }
}