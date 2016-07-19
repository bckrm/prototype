(function(){
  var stickyHeader = document.getElementById('header');
  window.onscroll = function () {
    if (window.scrollY > stickyHeader.offsetTop + stickyHeader.offsetHeight) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.className = '';
    }
  };
}());
