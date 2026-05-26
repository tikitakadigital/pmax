(function () {
  var burger = document.querySelector('.nav-burger');
  var drawer = document.getElementById('nav-drawer');
  var close  = document.querySelector('.nav-close');

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (close && drawer) {
    close.addEventListener('click', function () {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
}());
