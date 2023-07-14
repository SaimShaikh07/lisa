const animatedParagraphs = document.querySelectorAll(".animated-paragraph");

function animateParagraphs() {
  animatedParagraphs.forEach((paragraph) => {
    if (isElementInViewport(paragraph)) {
      paragraph.classList.add("animate");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", animateParagraphs);

const testimonials = document.querySelectorAll(".testimonial");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
});

testimonials.forEach((testimonial) => {
  observer.observe(testimonial);
});


