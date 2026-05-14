export const initMobileMenu = () => {
  const burger = document.querySelector('.burger-btn');
  const nav = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation a');

  if (!burger || !nav) return;

  const toggle = () => {
    const isOpen = nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burger.addEventListener('click', toggle);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-active')) toggle();
    });
  });
};