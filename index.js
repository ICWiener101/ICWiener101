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

// Function to show navigation menu on scroll up and hide on scroll down
function showNavOnScroll() {
      // Store the previous scroll position and check if the screen width is mobile-sized
      let lastScrollPosition = window.pageYOffset;
      let isMobile = window.innerWidth <= 768;

      // Add a scroll event listener to the window
      window.addEventListener('scroll', () => {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset;

            // Check if the modal is not active and the screen is not in mobile mode
            if (!isModalActive && !isMobile) {
                  // Check if scrolling up
                  if (currentScrollPosition < lastScrollPosition) {
                        document.body.classList.add('nav-open'); // Show navigation menu
                  } else {
                        document.body.classList.remove('nav-open'); // Hide navigation menu
                  }

                  // Check if scroll position is at the top of the page
                  if (currentScrollPosition <= 100) {
                        document.body.classList.remove('nav-open'); // Hide navigation menu
                  }
            }

            // Update the last scroll position for the next iteration
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

// Function to handle modal interactions
function modal() {
      // Get all project cards and the modal overlay
      const projectCards = document.querySelectorAll('.project-card');
      const modalOverlay = document.getElementById('overlay');

      // Add a click event listener to each project card
      projectCards.forEach((projectCard) => {
            projectCard.addEventListener('click', openModal);
      });

      // Add a click event listener to the modal overlay
      modalOverlay.addEventListener('click', closeModal);

      function openModal(event) {
            if (isModalActive) return; // Prevent opening multiple modals at once
            isModalActive = true;

            // Get the modal ID from the clicked project card
            const modalId = event.currentTarget.dataset.modalId;
            const modalSection = document.getElementById(modalId);

            // Close the navigation menu
            document.body.classList.remove('nav-open');

            // Show the selected modal and the overlay
            modalSection.classList.add('active');
            modalOverlay.classList.add('active');
      }

      function closeModal() {
            isModalActive = false;
            // Get all active modals
            const modalSections = document.querySelectorAll('.modal.active');

            // Hide each active modal
            modalSections.forEach((modalSection) => {
                  modalSection.classList.remove('active');
            });

            // Hide the modal overlay
            modalOverlay.classList.remove('active');
      }
}

// Function to create a carousel effect within modals
function carousel() {
      // Get all modal elements with the class 'modal'
      const modals = document.querySelectorAll('.modal');

      // Iterate through each modal element
      modals.forEach((modal) => {
            // Get all image elements within the modal with the class 'carousel-item'
            const images = modal.querySelectorAll('.carousel-item img');

            // Initialize the index of the currently displayed image
            let currentImageIndex = 0;

            // Function to update the visibility of images based on the current index
            const showImage = () => {
                  // Loop through all images
                  images.forEach((image, index) => {
                        // Display the image if its index matches the current index, hide otherwise
                        if (index === currentImageIndex) {
                              image.style.display = 'block'; // Show the image
                        } else {
                              image.style.display = 'none'; // Hide the image
                        }
                  });
            };

            // Get the previous and next buttons within the modal
            const prevButton = modal.querySelector('.prev-btn');
            const nextButton = modal.querySelector('.next-btn');

            // Add a click event listener to the previous button
            prevButton.addEventListener('click', () => {
                  // Calculate the new index considering wrapping around
                  currentImageIndex =
                        (currentImageIndex - 1 + images.length) % images.length;
                  showImage(); // Update the displayed image
            });

            // Add a click event listener to the next button
            nextButton.addEventListener('click', () => {
                  // Calculate the new index considering wrapping around
                  currentImageIndex = (currentImageIndex + 1) % images.length;
                  showImage(); // Update the displayed image
            });

            // Initial display of the first image
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
