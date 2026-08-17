/**
 * Mobile Navigation Handler
 * Lakhdatar Green Energy
 */

(function () {
  'use strict';

  // Guaranteed Mobile Menu & Hamburger Fix
  function initMobileMenuFix() {
    const menuButtons = document.querySelectorAll('.menu-button, .w-nav-button');
    const navMenus = document.querySelectorAll('.w-nav-menu, .nav-menu-wrapper');

    menuButtons.forEach(function (btn) {
      // Accessibility attributes
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Toggle navigation menu');
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');

      // Ensure SVG fallback icon exists inside button
      if (!btn.querySelector('.mb-fallback-hamburger')) {
        const fallback = document.createElement('div');
        fallback.className = 'mb-fallback-hamburger';
        fallback.innerHTML = '<span></span><span></span><span></span>';
        btn.appendChild(fallback);
      }

      function toggleMenu(e) {
        // If Webflow's native nav overlay exists, let Webflow handle the click
        if (btn.closest('.w-nav') && btn.closest('.w-nav').querySelector('.w-nav-overlay')) {
          return;
        }

        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }

        const isOpen = btn.classList.contains('w--open');

        if (isOpen) {
          btn.classList.remove('w--open');
          btn.setAttribute('aria-expanded', 'false');
          btn.removeAttribute('data-wf-menu-open');
          navMenus.forEach(function (menu) {
            menu.classList.remove('w--open');
            menu.style.display = 'none';
          });
        } else {
          btn.classList.add('w--open');
          btn.setAttribute('aria-expanded', 'true');
          btn.setAttribute('data-wf-menu-open', 'true');
          navMenus.forEach(function (menu) {
            menu.classList.add('w--open');
            menu.style.display = 'block';
            menu.style.opacity = '1';
          });
        }
      }

      // Robust toggle click & keyboard event
      btn.addEventListener('click', toggleMenu);
      btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleMenu();
        }
      });
    });

    // Close menu when pressing Escape or clicking outside
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        menuButtons.forEach(function (btn) {
          if (btn.classList.contains('w--open')) {
            btn.classList.remove('w--open');
            btn.setAttribute('aria-expanded', 'false');
            navMenus.forEach(function (menu) {
              menu.classList.remove('w--open');
              menu.style.display = 'none';
            });
            btn.focus();
          }
        });
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navbar')) {
        menuButtons.forEach(function (btn) {
          if (btn.classList.contains('w--open')) {
            btn.classList.remove('w--open');
            btn.setAttribute('aria-expanded', 'false');
            navMenus.forEach(function (menu) {
              menu.classList.remove('w--open');
              menu.style.display = 'none';
            });
          }
        });
      }
    });
  }


  // Universal High-Performance Scroll Reveal Engine
  function initScrollReveal() {
    const revealSelectors = [
      '.fade-in-up',
      '.reveal-on-scroll',
      '.founder-note-animate',
      '[data-reveal]',
      '.res-hub-card',
      '.service-card',
      '.product-card',
      '.impact-single',
      '.contact-info-card',
      '.contact-form-card',
      '.location-map-card',
      '.milestones-item'
    ].join(', ');

    const revealElements = Array.from(document.querySelectorAll(revealSelectors));
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) {
        el.classList.add('visible', 'is-revealed');
      });
      return;
    }

    // Auto-assign stagger delays to sibling items in common grid wrappers
    const containers = new Set();
    revealElements.forEach(function (el) {
      if (el.parentElement) {
        const p = el.parentElement;
        if (
          p.classList.contains('w-layout-grid') ||
          p.classList.contains('impact-wrapper') ||
          p.classList.contains('res-hub-grid') ||
          p.classList.contains('contact-form-grid') ||
          p.classList.contains('milestones-wrapper') ||
          p.classList.contains('grid')
        ) {
          containers.add(p);
        }
      }
    });

    containers.forEach(function (container) {
      const children = Array.from(container.children).filter(function (c) {
        return c.matches(revealSelectors);
      });
      children.forEach(function (child, idx) {
        if (
          !child.classList.contains('delay-1') &&
          !child.classList.contains('delay-2') &&
          !child.classList.contains('delay-3') &&
          !child.classList.contains('delay-4') &&
          !child.classList.contains('delay-5')
        ) {
          const delayClass = 'delay-' + Math.min(5, (idx % 5) + 1);
          child.classList.add(delayClass);
        }
      });
    });

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    revealElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      // If element is already in the viewport on initial page load, reveal promptly
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(function () {
          el.classList.add('visible', 'is-revealed');
        }, 50);
      } else {
        observer.observe(el);
      }
    });
  }

  // Initialize on load
  function init() {
    initMobileMenuFix();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
