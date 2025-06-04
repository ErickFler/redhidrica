document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('btnOperaciones');
  const menu = document.getElementById('menuOperaciones');

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove('show');
    }
  });
});

