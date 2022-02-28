const toggleMenuButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

toggleMenuButton.addEventListener("click", () => {
  toggleMenuButton.classList.toggle("active");
  menu.classList.toggle("active");
});
