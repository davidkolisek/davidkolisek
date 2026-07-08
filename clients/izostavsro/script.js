// IZOSTAV preview — shared script

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  });

  var mobileMenuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileMenuIcon = document.getElementById('mobile-menu-icon');

  if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
    function setMobileMenuOpen(isOpen) {
      mobileMenu.classList.toggle('hidden', !isOpen);
      mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
      mobileMenuButton.setAttribute('aria-label', isOpen ? 'Zatvoriť navigáciu' : 'Otvoriť navigáciu');
      mobileMenuIcon.setAttribute('icon', isOpen ? 'lucide:x' : 'lucide:menu');
    }

    mobileMenuButton.addEventListener('click', function () {
      setMobileMenuOpen(mobileMenu.classList.contains('hidden'));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMobileMenuOpen(false);
      });
    });

    document.addEventListener('click', function (event) {
      if (
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    });
  }
});
