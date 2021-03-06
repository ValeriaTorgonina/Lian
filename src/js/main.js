var msnry = new Masonry(".album__content", {
  gutter: 30
});

var msnry = new Masonry(".blog-card-wrapper", {
  gutter: 30
});

(function toggleMenu() {
  const menu = $('.main-nav');
  const burgerBtn = $('.list-btn');
  burgerBtn.click(() => {
    menu.toggleClass('active-main-nav');
  })
})();

(function(window, document) {
  "use strict";
  var file = "img/sprite.svg", // путь к файлу спрайта на сервере
    revision = 7; // версия спрайта
  if (
    !document.createElementNS ||
    !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
  )
    return true;
  var isLocalStorage = "localStorage" in window && localStorage !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML("beforeEnd", data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener("DOMContentLoaded", insertIT);
    };
  if (isLocalStorage && localStorage.getItem("inlineSVGrev") == revision) {
    data = localStorage.getItem("inlineSVGdata");
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open("GET", file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem("inlineSVGdata", data);
          localStorage.setItem("inlineSVGrev", revision);
        }
      }
    };
    request.send();
  } catch (e) {}
})(window, document);
