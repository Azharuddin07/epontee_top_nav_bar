document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(item.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });


