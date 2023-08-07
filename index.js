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
      let isMobile = window.innerWidth <= 768;
      window.addEventListener('scroll', () => {
            const currentScrollPosition = window.pageYOffset;
            if (!isModalActive && !isMobile) {
                  if (currentScrollPosition < lastScrollPosition) {
                        document.body.classList.add('nav-open');
                  } else {
                        document.body.classList.remove('nav-open');
                  }
                  if (currentScrollPosition <= 100) {
                        document.body.classList.remove('nav-open');
                  }
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

function expandBanner() {
      document.addEventListener('DOMContentLoaded', function () {
            const headerBanner = document.querySelector('.banner-h');
            setTimeout(() => {
                  headerBanner.classList.add('expanded');
            }, 100);
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

function clearFormOnSubmit() {
      window.onbeforeunload = () => {
            for (const form of document.getElementsByTagName('form')) {
                  form.reset();
            }
      };
}

let isModalActive = false;

function modal() {
      const projectCards = document.querySelectorAll('.project-card');
      const modalOverlay = document.getElementById('overlay');

      projectCards.forEach((projectCard) => {
            projectCard.addEventListener('click', openModal);
      });

      modalOverlay.addEventListener('click', closeModal);

      function openModal(event) {
            if (isModalActive) return; // Prevent opening multiple modals at once
            isModalActive = true;

            const modalId = event.currentTarget.dataset.modalId;
            const modalSection = document.getElementById(modalId);

            document.body.classList.remove('nav-open');
            modalSection.classList.add('active');
            modalOverlay.classList.add('active');
      }

      function closeModal() {
            isModalActive = false;
            const modalSections = document.querySelectorAll('.modal.active');

            modalSections.forEach((modalSection) => {
                  modalSection.classList.remove('active');
            });

            modalOverlay.classList.remove('active');
      }
}

function carousel() {
      const modals = document.querySelectorAll('.modal');

      modals.forEach((modal) => {
            const images = modal.querySelectorAll('.carousel-item img');
            let currentImageIndex = 0;

            const showImage = () => {
                  images.forEach((image, index) => {
                        if (index === currentImageIndex) {
                              image.style.display = 'block';
                        } else {
                              image.style.display = 'none';
                        }
                  });
            };

            const prevButton = modal.querySelector('.prev-btn');
            const nextButton = modal.querySelector('.next-btn');

            prevButton.addEventListener('click', () => {
                  currentImageIndex =
                        (currentImageIndex - 1 + images.length) % images.length;
                  showImage();
            });

            nextButton.addEventListener('click', () => {
                  currentImageIndex = (currentImageIndex + 1) % images.length;
                  showImage();
            });

            showImage();
      });
}

carousel();
modal();
clearFormOnSubmit();
popupContent();
expandBanner();
scrollToTopBtn();
toggleNav();
removeNav();
showNavOnScroll();
