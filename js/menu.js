const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.nav-menu-item');

toggleMenuButton.addEventListener('click', () => {
  toggleMenuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenuButton.classList.remove('active');
    menu.classList.remove('active');
  });
});
