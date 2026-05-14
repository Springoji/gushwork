// script.js

const stickyHeader = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    stickyHeader.classList.add("show");
  } else {
    stickyHeader.classList.remove("show");
  }

});

/* IMAGE CAROUSEL */

const mainImage = document.getElementById("mainImage");

const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.src;

    thumbnails.forEach((item) => {
      item.classList.remove("active");
    });

    thumb.classList.add("active");

  });

});

// scroll to specs when clicking the secondary button
const specsButton = document.querySelector('.secondary-btn');
if (specsButton) {
  specsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('specs');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}