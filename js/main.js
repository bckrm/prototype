var contactButton = document.querySelector('nav [href="#contact-button"]');
var contactBar = document.getElementById('contact-bar');

contactButton.addEventListener('click', a, false);

function a() {
  if(contactBar.classList.contains('cb-hide')){
    contactBar.classList.remove('cb-hide');
    contactBar.classList.add('cb-show');
  } else {
    contactBar.classList.remove('cb-show');
    contactBar.classList.add('cb-hide');
  }
};
