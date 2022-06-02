(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const clickMenuItem = document.querySelectorAll('[data-mobile-item]');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  clickMenuItem.forEach(e => {
    e.addEventListener('click', toggleMenu);
  });

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
