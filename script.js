/* ==========================================================================
   INTERACTIVE JAVASCRIPT FOR PLACE SHOWCASE WEBSITE
   All core interactive functionality is configured below.
   You can leave this file as-is, or modify behaviors as noted!
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------
   * 1. MOBILE NAVIGATION MENU TOGGLE
   * Opens and closes the mobile navigation menu when tapping the hamburger icon
   * ------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      // Toggle icon between hamburger and close 'X'
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Auto-close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = navToggle.querySelector('i');
          if (icon) {
            icon.className = 'fa-solid fa-bars';
          }
        }
      });
    });
  }


  /* -------------------------------------------------------------------------
   * 2. STICKY NAVBAR SHADOW ON SCROLL
   * Adds elevation shadow to the navbar when the user scrolls down
   * ------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      navbar.style.padding = '0.8rem 0';
    } else {
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
      navbar.style.padding = '1.1rem 0';
    }
  });


  /* -------------------------------------------------------------------------
   * 3. FAQ ACCORDION INTERACTIVITY
   * Clicking a question opens its answer and collapses other questions
   * ------------------------------------------------------------------------- */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other open items (accordion behavior)
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle the clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });


  /* -------------------------------------------------------------------------
   * 4. SMOOTH SCROLL OFFSET ADJUSTMENT (FOR FIXED NAVBAR)
   * Ensures clicking anchor links doesn't hide section headers beneath the navbar
   * ------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
