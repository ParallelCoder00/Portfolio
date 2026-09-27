/* =========================================================
   JATIN SINGH — PORTFOLIO SCRIPT
   Handles: mobile menu, sticky nav shadow, active link
   highlighting, scroll-reveal animations, contact form
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- COLOR THEME ---------- */
  const themeToggle = document.getElementById('themeToggle');
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem('portfolio-theme');
  } catch {
    // The site still works if browser storage is unavailable.
  }

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';

    if (themeToggle) {
      const nextTheme = isLight ? 'dark' : 'light';
      const label = `Switch to ${nextTheme} theme`;
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.querySelector('.theme-toggle-icon').textContent = isLight ? '☾' : '☀';
    }
  };

  setTheme(savedTheme === 'light' ? 'light' : 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);

      try {
        localStorage.setItem('portfolio-theme', nextTheme);
      } catch {
        // The selected theme remains active until the page is reloaded.
      }
    });
  }

  /* ---------- MOBILE MENU ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- STICKY NAV SHADOW/BACKGROUND ---------- */
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    if (window.scrollY > 12) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinkEls.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };
  highlightNav();
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---------- SCROLL REVEAL ANIMATIONS ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything if IntersectionObserver isn't supported
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- CONTACT FORM (front-end only, no backend) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all fields before sending.';
        formStatus.style.color = '#E8B75E';
        return;
      }

      // NOTE: This form does not send data anywhere yet.
      // Connect it to a backend, form service (e.g. Formspree) or
      // your own API endpoint to actually receive messages.
      formStatus.textContent = `Thanks, ${name}! This form isn't connected to a backend yet, but your message was validated successfully.`;
      formStatus.style.color = '#6FE3D6';
      contactForm.reset();
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
