var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var popup = document.querySelector('.modal-order');
// var modal = document.querySelector('.modal');
var popupBtn = document.querySelectorAll(".modal-button");

Array.from(document.querySelectorAll(".modal-button")).forEach(function(item){
  item.addEventListener("click", function(f) {
    f.preventDefault();
    popup.classList.add('modal-order--show');
  });
});

// modal.addEventListener("click", function(f) {
//   popup.style.display = "none";
// });

popup.addEventListener("click", function(f) {
  f.stopPropagation();
})
