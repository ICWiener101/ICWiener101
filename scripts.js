function toggleNav() {
      const toggleButtons = document.querySelectorAll('.toggle-button');
      const contents = document.querySelectorAll('.content');
      let activeIndex = -1;

      toggleButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                  if (activeIndex === index) {
                        contents[activeIndex].classList.remove('expanded');
                        activeIndex = -1;
                  } else {
                        if (activeIndex !== -1) {
                              contents[activeIndex].classList.remove(
                                    'expanded'
                              );
                        }
                        contents[index].classList.add('expanded');
                        activeIndex = index;
                  }
            });
      });
}

toggleNav();
