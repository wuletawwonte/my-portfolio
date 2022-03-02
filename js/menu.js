const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.nav-menu-item');
const mainBody = document.querySelector('body');

toggleMenuButton.addEventListener('click', () => {
  toggleMenuButton.classList.toggle('active');
  menu.classList.toggle('active');
  mainBody.classList.toggle('hide-overflow');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenuButton.classList.remove('active');
    menu.classList.remove('active');
  });
});