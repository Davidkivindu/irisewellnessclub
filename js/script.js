// ===== Mobile menu toggle =====
const check = document.getElementById('check');
const navLinks = document.querySelectorAll('#menu .nav-links a');

// Close menu when a link is clicked (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (check) check.checked = false;
  });
});

// Close menu when overlay is clicked
const overlay = document.querySelector('.nav-overlay');
if (overlay) {
  overlay.addEventListener('click', () => {
    check.checked = false;
  });
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && check) check.checked = false;
});

// ===== Header scroll effect =====
const header = document.querySelector('header.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Back to top button visibility
  const toTopBtn = document.getElementById('toTopBtn');
  if (toTopBtn) {
    if (window.scrollY > 400) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  }
});

// ===== Back to top =====
const toTopBtn = document.getElementById('toTopBtn');
if (toTopBtn) {
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Scroll reveal animations =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ===== Payment / receipt redirect =====
function goToReceipt(){
  sessionStorage.setItem('name', 'Rachel Korompoi');
  sessionStorage.setItem('phone', '0721 283 021');
  sessionStorage.setItem('amount', 'Enter Amount');
  window.location.href = 'payment.html';
}
