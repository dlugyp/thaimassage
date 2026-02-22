// Simple fade-in on scroll for elements with .fade-in
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const onScroll = () => {
    const trigger = window.innerHeight * 0.85;
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add("visible");
      }
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll);
});