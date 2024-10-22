document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.about-content p');
    let delay = 500; // Delay between each line
  
    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.style.opacity = 1; // Make the text visible
      }, delay * (index + 1)); // Increase delay for each line
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
