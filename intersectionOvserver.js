document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector(".home-about-paragraph");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );
  
    observer.observe(paragraph);
  });
  