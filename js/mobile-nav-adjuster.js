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
      // Ensure SVG fallback icon exists inside button
      if (!btn.querySelector('.mb-fallback-hamburger')) {
        const fallback = document.createElement('div');
        fallback.className = 'mb-fallback-hamburger';
        fallback.innerHTML = '<span></span><span></span><span></span>';
        btn.appendChild(fallback);
      }

      // Robust toggle click event
      btn.addEventListener('click', function (e) {
        // If Webflow's native nav overlay exists, let Webflow handle the click
        if (btn.closest('.w-nav') && btn.closest('.w-nav').querySelector('.w-nav-overlay')) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        const isOpen = btn.classList.contains('w--open');

        if (isOpen) {
          btn.classList.remove('w--open');
          btn.removeAttribute('data-wf-menu-open');
          navMenus.forEach(function (menu) {
            menu.classList.remove('w--open');
            menu.style.display = 'none';
          });
        } else {
          btn.classList.add('w--open');
          btn.setAttribute('data-wf-menu-open', 'true');
          navMenus.forEach(function (menu) {
            menu.classList.add('w--open');
            menu.style.display = 'block';
            menu.style.opacity = '1';
          });
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.navbar')) {
        menuButtons.forEach(function (btn) {
          if (btn.classList.contains('w--open')) {
            btn.classList.remove('w--open');
            navMenus.forEach(function (menu) {
              menu.classList.remove('w--open');
              menu.style.display = 'none';
            });
          }
        });
      }
    });
  }

  // Initialize on load
  function init() {
    initMobileMenuFix();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
