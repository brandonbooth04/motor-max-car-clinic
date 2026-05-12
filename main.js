// Sticky header
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger / mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealObserver.observe(el));

// Quote form submission
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  msg.textContent = '// Message sent — we\'ll be in touch within one business day.';
  msg.style.color = 'var(--red)';
  e.target.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 6000);
}
