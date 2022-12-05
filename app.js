function slidesPlugin(activeSlide = 3) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  slides.forEach((el) =>
    el.addEventListener('click', () => {
      deleteActiveClasses();
      el.classList.add('active');
    })
  );

  function deleteActiveClasses() {
    slides.forEach((el) => el.classList.remove('active'));
  }
}

slidesPlugin();
