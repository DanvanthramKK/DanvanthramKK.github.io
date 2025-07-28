document.addEventListener('DOMContentLoaded', function() {
  // Hide header on scroll down
  let lastScroll = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
  });

  // Activate sections on scroll
  const sections = document.querySelectorAll('.section');
  
  function checkScroll() {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('active');
        
        // Stagger animations for child elements
        const contentBlocks = section.querySelectorAll('.content-block, .skill, .project-card');
        contentBlocks.forEach((block, i) => {
          block.style.transitionDelay = `${i * 0.1}s`;
        });
      }
    });
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
});
