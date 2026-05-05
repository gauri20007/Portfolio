// Custom JavaScript: js/script.js

window.addEventListener('DOMContentLoaded', event => {

      const navbarCollapsible = document.body.querySelector('#mainNav');

      // Function to check if the navbar should shrink
      const navbarShrink = () => {
            if (!navbarCollapsible) {
                  return;
            }
            if (window.scrollY === 0) {
                  navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                  navbarCollapsible.classList.add('navbar-shrink')
            }

      };

      // Shrink the navbar when the page is loaded
      navbarShrink();

      // Shrink the navbar when the user scrolls
      document.addEventListener('scroll', navbarShrink);

      // Bootstrap scrollspy to highlight active link
      const mainNav = document.body.querySelector('#mainNav');
      if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                  target: '#mainNav',
                  rootMargin: '0px 0px -40%',
            });
      };

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                  if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                  }
            });
      });

});