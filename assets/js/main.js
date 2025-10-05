// BBDNIIT clone - basic interactivity
(function () {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  const dots = document.querySelectorAll('[data-hero-dot]');
  const slides = document.querySelectorAll('[data-hero-slide]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });

  let current = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.hidden = i !== index;
    });
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
    current = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  if (slides.length) {
    showSlide(0);
    setInterval(() => showSlide((current + 1) % slides.length), 6000);
  }
})();