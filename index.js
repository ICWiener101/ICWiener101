function toggleNav() {
      const navToggle = document.querySelector('.burger-btn');

      navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
      });
}

function removeNav() {
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                  document.body.classList.remove('nav-open');
            });
      });
}

function showNavOnScroll() {
      let lastScrollPosition = window.pageYOffset;
      window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition < lastScrollPosition) {
                  document.body.classList.add('nav-open');
            } else {
                  document.body.classList.remove('nav-open');
            }
            if (currentScrollPosition <= 100) {
                  document.body.classList.remove('nav-open');
            }

            lastScrollPosition = currentScrollPosition;
      });
}

toggleNav();
removeNav();
showNavOnScroll();
