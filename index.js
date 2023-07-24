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

function scrollToTopBtn() {
      window.addEventListener('scroll', scrollFunction);

      function scrollFunction() {
            const scrollButton = document.querySelector('.scroll-up-button');
            if (
                  document.body.scrollTop > 50 ||
                  document.documentElement.scrollTop > 50
            ) {
                  document.body.classList.add('scroll-active');
            } else {
                  document.body.classList.remove('scroll-active');
            }
      }

      function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
      }

      const scrollUpButton = document.querySelector('.scroll-up-button');
      scrollUpButton.addEventListener('click', scrollToTop);
}

function randomDots() {
      const dotContainers = document.querySelectorAll('.dot-container');
      const numberOfDots = 50;

      dotContainers.forEach((container) => {
            for (let i = 0; i < numberOfDots; i++) {
                  const dot = document.createElement('div');
                  dot.classList.add('dot');
                  container.appendChild(dot);
            }

            const dots = document.querySelectorAll('.dot');

            dots.forEach((dot) => {
                  const x = Math.floor(Math.random() * window.innerWidth);
                  const y = Math.floor(Math.random() * window.innerHeight);
                  const sizeDifference = (Math.random() * 0.2 + 0.9).toFixed(2);
                  const size = sizeDifference + 'em';
                  dot.style.top = y + 'px';
                  dot.style.left = x + 'px';
                  dot.style.width = size;
                  dot.style.height = size;
            });
      });
}

function expandBanner() {
      document.addEventListener('DOMContentLoaded', function () {
            const headerBanner = document.querySelector('.banner-h');
            headerBanner.style.transform = 'scaleY(1)';
      });
}

function popupContent() {
      document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('.popup');

            function revealSections() {
                  const windowHeight = window.innerHeight;

                  sections.forEach((section) => {
                        const sectionTop = section.getBoundingClientRect().top;

                        if (sectionTop < windowHeight * 0.8) {
                              section.classList.add('reveal');
                        } else {
                              section.classList.remove('reveal');
                        }
                  });
            }

            window.addEventListener('scroll', revealSections);
      });
}

function submitForm() {
      const contactForm = document.getElementById('contactForm');
      const successMessage = document.getElementById('successMessage');

      const formData = new FormData(contactForm);

      fetch('https://formsubmit.co/b0fa2165044c00d4e71bc2969d318ab7', {
            method: 'POST',
            body: formData,
      })
            .then((response) => response.json())
            .then((data) => {
                  console.log(data);

                  contactForm.reset();

                  successMessage.style.display = 'block';

                  setTimeout(function () {
                        successMessage.style.display = 'none';
                  }, 3000);
            })
            .catch((error) => {
                  console.error('Error submitting the form:', error);
            });
}

popupContent();
expandBanner();
scrollToTopBtn();
randomDots();
toggleNav();
removeNav();
showNavOnScroll();
